# Apex Retail – Enterprise E-Commerce Solution 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/93e56a71-8922-4ee9-b0cb-f458f9b37f33/deploy-status)](https://app.netlify.com/projects/pro-react-retail-app/deploys)
[![Build Status](https://github.com/dimitristheodoropoulos/pro-react-retail-app/actions/workflows/ci.yml/badge.svg)](https://github.com/dimitristheodoropoulos/pro-react-retail-app/actions)

**[🔗 Live Demo](https://pro-react-retail-app.netlify.app)** **Apex Retail** is a high-performance...

**Apex Retail** is a high-performance, accessible, and scalable retail application built with **React 18**, **TypeScript**, and **Redux Toolkit**.

Originally inspired by the advanced patterns in *Building a Real-World Retail Store App* (Chapter 20), this project has been engineered to meet the standards of enterprise-grade environments such as **Fintech (Viva.com)** and **Digital Consulting (Deloitte)**.

## 📖 Architecture & Engineering
> **Important:** For a comprehensive analysis of the technical decisions, state management patterns, and testing strategy, please refer to the **[ARCHITECTURE.md](./ARCHITECTURE.md)** file.

## ✨ Key Features
* **State Management:** Powered by **Redux Toolkit** with custom **Middleware** for automated LocalStorage synchronization.
* **Real-time Backend:** Integrated with **Firebase Firestore** for dynamic product management.
* **Data Safety:** Strict runtime validation using **Zod** to ensure API data integrity.
* **Quality Assurance:** 100% test pass rate and **Zero-Warning Linting policy** using ESLint & TypeScript-ESLint.
* **Professional Testing:** Unit and Integration tests with **Vitest** and **React Testing Library**.
* **CI/CD:** Automated quality gates via **GitHub Actions** (Lint, Type-check, Test).
* **Internationalization:** Multi-language support (i18next) ready for global deployment.

## 🛠️ Tech Stack
* **Frontend:** React 18, Vite, Tailwind CSS.
* **Logic:** Redux Toolkit, TypeScript, Zod.
* **Backend:** Firebase (Firestore).
* **Quality:** Vitest, Storybook, ESLint.

## 🚀 Getting Started

### Installation
1. **Clone & Install:**
   ```bash
   git clone [https://github.com/dimitristheodoropoulos/pro-react-retail-app.git](https://github.com/dimitristheodoropoulos/pro-react-retail-app.git)
   cd pro-react-retail-app
   npm install --legacy-peer-deps

Environment Variables: Create a .env file in the root:
VITE_FIREBASE_API_KEY=your_key

Development:
npm run dev

🧪 Testing & Quality
We maintain a strict quality gate. All code must pass linting and tests before deployment.
npm run lint      # Zero warnings allowed
npm run test:run  # Execute all Vitest suites

💳 Payment Simulation (Stripe Test Mode)
To test the checkout flow, use the following:

Card Number: 4242 4242 4242 4242 | Expiry: 12/28 | CVC: 123

📬 Contact
Dimitris – LinkedIn Profile-https://www.linkedin.com/in/dimitris-theodoropoulos-1051ba19a/

Project Link: https://github.com/dimitristheodoropoulos/pro-react-retail-app
