<template>
  <div class="mx-auto max-w-4xl p-2 sm:p-6">
    <!-- Settings Section -->
    <section
      class="animate-slide-up mb-6 rounded-lg bg-neutral-800/90 p-4 shadow-xl backdrop-blur-sm sm:p-6"
      aria-labelledby="settings-heading"
    >
      <div class="mb-4 flex items-center gap-2">
        <Icon
          name="lucide:settings"
          class="h-6 w-6 text-neutral-300"
          aria-hidden="true"
        />
        <h2 id="settings-heading" class="text-2xl font-bold text-neutral-100">
          Settings
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div>
          <label
            for="currency-select"
            class="mb-2 block text-sm font-medium text-neutral-300"
          >
            Currency
          </label>
          <select
            id="currency-select"
            v-model="store.currency"
            aria-describedby="currency-help"
            class="w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="£">£ (Pounds)</option>
            <option value="€">€ (Euro)</option>
            <option value="$">$ (Dollar)</option>
            <option value="Points">Fun Money (Points)</option>
          </select>
        </div>

        <div>
          <label
            for="ticket-price"
            class="mb-2 block text-sm font-medium text-neutral-300"
          >
            Ticket Price
          </label>
          <input
            id="ticket-price"
            v-model.number="store.ticketPrice"
            type="number"
            step="0.01"
            min="0.01"
            aria-describedby="ticket-price-help"
            class="w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="payout-percentage"
            class="mb-2 block text-sm font-medium text-neutral-300"
          >
            Payout Percentage: {{ store.payoutPercentage }}%
          </label>
          <input
            id="payout-percentage"
            v-model.number="store.payoutPercentage"
            type="range"
            min="0"
            max="100"
            aria-describedby="payout-help"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="store.payoutPercentage"
            aria-label="Payout percentage slider"
            class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-600"
          />
        </div>

        <div>
          <label
            for="rounding-select"
            class="mb-2 block text-sm font-medium text-neutral-300"
          >
            Rounding
          </label>
          <select
            id="rounding-select"
            v-model.number="store.rounding"
            aria-describedby="rounding-help"
            class="w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option :value="0.01">0.01</option>
            <option :value="0.05">0.05</option>
            <option :value="0.1">0.10</option>
            <option :value="0.25">0.25</option>
            <option :value="0.5">0.50</option>
            <option :value="1.0">1.00</option>
          </select>
        </div>

        <div>
          <label
            for="runners-select"
            class="mb-2 block text-sm font-medium text-neutral-300"
          >
            Number of Runners
          </label>
          <select
            id="runners-select"
            v-model.number="store.numberOfRunners"
            aria-describedby="runners-help"
            class="w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            @change="store.updateRunners(store.numberOfRunners)"
          >
            <option :value="5">5 Runners</option>
            <option :value="8">8 Runners</option>
            <option :value="10">10 Runners</option>
            <option :value="12">12 Runners</option>
            <option :value="15">15 Runners</option>
            <option :value="20">20 Runners</option>
            <option :value="25">25 Runners</option>
            <option :value="30">30 Runners</option>
          </select>
        </div>
      </div>
      <div id="currency-help" class="sr-only">
        Select the currency for ticket prices and payouts
      </div>
      <div id="ticket-price-help" class="sr-only">
        Set the price per ticket in your chosen currency
      </div>
      <div id="payout-help" class="sr-only">
        Percentage of total revenue that goes to winners
      </div>
      <div id="rounding-help" class="sr-only">How to round payout amounts</div>
      <div id="runners-help" class="sr-only">
        Select the number of runners in your race or event
      </div>
    </section>

    <!-- Race Calculator -->
    <section
      class="animate-slide-up mb-6 rounded-lg bg-neutral-800/90 p-4 shadow-xl backdrop-blur-sm sm:p-6"
      aria-labelledby="calculator-heading"
    >
      <div class="mb-4 flex items-center gap-2">
        <Icon
          name="lucide:calculator"
          class="h-6 w-6 text-neutral-300"
          aria-hidden="true"
        />
        <h2 id="calculator-heading" class="text-2xl font-bold text-neutral-100">
          Race Calculator
        </h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full" role="table" aria-label="Runner betting data">
          <thead>
            <tr class="border-b-2 border-neutral-600 text-sm sm:text-base">
              <th
                class="px-2 py-3 text-center font-semibold text-neutral-200 sm:text-left"
              >
                Runner
              </th>
              <th class="px-2 py-3 text-center font-semibold text-neutral-200">
                Tickets Sold
              </th>
              <th class="px-2 py-3 text-center font-semibold text-neutral-200">
                Payout per Ticket
              </th>
              <th class="px-2 py-3 text-center font-semibold text-neutral-200">
                Odds
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="runner in store.runners"
              :key="runner.id"
              class="cursor-pointer border-b border-neutral-700 text-sm transition-colors duration-200 hover:bg-neutral-700/50 sm:text-base"
              :class="{
                'bg-green-900/30': runner.ticketsSold > 0,
              }"
              @click="focusTicketInput(runner.id)"
            >
              <td
                class="px-2 py-3 text-center font-medium text-neutral-200 transition-colors duration-200 hover:text-blue-400 sm:text-left"
              >
                Runner {{ runner.id }}
              </td>
              <td class="px-1.5 py-2 text-center sm:px-2 sm:py-3" @click.stop>
                <input
                  :id="`ticket-input-${runner.id}`"
                  v-model.number="runner.ticketsSold"
                  type="number"
                  min="0"
                  :aria-label="`Tickets sold for runner ${runner.id}`"
                  class="w-24 rounded border border-neutral-600 bg-neutral-700 px-2 py-1 text-center text-neutral-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  @input="store.calculatePayouts"
                />
              </td>
              <td class="px-2 py-3 text-center font-medium">
                <span
                  :class="{
                    'text-green-400': runner.payout > 0,
                    'text-neutral-400': runner.payout === 0,
                  }"
                >
                  {{ store.currency }}{{ runner.payout.toFixed(2) }}
                </span>
              </td>
              <td class="px-2 py-3 text-center">
                <span
                  class="rounded bg-neutral-700 px-2 py-1 text-sm text-nowrap text-neutral-200"
                >
                  {{ runner.odds }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Summary -->
      <div
        class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4"
        role="region"
        aria-labelledby="summary-heading"
      >
        <h3 id="summary-heading" class="sr-only">Race Summary Statistics</h3>
        <div
          class="rounded-lg border border-blue-700 bg-blue-900/30 p-4 transition-all duration-200 hover:bg-blue-900/40"
        >
          <div class="text-sm font-medium text-blue-300">Total Tickets</div>
          <div class="text-2xl font-bold text-blue-200">
            {{ store.totalTickets }}
          </div>
        </div>
        <div
          class="rounded-lg border border-purple-700 bg-purple-900/30 p-4 transition-all duration-200 hover:bg-purple-900/40"
        >
          <div class="text-sm font-medium text-purple-300">Total Revenue</div>
          <div class="text-2xl font-bold text-purple-200">
            {{ store.currency }}{{ store.totalRevenue.toFixed(2) }}
          </div>
        </div>
        <div
          class="rounded-lg border border-orange-700 bg-orange-900/30 p-4 transition-all duration-200 hover:bg-orange-900/40"
        >
          <div class="text-sm font-medium text-orange-300">Total Payout</div>
          <div class="text-2xl font-bold text-orange-200">
            {{ store.currency }}{{ store.totalPayout.toFixed(2) }}
          </div>
        </div>
        <div class="rounded-lg border border-green-700 bg-green-900/30 p-4">
          <div class="text-sm font-medium text-green-300">
            Total Profit (if applicable)
          </div>
          <div class="text-2xl font-bold text-green-200">
            {{ store.currency }}{{ store.charityProfit.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 flex flex-wrap gap-4">
        <button
          :disabled="store.totalTickets <= 0"
          aria-describedby="save-help"
          class="flex cursor-pointer items-center gap-2 rounded bg-blue-500 px-6 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          @click="store.saveRace"
        >
          <Icon name="lucide:save" class="h-4 w-4" aria-hidden="true" />
          Save Race
        </button>
        <button
          aria-describedby="reset-help"
          class="flex cursor-pointer items-center gap-2 rounded bg-red-500 px-6 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-red-600 hover:shadow-lg"
          @click="store.resetRace"
        >
          <Icon name="lucide:rotate-ccw" class="h-4 w-4" aria-hidden="true" />
          Reset
        </button>
      </div>
      <div id="save-help" class="sr-only">
        Save the current race data to your browser storage
      </div>
      <div id="reset-help" class="sr-only">
        Clear all ticket entries to start a new race
      </div>
    </section>

    <!-- Saved Races -->
    <SavedRaces />
  </div>
</template>

<script setup lang="ts">
import { useToteCalculatorStore } from "@/stores/toteCalculator";

const store = useToteCalculatorStore();

// Focus ticket input when runner name is clicked
const focusTicketInput = (runnerId: number) => {
  nextTick(() => {
    const inputElement = document.getElementById(
      `ticket-input-${runnerId}`,
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.focus();
      inputElement.select();
    }
  });
};

// Auto-calculate payouts when settings change
watch(
  [
    () => store.payoutPercentage,
    () => store.rounding,
    () => store.ticketPrice,
    () => store.numberOfRunners,
  ],
  () => {
    store.calculatePayouts();
  },
);
</script>
