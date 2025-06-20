# 🏆 Tote Calculator

A modern, dark-themed web application for calculating betting payouts in customizable tote systems (5-30 runners). Built with Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.

![Tote Calculator](https://img.shields.io/badge/Nuxt-3.17.5-00DC82?style=flat&logo=nuxt.js)
![Vue](https://img.shields.io/badge/Vue-3.5.16-4FC08D?style=flat&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-7.0.0-06B6D4?style=flat&logo=tailwindcss)

## ✨ Features

### 🎯 Core Functionality
- **Customizable Runner System**: Complete tote betting calculator for 5-30 runners (default: 15)
- **Real-time Calculations**: Automatic payout and odds calculations as you type
- **Flexible Settings**: Customizable number of runners, currency, ticket price, payout percentage, and rounding
- **Race Management**: Save, view, and delete completed races
- **Data Export**: Export race history to CSV format

### 🎨 User Experience
- **Dark Theme**: Beautiful dark UI using Tailwind's neutral palette
- **Interactive Rows**: Click anywhere on a runner row to focus and select the ticket input
- **Visual Feedback**: Color-coded payouts, hover effects, and smooth animations
- **Responsive Design**: Mobile-first design with optimized layouts for all screen sizes
- **Accessibility**: WCAG 2.1 compliant with ARIA labels, semantic HTML, and keyboard navigation
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic markup

### 💾 Data Management
- **Local Storage**: Automatic saving of race history to browser storage
- **Type Safety**: Full TypeScript support with proper interfaces
- **Data Validation**: Input validation and error handling
- **Export Features**: CSV export for record keeping
- **PWA Support**: Progressive Web App with offline capabilities and app-like experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tote-calculator

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 🛠️ Development

### Code Quality

```bash
# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Project Structure

```
tote-calculator/
├── components/
│   ├── ToteCalculator.vue    # Main calculator interface with runner customization
│   └── SavedRaces.vue        # Race history management
├── stores/
│   └── toteCalculator.ts     # Pinia state management with dynamic runners
├── assets/css/
│   └── main.css              # Tailwind CSS imports
├── public/
│   ├── manifest.json         # PWA configuration
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # SEO robots file
├── app.vue                   # Root component
├── nuxt.config.ts           # Nuxt configuration with SEO meta tags
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## 🎮 How to Use

### 1. Configure Settings
- **Number of Runners**: Choose from 5, 8, 10, 12, 15, 20, 25, or 30 runners
- **Currency**: Choose from £, €, $, or Points
- **Ticket Price**: Set the cost per ticket
- **Payout Percentage**: Adjust what percentage goes to winners (0-100%)
- **Rounding**: Choose rounding precision (0.01 to 1.00)

### 2. Enter Ticket Sales
- Adjust the number of runners to match your event (5-30 runners)
- Click anywhere on a runner row to focus the tickets sold input
- Enter the number of tickets sold for each runner
- Text is automatically selected for easy overwriting
- Payouts and odds calculate automatically in real-time

### 3. Manage Races
- **Save Race**: Store the current race data
- **Reset**: Clear all ticket entries
- **View History**: See all saved races with details
- **Export CSV**: Download race data for external use

## 🏗️ Technical Stack

### Frontend Framework
- **Nuxt 3**: Full-stack Vue framework with SSR/SPA capabilities
- **Vue 3**: Reactive frontend framework with Composition API
- **TypeScript**: Type-safe development environment

### State Management
- **Pinia**: Modern state management for Vue
- **LocalStorage**: Persistent data storage in browser

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Theme**: Custom neutral color palette
- **Responsive Design**: Mobile-first approach

### Development Tools
- **ESLint**: Code linting and formatting
- **Nuxt DevTools**: Enhanced development experience
- **Vite**: Fast build tool and dev server

## 📱 Responsive Design & PWA

The application is fully responsive with:
- **Desktop**: 896px max-width containers for optimal readability (max-w-4xl)
- **Tablet**: Adaptive grid layouts and touch-friendly interfaces
- **Mobile**: Optimized for small screens with reduced padding and collapsible elements
- **PWA Features**: Installable as a standalone app with offline capabilities
- **App Manifest**: Complete web app manifest for native-like experience

## 🎨 Design System

### Color Palette
- **Background**: Deep neutral-950 for maximum contrast
- **Cards**: Semi-transparent neutral-800/90 with backdrop blur
- **Text**: High contrast neutral-100/200 for readability
- **Accents**: Blue for interactive elements, green for positive values
- **Extended**: Custom neutral-850 (#1a1a1a) and neutral-950 (#0a0a0a)

### Typography
- **Headers**: Bold neutral-100 for maximum visibility
- **Body**: neutral-200 for comfortable reading
- **Labels**: neutral-300 for form elements
- **Muted**: neutral-400 for secondary information

## 🔧 Configuration

### Environment Variables
No environment variables required - the app runs entirely client-side.

### Customization
- Modify `tailwind.config.js` for design system changes
- Update `stores/toteCalculator.ts` for business logic modifications
- Adjust responsive breakpoints in component templates
- Configure ESLint rules in `eslint.config.mjs` for code style preferences

### SEO Configuration
- Domain configured as `https://tote-calculator.matg.dev` in `nuxt.config.ts`, sitemap.xml, and robots.txt
- All SEO configuration is centralized in `nuxt.config.ts` for better performance
- Customize structured data for search engines
- Add social media images for Open Graph and Twitter cards
- Configure PWA icons and manifest for app store optimization

## 📦 Dependencies

### Core
- **nuxt**: ^3.17.5 - Full-stack framework
- **vue**: ^3.5.16 - Frontend framework
- **vue-router**: ^4.5.1 - Client-side routing

### State & Storage
- **pinia**: ^3.0.3 - State management
- **@pinia/nuxt**: ^0.11.1 - Nuxt integration

### UI & Styling
- **@nuxtjs/tailwindcss**: ^7.0.0-beta.0 - CSS framework
- **@nuxt/icon**: ^1.14.0 - Icon system

### Development
- **@nuxt/eslint**: ^1.4.1 - Linting configuration
- **eslint**: ^9.29.0 - Code linting
- **prettier**: ^3.5.3 - Code formatting
- **prettier-plugin-tailwindcss**: ^0.6.13 - Tailwind class sorting
- **typescript**: Latest - Type safety

### ESLint Configuration
- Custom rules configured to allow self-closing HTML void elements
- Nuxt 3 ESLint integration with Vue.js support
- Automatic code quality enforcement

### SEO & Accessibility Features
- **Meta Tags**: Comprehensive SEO meta tags in `nuxt.config.ts` including Open Graph and Twitter
- **Structured Data**: JSON-LD schema markup for search engines
- **Semantic HTML**: Proper heading hierarchy and landmark roles
- **ARIA Labels**: Screen reader friendly with descriptive labels
- **Sitemap**: XML sitemap for search engine discovery
- **PWA Manifest**: Full Progressive Web App configuration
- **Performance**: Optimized for Core Web Vitals and page speed
- **Centralized Config**: All SEO configuration in one place for easy maintenance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Run linting: `npm run lint:fix`
5. Test accessibility with screen readers
6. Verify SEO meta tags are properly configured
7. Commit your changes: `git commit -m 'Add feature'`
8. Push to the branch: `git push origin feature-name`
9. Submit a pull request

### SEO Checklist for Contributors
- [ ] Meta tags updated in `nuxt.config.ts` for new features
- [ ] Structured data reflects changes in the config
- [ ] Semantic HTML maintained in components
- [ ] ARIA labels added for interactive elements
- [ ] Alt text provided for images
- [ ] Heading hierarchy preserved

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Nuxt 3](https://nuxt.com/) and [Vue 3](https://vuejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- State management with [Pinia](https://pinia.vuejs.org/)

---

**Made with 🖤 by [Matt Graham](https://matg.dev/)**