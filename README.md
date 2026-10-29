# LOGIC LORE — Story-Driven STEM Learning

> **READ. BUILD. SAVE HUMANITY.**

A complete, responsive, and interactive startup website for **LOGIC LORE**, an educational technology venture that transforms science education into an adventure by combining science-fiction comics, real electronics components, illustrated lab guides, and hands-on engineering challenges for children aged 8–14.

---

## ⚡ Brand Architecture

- **Company & Parent Brand:** **LOGIC LORE**
- **Flagship Product:** **THE LAST SPARK**
- **Brand Tagline:** `READ. BUILD. SAVE HUMANITY.`
- **Website Title:** `Logic Lore | Story-Driven STEM Learning`
- **Product Presentation:** *"THE LAST SPARK — A STEM Learning Kit by LOGIC LORE"*
- **Target Audience:** Ages 8–14, Parents & Guardians, Schools, Tinkering Labs & STEM Clubs
- **Initial Target Market:** India (All prices in Indian Rupees ₹)
- **Flagship Proposed Retail Price:** ₹1,499

---

## 🚀 Key Features & Routes

- **`/` — Homepage:**
  - Dark cinematic hero section with circuit grid and glowing blue aesthetics
  - Introduction to the LOGIC LORE methodology (*Learn by Doing*, *Think like an Engineer*, *Follow the Adventure*)
  - Flagship product showcase with direct Add-to-Cart
  - 4-Stage Learning Loop (*Read the Story → Understand the Science → Build the Circuit → Complete the Mission*)
  - Comic universe preview featuring original characters (*Aarav*, *Maya*, *Kabir*, *SPARK-E*) and the blackout metropolis
  - 12-component proposed hardware grid with real component details
  - Safety and supervised exploration notice
  - Institutional & school partnership overview
  - 10-item FAQ accordion and brand footer
- **`/products` — Explore Kits:**
  - Product catalog featuring **THE LAST SPARK** (₹1,499)
  - 4 upcoming STEM concepts: *Smart City Explorer*, *Circuit Superheroes*, *RoboRangers*, *Renewable Energy Missions*
  - Category filtering and price sorting
- **`/products/the-last-spark` — Product Details:**
  - 5-view image gallery switcher
  - Full hardware package manifest (60+ components)
  - Specifications, learning goals, and safety guidelines
  - Quantity selector, instant visual cart toast feedback, and Buy Now checkout shortcut
- **`/story` — The Story Universe:**
  - Immersive graphic novel background and narrative lore
  - Character dossiers with tech specialties and signature gadgets
  - Interactive mission selector (Missions 1 to 4 with story dilemmas & hands-on builds)
- **`/for-schools` — Institutional & Labs:**
  - Curricular benefits for classrooms and STEM clubs
  - Form for school inquiries and bulk kit estimation with validation
- **`/about` — About LOGIC LORE:**
  - Mission, approach, "Why Storytelling Matters", and vision
- **`/contact` — Communications:**
  - Department routing (*General*, *Schools*, *Product Support*, *Safety*) with validated form
- **`/cart` — Working Shopping Cart:**
  - Live quantity adjustment, remove item, subtotal calculations, and `localStorage` persistence
  - Empty cart state with quick actions
- **`/checkout` — Demo Checkout:**
  - Delivery address form with Indian PIN code and mobile number validation
  - Clear architectural documentation for production payment provider integration (e.g. Razorpay)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 + Custom Design Tokens (Deep Navy, Electric Cyan, Neon Violet, Energy Orange)
- **Icons:** Lucide React
- **Routing:** React Router DOM v7 + Custom ScrollToTop
- **State Management:** Reactive Cart Context with browser LocalStorage synchronization

---

## 📦 Project Structure

```text
logic-lore/
├── public/
│   ├── favicon.svg                   # Custom LOGIC LORE circuit spark logo
│   └── images/                       # High-resolution concept & lifestyle assets
│       ├── product-bundle.png        # Retail box, open kit, comic, guide & cards
│       ├── product-open-kit.png      # Overhead view of component tray
│       ├── product-tray-display.png  # Modular kit & schematic layout
│       ├── children-building-kit.jpg # Lifestyle photo of young inventors
│       └── story-city-monster.jpg    # Comic art of dark city & shadow titan
├── src/
│   ├── components/
│   │   ├── AccountModal.tsx          # Young Inventor ID terminal
│   │   ├── Footer.tsx                # Brand footer maintaining LOGIC LORE identity
│   │   ├── Navbar.tsx                # Responsive header with search, account & cart
│   │   ├── NotificationToast.tsx     # Cart feedback notification
│   │   ├── ProductCard.tsx           # Reusable product cards
│   │   ├── ScrollToTop.tsx           # Route change scroll reset
│   │   └── SearchModal.tsx           # Instant search modal
│   ├── context/
│   │   └── CartContext.tsx           # E-commerce cart state & local storage
│   ├── data/
│   │   ├── brand.ts                  # Brand metadata, FAQs, characters & policies
│   │   └── products.ts               # Central products catalog & hardware manifests
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ForSchoolsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ProductDetailsPage.tsx
│   │   ├── ProductsPage.tsx
│   │   └── StoryPage.tsx
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces for products, cart & forms
│   ├── App.tsx                       # Global router configuration
│   ├── index.css                     # Tailwind v4 styles & circuit glow utilities
│   └── main.tsx                      # Application root entry point
├── index.html                        # SEO metadata, Open Graph & Google Fonts
├── package.json                      # Dependencies and build scripts
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite + Tailwind plugin config
```

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the website.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be created inside the `dist/` directory.

---

## 🔒 Future Integration Readiness

- **Payment Gateway:** Prepared for server-side order token generation with Razorpay / Cashfree.
- **Form Endpoints:** Form state handlers in `/for-schools` and `/contact` are ready for webhook or REST API integration (e.g., Supabase, Resend, or AWS SES).
- **Curriculum Expansions:** The catalog architecture in `src/data/products.ts` supports adding future products under the LOGIC LORE brand without changing layout code.

---

## 📄 License & Copyright

© 2026 **Logic Lore Technologies Private Limited**. All rights reserved.  
*THE LAST SPARK is a STEM learning kit created and sold by LOGIC LORE.*
