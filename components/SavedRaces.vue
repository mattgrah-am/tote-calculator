<template>
  <div
    class="animate-slide-up rounded-lg bg-neutral-800/90 p-4 shadow-xl backdrop-blur-sm sm:p-6"
  >
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl font-bold text-neutral-100">Saved Races</h2>
      <div class="flex gap-2">
        <button
          :disabled="store.savedRaces.length === 0"
          class="flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-lg disabled:opacity-50"
          @click="store.exportToCSV"
        >
          <Icon name="lucide:download" class="h-4 w-4" />
          Export CSV
        </button>
      </div>
    </div>

    <div
      v-if="store.savedRaces.length === 0"
      class="py-12 text-center text-neutral-400"
    >
      <Icon
        name="lucide:inbox"
        class="mx-auto mb-4 h-12 w-12 text-neutral-500"
      />
      <p class="text-lg">No races saved yet</p>
      <p class="text-sm">Save your first race to see it here</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="race in store.savedRaces.slice().reverse()"
        :key="race.id"
        class="rounded-lg border border-neutral-600 bg-neutral-700/50 p-4 transition-all duration-200 hover:bg-neutral-700/70 hover:shadow-xl"
      >
        <div class="mb-3 flex items-start justify-between">
          <div class="text-sm text-neutral-400">
            <Icon name="lucide:calendar" class="mr-1 inline h-4 w-4" />
            {{ new Date(race.timestamp).toLocaleString() }}
          </div>
          <div class="flex items-center gap-2">
            <div class="text-sm font-medium text-green-400">
              Profit: {{ race.currency }}{{ race.charityProfit.toFixed(2) }}
            </div>
            <button
              class="text-red-400 transition-all duration-200 hover:scale-110 hover:text-red-300"
              @click="store.deleteRace(race.id)"
            >
              <Icon name="lucide:trash-2" class="h-4 w-4" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 text-sm md:grid-cols-5">
          <div class="rounded bg-neutral-600 p-2">
            <div class="text-neutral-300">Tickets</div>
            <div class="font-semibold text-neutral-100">
              {{ race.totalTickets }}
            </div>
          </div>
          <div class="rounded bg-neutral-600 p-2">
            <div class="text-neutral-300">Revenue</div>
            <div class="font-semibold text-neutral-100">
              {{ race.currency }}{{ race.totalRevenue.toFixed(2) }}
            </div>
          </div>
          <div class="rounded bg-neutral-600 p-2">
            <div class="text-neutral-300">Payout</div>
            <div class="font-semibold text-neutral-100">
              {{ race.currency }}{{ race.totalPayout.toFixed(2) }}
            </div>
          </div>
          <div class="rounded bg-neutral-600 p-2">
            <div class="text-neutral-300">Payout %</div>
            <div class="font-semibold text-neutral-100">
              {{ race.payoutPercentage }}%
            </div>
          </div>
          <div class="rounded bg-neutral-600 p-2">
            <div class="text-neutral-300">Ticket Price</div>
            <div class="font-semibold text-neutral-100">
              {{ race.currency }}{{ race.ticketPrice.toFixed(2) }}
            </div>
          </div>
        </div>

        <!-- Race Details -->
        <details class="mt-3">
          <summary
            class="cursor-pointer text-sm text-blue-400 transition-colors duration-200 hover:text-blue-300"
          >
            View Runner Details
          </summary>
          <div class="mt-2 overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-neutral-600">
                  <th class="py-1 text-left text-neutral-200">Runner</th>
                  <th class="py-1 text-center text-neutral-200">Tickets</th>
                  <th class="py-1 text-center text-neutral-200">Payout</th>
                  <th class="py-1 text-center text-neutral-200">Odds</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="runner in race.runners.filter(
                    (r) => r.ticketsSold > 0,
                  )"
                  :key="runner.id"
                  class="border-b border-neutral-600"
                >
                  <td class="py-1 text-neutral-200">Runner {{ runner.id }}</td>
                  <td class="py-1 text-center text-neutral-200">
                    {{ runner.ticketsSold }}
                  </td>
                  <td class="py-1 text-center text-neutral-200">
                    {{ race.currency }}{{ runner.payout.toFixed(2) }}
                  </td>
                  <td class="py-1 text-center text-neutral-200">
                    {{ runner.odds }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToteCalculatorStore } from "@/stores/toteCalculator";

const store = useToteCalculatorStore();
</script>
