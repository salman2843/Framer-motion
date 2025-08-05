Here’s a clean and professional `README.md` for your **React + Tailwind E-Commerce Project** (perfume store) based on everything you’ve built so far:

---

# 🛍️ ScentAura – E-Commerce Perfume Store (Frontend)

A modern, animated e-commerce frontend built with **React**, **Tailwind CSS**, and **Framer Motion**. Users can browse perfume products, view product details, and enjoy smooth transitions across the site.

---

## 🚀 Tech Stack

* ⚛️ React (via Vite)
* 🎨 Tailwind CSS
* 🎞️ Framer Motion (page & component animations)
* 🌐 React Router DOM (routing)

---

## 📁 Project Structure

```bash
src/
├── components/        # Navbar, Banner, ProductCard
├── pages/             # Home.jsx, ProductDetails.jsx
├── utils/             # PageWrapper.jsx for animated page transitions
├── App.jsx            # Routing logic with AnimatePresence
└── main.jsx           # Root rendering with BrowserRouter
```

---

## 📸 Features Implemented

* ✅ **Responsive Navbar** with slide-in animation
* ✅ **Hero Banner** with fade-in + text animation
* ✅ **Product Grid** with animated hover cards
* ✅ **Page Transitions** between Home and Product Details
* ✅ **Dynamic Product Detail Page** using URL params

---

## 🧰 Setup Instructions

1. **Clone & Install Dependencies**

   ```bash
   git clone https://github.com/your-username/scentaura.git
   cd scentaura
   npm install
   ```

2. **Run the App**

   ```bash
   npm run dev
   ```

3. **Available Scripts**

   ```bash
   npm run dev       # Start local dev server
   npm run build     # Production build
   ```

---

## 🖼️ Sample Product Data

```js
[
  { id: "1", name: "Rose Bloom", price: 69, image: "/perfume1.jpg" },
  { id: "2", name: "Ocean Mist", price: 79, image: "/perfume2.jpg" },
  { id: "3", name: "Amber Wood", price: 89, image: "/perfume3.jpg" }
]
```

Images should be placed in the `public/` folder (e.g. `public/perfume1.jpg`).

---

## 🌟 Upcoming Features

* 🛒 Cart drawer with Add-to-Cart functionality
* 💳 Checkout flow
* 🔍 Image zoom on product page
* 💬 Product reviews

---

## 📄 License

MIT – Feel free to use and modify!

