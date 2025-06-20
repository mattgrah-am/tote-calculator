<template>
  <Html class="dark">
    <Head>
      <Title>Tote Calculator</Title>
    </Head>
  </Html>
  <div class="min-h-screen bg-neutral-950">
    <header
      class="border-b border-neutral-700 bg-neutral-800/90 shadow-lg backdrop-blur-sm"
    >
      <div class="mx-auto max-w-4xl px-6 py-4">
        <div class="flex items-center gap-3">
          <Icon
            name="lucide:trophy"
            class="h-8 w-8 animate-pulse text-blue-400"
          />
          <div>
            <h1 class="text-3xl font-bold text-neutral-100">Tote Calculator</h1>
            <p class="text-sm text-neutral-400">15 Runner Betting System</p>
          </div>
        </div>
      </div>
    </header>

    <main class="animate-fade-in py-6">
      <ToteCalculator />
    </main>

    <footer
      class="mt-12 border-t border-neutral-700 bg-neutral-800/90 backdrop-blur-sm"
    >
      <div class="mx-auto max-w-4xl px-6 py-4">
        <p class="text-center text-sm text-neutral-400">
          Created with 🖤 by
          <NuxtLink
            to="https://matg.dev/"
            class="hover:font-semibold hover:underline hover:underline-offset-2"
            target="_blank"
            >Matt Graham</NuxtLink
          >
        </p>
      </div>
    </footer>
  </div>
</template>
