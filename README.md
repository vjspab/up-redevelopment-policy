# UP Redevelopment Policy 2026 - Interactive Portal

An interactive web portal and FAR (Floor Area Ratio) simulator for the **Uttar Pradesh Urban Redevelopment Policy 2026**. This application transforms the dense policy document into an engaging, user-friendly digital experience.

## Features

- 📊 **Policy Insights**: High-level summaries, key figures, and financial exemptions highlighted visually.
- 🧮 **FAR Simulator**: Interactive calculator to visualize the physical benefits of redevelopment (e.g., increased built-up area and commercial allowance) based on plot size and base FAR.
- 📄 **Full Policy Documents**: Complete official policy text available in both English and Hindi for reference and printing.

## Technology Stack

- **React 18**
- **Vite** (for fast build tooling)
- **Tailwind CSS v4** (Utility-first CSS styling)
- **Lucide React** (Beautiful, consistent icons)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vjspab/up-redevelopment-policy.git
   cd up-redevelopment-policy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Deployment

This application is ready to be deployed to Vercel (or any other standard static hosting provider). It is structured as a standard Vite application:

```bash
npm run build
```

This will output the static files to the `dist/` directory.

## License

This project is created for public information and simulation regarding the UP Urban Redevelopment Policy 2026.
