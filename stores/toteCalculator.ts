interface SavedRace {
  id: number;
  timestamp: string;
  runners: Array<{
    id: number;
    ticketsSold: number;
    payout: number;
    odds: string;
  }>;
  totalTickets: number;
  totalRevenue: number;
  totalPayout: number;
  charityProfit: number;
  currency: string;
  payoutPercentage: number;
  ticketPrice: number;
}

export const useToteCalculatorStore = defineStore("toteCalculator", () => {
  // Settings
  const currency = ref("$");
  const payoutPercentage = ref(50);
  const rounding = ref(0.5);
  const ticketPrice = ref(1.0);

  // Race data
  const runners = ref(
    Array(15)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        ticketsSold: 0,
        payout: 0,
        odds: "N/A",
      })),
  );

  // Saved races
  const savedRaces = ref<SavedRace[]>([]);

  // Computed
  const totalTickets = computed(() =>
    runners.value.reduce((sum, runner) => sum + runner.ticketsSold, 0),
  );

  const totalRevenue = computed(() => totalTickets.value * ticketPrice.value);

  const totalPayout = computed(
    () => (totalRevenue.value * payoutPercentage.value) / 100,
  );

  const charityProfit = computed(() => totalRevenue.value - totalPayout.value);

  // Methods
  const roundToNearest = (value: number, nearest: number) => {
    return Math.round(value / nearest) * nearest;
  };

  const calculateOdds = (ticketsSold: number) => {
    if (ticketsSold === 0) return "N/A";
    const odds = totalTickets.value / ticketsSold;
    return `${odds.toFixed(1)}/1`;
  };

  const calculatePayouts = () => {
    if (totalTickets.value === 0) return;

    runners.value.forEach((runner) => {
      if (runner.ticketsSold > 0) {
        const rawPayout = totalPayout.value / runner.ticketsSold;
        runner.payout = roundToNearest(rawPayout, rounding.value);
        runner.odds = calculateOdds(runner.ticketsSold);
      } else {
        runner.payout = 0;
        runner.odds = "N/A";
      }
    });
  };

  const saveRace = () => {
    const raceData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      runners: [...runners.value],
      totalTickets: totalTickets.value,
      totalRevenue: totalRevenue.value,
      totalPayout: totalPayout.value,
      charityProfit: charityProfit.value,
      currency: currency.value,
      payoutPercentage: payoutPercentage.value,
      ticketPrice: ticketPrice.value,
    };
    savedRaces.value.push(raceData);

    // Save to localStorage
    if (import.meta.client) {
      localStorage.setItem(
        "tote-saved-races",
        JSON.stringify(savedRaces.value),
      );
    }
  };

  const resetRace = () => {
    runners.value.forEach((runner) => {
      runner.ticketsSold = 0;
      runner.payout = 0;
      runner.odds = "N/A";
    });
  };

  const deleteRace = (raceId: number) => {
    savedRaces.value = savedRaces.value.filter((race) => race.id !== raceId);
    if (import.meta.client) {
      localStorage.setItem(
        "tote-saved-races",
        JSON.stringify(savedRaces.value),
      );
    }
  };

  const loadSavedRaces = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem("tote-saved-races");
      if (saved) {
        savedRaces.value = JSON.parse(saved);
      }
    }
  };

  const exportToCSV = () => {
    if (savedRaces.value.length === 0) return;

    const csvHeaders =
      "Date,Total Tickets,Total Revenue,Total Payout,Charity Profit,Payout %,Currency\n";
    const csvRows = savedRaces.value
      .map((race) => {
        const date = new Date(race.timestamp).toLocaleDateString();
        return `${date},${race.totalTickets},${race.totalRevenue.toFixed(2)},${race.totalPayout.toFixed(2)},${race.charityProfit.toFixed(2)},${race.payoutPercentage}%,${race.currency}`;
      })
      .join("\n");

    const csvContent = csvHeaders + csvRows;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `tote-races-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Initialize
  if (import.meta.client) {
    loadSavedRaces();
  }

  return {
    currency,
    payoutPercentage,
    rounding,
    ticketPrice,
    runners,
    savedRaces,
    totalTickets,
    totalRevenue,
    totalPayout,
    charityProfit,
    calculatePayouts,
    saveRace,
    resetRace,
    deleteRace,
    exportToCSV,
    loadSavedRaces,
  };
});
