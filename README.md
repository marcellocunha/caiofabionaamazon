<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Caio Fábio LinkTree Banner" width="100%" style="border-radius: 10px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);" />

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
