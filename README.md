# 🚀 Responsive Landing Page

A well-structured, **fully responsive** landing page built with **React, TypeScript, and Vite**. This project demonstrates clean folder structure, reusable components, and modular styling with **CSS Modules**.

---

## 📌 Project Overview

This project is part of a **Oore technical test** to develop a **modern, responsive landing page** while following best practices in **component-based development**.

### Key Features

✅ Fully Responsive Design (Mobile-First Approach) 📱  
✅ Clean, Scalable, and Maintainable Code 💡  
✅ Well-Documented Reusable Components 📜  
✅ Modular Styling with **CSS Modules** 🎨  
✅ Optimized Performance & SEO Best Practices 🚀  
✅ Strict **Single Responsibility Principle (SRP)** 📏

---

## 🛠 Tech Stack

- **Frontend:** React (Vite + TypeScript)
- **Styling:** CSS Modules
- **Icons:** React Icons

---

## 🚀 Project Setup

### 1️⃣ Prerequisites

Make sure you have the following installed:

- **Node.js** (Latest LTS version)
- **npm** or **yarn**

### 2️⃣ Installation

Clone the repository and install dependencies:

```sh
git clone
cd your-project
npm install
# or
yarn install
```

### 3️⃣ Running the Project

Start the development server:

```sh
npm run dev
# or
yarn dev
```

### 4️⃣ Build for Production

```sh
npm run build
# or
yarn build
```

---

## 📂 Folder Structure

The project follows a **clean and scalable folder structure**:

```plaintext
 ├── 📂 Public/           # Static assets (images, fonts, etc.)
📂 src/
 ├── 📂 components/       # Reusable React components
 │   ├── Accordion/       # Accordion component + styles
 │   ├── Card/            # Card component + styles
 │   ├── ContactForm/     # Contact form component + styles
 │   └── ...
 ├── 📂 data/             # Static data (accordionData.ts, cardData.ts, etc.)
 ├── 📜 main.tsx          # Application entry point
 └── 📜 App.tsx           # Main App component
```

---

## 🎨 Styling Approach

✅ **CSS Modules** are used to avoid class name conflicts.  
✅ Each component has its **own dedicated style file**.  
✅ The project follows **mobile-first responsive design** principles.

---

## 🔄 Data Management

- **Static data** is stored inside the `data/` folder for better organization.
- Components map over data dynamically instead of using hardcoded values.
- Example: Mapping `accordionData.ts` inside the `Accordion` component.

```tsx
import { accordionData } from "../data/accordionData";

const AccordionList = () => {
  return (
    <div>
      {accordionData.map((item) => (
        <Accordion key={item.id} {...item} />
      ))}
    </div>
  );
};
```

---

## 🛠 Code Quality & Best Practices

✅ **Well-Documented Components**

- Each component follows **SRP (Single Responsibility Principle)** for maintainability.
- Code is **modular** and **reusable**.

✅ **Clean Commits**  
The project follows a structured commit naming convention:

| Type        | Description                           |
| ----------- | ------------------------------------- |
| **Feat:**   | New feature implementation            |
| **Fix:**    | Bug fixes and patches                 |
| **Refact:** | Code refactoring for better structure |
| **Style:**  | Minor styling updates                 |
| **Perf:**   | Performance improvements              |

Examples:

```sh
git commit -m "Refact: Extract Dummy Data File Into Data Folder To Keep A Clean Folder Structure."
git commit -m "Feat: Implement Contact Form."
git commit -m "Fix: Mobile Drop Down Menu Adjustments."
git commit -m "Perf: Update Header Title And Icon For Better SEO."
```

---

## ✨ Additional Notes

- While reviewing the **Figma design**, I noticed that the **contact section was missing**.
- I took the initiative to **design a new responsive contact form** to ensure a complete user experience.
- The contact form is **fully functional** with a submit button and mobile-friendly layout.

---

## 📌 Conclusion

This project follows a **clean folder structure, well-documented reusable components, and a structured commit strategy**.  
Everything is designed with **scalability, maintainability, and performance** in mind. 🚀

---

🔗 **Feel free to contribute, open issues, or suggest improvements!** 😊

---

## 📍 Author

📧 Email: hassen.bejaoui.18@gmail.com
🔗 [Portfolio](https://hassen.netlify.app/)
