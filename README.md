# 🛒 Kenakata - E-commerce Platform

Kenakata is a simple e-commerce project built with **Next.js 15** and **MongoDB**.  
It allows users to browse products, view details, and admins can add new products easily.

---

## 🚀 Project Summary

- Built with **Next.js 15 (App Router)**  
- Database: **MongoDB Atlas**  
- Styling: **Tailwind CSS + DaisyUI**  
- Features:  
  - Display products from MongoDB  
  - Product details page  
  - Add product form (Admin feature)  
  - Responsive Navbar  

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kenakata.git
   cd kenakata

kenakata/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── products/
│   │   │   ├── page.jsx          # All products page
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx      # Single product details
│   │   │   └── add/
│   │   │       └── page.jsx      # Add product form
│   │   └── api/
│   │       └── products/
│   │           ├── route.js      # API for product list & add
│   │           └── [id]/
│   │               └── route.js  # API for product details
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   └── lib/
│       └── dbConnect.js          # MongoDB connection
│
├── .env.local                    # Environment variables
├── package.json
└── README.md


Install dependencies

npm install
npm run dev
