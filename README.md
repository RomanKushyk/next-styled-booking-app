# Booking Session App

An adaptive booking interface built with **Next.js 16**, **React 19**,
**TypeScript**, **styled-components**, and **Zustand**.\
The application allows users to select a session date and time,
validates the input, and outputs the selected timestamp upon
confirmation.\
Automatic deployment to **GitHub Pages** is configured for pushes to the
`master` branch.

### 🔗 Live Demo

https://romankushyk.github.io/next-styled-booking-app/

---

## ✨ Features

### 📅 Date Selection

- Displays all dates from **today** up to **6 weeks ahead**.
- Fully adapted for small screen heights (including under 600px).

### ⏰ Time Selection

- After choosing a date, a time selector appears.
- Time format: **12-hour (AM/PM)**.
- Interval: **every 15 minutes**.
- Past times are automatically disabled.

### ✔️ Confirmation Flow

- The **Confirm** button becomes active only when both date and time
  are selected.
- On click, the final **timestamp** is logged to the console.

### 🗂 Additional Features

- Integrated example of global state management using **Zustand**.
- Demonstration of dynamic SVG icons inside TSX components.
- Fully responsive layout optimized for screens from iPhone SE to 4K.
- Code follows **ESLint (Next.js/Airbnb) + Prettier** rules.

---

## 🛠️ Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **styled-components 6**
- **Zustand 5**
- **react-day-picker**
- Automatic font optimization using `next/font`

---

## 📦 Installation & Running

```bash
npm install
npm run dev
```

Open in browser:\
http://localhost:3000

Main page file:\
`app/page.tsx`

---

## 🚀 Available Scripts

```json
npm run dev        # start development server
npm run build      # build for production
npm run start      # run production build
npm run lint       # lint with ESLint
npm run format     # format with Prettier
```

---

## 🌐 Deployment

This project is configured to automatically deploy to **GitHub Pages**
whenever changes are pushed to the `master` branch.

### Demo URL

https://romankushyk.github.io/next-styled-booking-app/

---

## 📁 Architecture Notes

**Next.js 16 + React 19**\
Modern, fast, stable, and ideal for production-grade UI applications.

**styled-components**\
SSR-friendly styling solution with dynamic theming and scoped component
styles.

**Zustand**\
Minimalistic, fast, and intuitive state management library --- perfect
for UI-level state.

**TypeScript**\
Provides strict type safety and improved maintainability.

---

## 📜 License

This project is released under the MIT license.
