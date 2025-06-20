// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/icon"],
  ssr: false,

  // SEO and Performance
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
        class: "dark",
      },
      title:
        "Free Tote Calculator - Customizable Runner Betting System | Calculate Payouts & Odds",
      meta: [
        {
          name: "description",
          content:
            "Professional tote calculator with customizable runners (5-30). Calculate payouts, odds, and profits instantly. Free tool for charity events, horse racing, and betting pools.",
        },
        {
          name: "keywords",
          content:
            "tote calculator, betting calculator, payout calculator, odds calculator, tote betting, horse racing calculator, charity betting, sweepstake calculator, customizable runners",
        },
        {
          name: "author",
          content: "Matt Graham",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "theme-color",
          content: "#0a0a0a",
        },
        // Open Graph / Social Media
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Free Tote Calculator - Customizable Runner Betting System",
        },
        {
          property: "og:description",
          content:
            "Professional tote calculator with customizable runners (5-30). Calculate payouts, odds, and profits instantly.",
        },
        {
          property: "og:url",
          content: "https://tote-calculator.matg.dev",
        },
        {
          property: "og:site_name",
          content: "Tote Calculator",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Free Tote Calculator - Customizable Runner Betting System",
        },
        {
          name: "twitter:description",
          content:
            "Professional tote calculator with customizable runners (5-30). Calculate payouts, odds, and profits instantly.",
        },
        // Apple Web App
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Tote Calculator",
        },
        // Microsoft Tiles
        {
          name: "msapplication-TileColor",
          content: "#0a0a0a",
        },
        {
          name: "msapplication-config",
          content: "/browserconfig.xml",
        },
      ],
      link: [
        // Canonical URL
        {
          rel: "canonical",
          href: "https://tote-calculator.matg.dev",
        },
        // PWA Manifest
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        // Favicon
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },

        // Apple Touch Icons
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
      ],
      script: [
        // Structured Data
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Tote Calculator",
            description:
              "Professional tote calculator with customizable runners (5-30)",
            url: "https://tote-calculator.matg.dev",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Person",
              name: "Matt Graham",
              url: "https://matg.dev",
            },
            featureList: [
              "Customizable Runner Betting Calculator (5-30 runners)",
              "Real-time Payout Calculations",
              "Odds Calculator",
              "Race Management",
              "CSV Export",
              "Mobile Responsive",
            ],
          }),
        },
      ],
    },
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // Sitemap generation
  hooks: {
    "render:route": (url, result) => {
      if (url === "/") {
        result.html = result.html.replace(
          "<head>",
          '<head>\n<link rel="preconnect" href="https://fonts.googleapis.com">',
        );
      }
    },
  },

  // CSS optimization
  css: ["~/assets/css/main.css"],

  // Bundle optimization
  build: {
    transpile: [],
  },
});
