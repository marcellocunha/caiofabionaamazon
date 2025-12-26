<div align="center">
  
  <h1>Linktree - Caio Fábio na Amazon</h1>

  <p>
    <strong>A centralized hub for books and international Amazon stores.</strong>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a>
  </p>
</div>

---

## 📖 Overview

**Linktree - Caio Fábio na Amazon** is a modern, highly responsive landing page designed to aggregate and showcase links to Caio Fábio's literary works and his presence across various global Amazon marketplaces.

Built with a focus on aesthetics and user experience, the application features a polished dark theme, smooth entry animations, and a clean, mobile-optimized interface.

## ✨ Features

- **🎨 Modern Aesthetic**: Deep, atmospheric dark mode (Slate/Indigo) with glassmorphism effects.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.
- **⚡ High Performance**: Built on Vite for lightning-fast loading and development.
- **🎬 Smooth Animations**: Utilizing `framer-motion` for elegant entry and detailed interactions.
- **🌍 Regional Categorization**: Organized sections for "Americas", "Europe", and "Asia/Oceania" stores.
- **🔗 Dynamic Content**: Easy-to-maintain link structure separated into data constants.

## 🛠 Tech Stack

This project leverages a robust modern stack to ensure maintainability and performance:

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN) + Custom CSS Variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcellocunha/caiofabionaamazon.git
   cd caiofabionaamazon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000/caiofabionaamazon/`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Deployment

To deploy updates to the live site on GitHub Pages:

> [!IMPORTANT]
> **Pushing to GitHub does NOT automatically update the live site.**
> You MUST run the deploy command (Step 2) to build and publish the changes to GitHub Pages.

1. **Push changes to the repository**:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin master
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

🚀 **Live Deployment**: [https://marcellocunha.github.io/caiofabionaamazon/](https://marcellocunha.github.io/caiofabionaamazon/)

## 📂 Project Structure

```
├── components/       # Reusable UI components (LinkCard, Banner, etc.)
├── constants.ts      # Data source for links, profile info, and configuration
├── App.tsx           # Main application entry point and layout
├── index.html        # Entry HTML (Tailwind CDN configuration)
└── vite.config.ts    # Vite configuration settings
```

## 📝 Customization

To update links or profile information, modify the `constants.ts` file. This centralizes all content, making it easy to add new books or regions without touching the UI logic.

---

<div align="center">
  <p>Developed with ❤️ by Marcello Cunha</p>
</div>
