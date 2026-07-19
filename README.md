# VISTARA – Premium Hospitality & Booking Platform

A high-performance, responsive single-page hotel management web application built using **React** and styled with **Bootstrap**. This application features dynamic room availability lookup, premium slider carousels, customizable marketing offer grids, and an interactive real-time multi-category restaurant menu with automated shopping cart selectors. 

The entire codebase natively supports fully localized layout shifting between English (**LTR**) and Arabic (**RTL**) seamlessly across all pages.

---

## 🗺️ Architectural Curriculum & Core Competencies

This project implements critical frontend engineering patterns. It can be utilized as a curriculum outline for studying medium-scale single-page architectures:

1. **Global App State Interactivity & Synchronization**
   * Lifting language toggle matrices across global router branches (`isEnglish`, `setIsEnglish`).
   * Component data syncing from local storage configurations and JSON templates.
2. **Atomic & Dynamic Page-Specific Grid Configurations**
   * Advanced multi-layout strategies inside responsive wrappers utilizing a strict 12-column math matrix.
   * Floating, independent dropdown overlays managed cleanly within static screen frames.
3. **Advanced Conditional Asset Rendering**
   * Toggling array mutation rules dynamically (`prev => [...prev, item]` vs `.filter()`).
   * Combining textual arrays into unique, color-coded, self-destructing badges.
4. **Bi-Directional Alignment Shifts**
   * Dynamic structural modifications (`dir="ltr"` / `dir="rtl"`).
   * Smart alignment parameters (`ms-auto` vs `me-auto`) handling localized typography orientations cleanly.

---

## 🚀 Key Features

* **🧳 Responsive Room Booking Dashboards:** Custom check-in and check-out filters utilizing `react-datepicker`. Features a floating counter modal for rooms, adults, and child validation setups.
* **🍕 Integrated Restaurant Ordering Console:** Interactive multi-category lists (Pizzas, Coffees, Soups) mapped instantly with fixed pixel scaling overlays and custom array-toggled checkout drawers.
* **✨ Dynamic Offers Grid Layout:** Modern card blocks displaying localized regional vacation tags with clean hover scaling animations.
* **🧭 Floating Navigation Structure:** Sticky desktop navbar menus incorporating custom partial logo color splits and hidden pop-up action panels.

---

## 🛠️ Tech Stack & Dependencies

The system uses standard modern web building libraries:
* **Framework:** React 18+ (Hooks-driven architecture)
* **Styling & Components:** React-Bootstrap 5+ & Native CSS Custom Variables
* **Navigation Core:** React Router DOM v6
* **Extended UI Controls:** `react-datepicker` & `react-icons`

---

## 📂 File Architecture Mapping

```text
src/
├── App.jsx                # Global App state routing engine & directional tracking
├── App.css                # Global utility classes & image aspect configuration limits
├── components/
│   ├── Heading.jsx        # Sticky dark theme navigation bar & language switch matrix
│   ├── Footer.jsx         # Uniform application structural layout base
│   ├── Slides.jsx         # Hero Carousel overlay sliders with text-shadow control
│   ├── CheckDate.jsx      # Guest allocation selector & check-in calendar grid
│   ├── BookingNight.jsx   # Grid-aligned, localized booking customer details form
│   ├── Modules.jsx        # Centered "Contact Us" pop-up overlay modal
│   ├── Order.jsx          # Dual-column shell coordinating the food layout views
│   └── Delivery.jsx       # Micro aspect-ratio menu visual card container blocks
├── data/
│   ├── booking.json       # Stay packages mock data
│   └── orders.json        # Restaurant items, visual paths, and category indices
└── pages/
    ├── Home.jsx           # Landing page rendering main restaurant grids
    ├── Booking.jsx        # Calendar widgets and booking packages portal
    ├── Offers.jsx         # Vacation packages promotional grid
    └── About.jsx          # Feature blocks and context information section
```

---

## 📋 Component Layout API Overview

### 1. Global Navigation Configuration (`Heading.jsx`)
```jsx
// Receives atomic context to dictate systemic state mutations
function Heading({ isEnglish, setIsEnglish }) { ... }
```
Manages localized link structural lists. Toggles classes dynamically based on active localization properties:
* Left-to-Right (`LTR`): Appends `ms-auto` grid spacing (pushing elements left).
* Right-to-Left (`RTL`): Appends `me-auto` grid spacing (pushing elements right).

### 2. Live Cart Integration (`HolderOrder.jsx`)
Takes 3 separate state arrays along with state modifiers as parameters. It renders corresponding contextual tracking badges dynamically:
```jsx
const HolderOrder = ({ holder, holderCoffee, holderSoup, setHolder, setHolderCoffee, setHolderSoup }) => { ... }
```

---
Business Requirements

User Roles

Database Schema

Booking Rules

Restaurant Rules

Admin Dashboard Scope

API Specification

Authentication Flow

Deployment Architecture

Environment Variables

Backend Tech Stack
## ⚙️ Installation & Local Server Deployment

Follow these quick commands to spin up the application on your computer:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd VISTARA
   ```

2. **Install all required frontend libraries:**
   ```bash
   npm install react-bootstrap bootstrap react-router-dom react-datepicker react-icons
   ```

3. **Start the local Webpack dev server:**
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your web browser to check out the application.

---

## 📝 Future Technical Extensions Roadmap
* **Database Integration:** Connect the state handlers to a secure Node.js backend API instead of local json files.
* **Authentication Matrix:** Implement secure login routes for guests checking their hotel packages.
* **Payment Processing Integration:** Wire up an active payment gateway inside the restaurant cart submission modal.

