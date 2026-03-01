# Personal Portfolio 

A modern, responsive personal portfolio website built with React and TypeScript, showcasing projects, skills, and contact information.
The application supports dark/light theme, multi-language switching, smooth animations, and a fully functional contact form.

The website is available at: https://halynahryn.pages.dev

## ✨ Features

* Dark / Light theme (persisted with localStorage)
* Multi-language support (i18n, language persisted)
* Smooth navigation between sections
* Animations with Framer Motion
* Responsive design for all screen sizes
* Contact form with validation and API integration
* Reusable custom hooks
* Clean, maintainable, and scalable code structure

## 🛠 Tech Stack

* React
* TypeScript
* Styled-components
* Framer Motion
* React i18next
* Custom React Hooks
* LocalStorage 

## 📂 Project Structure

```bash
src/
├── api/               # API calls (contact form)
├── assets/            # Images, icons, mockups
├── components/        # Reusable UI components
├── context/           # Theme context
├── data/              # Static data (projects)
├── hooks/             # Custom hooks
├── pages/             # Page sections
├── styles/            # Themes & global styles
├── types/             # Global TypeScript types
└── App.tsx
``` 

### 🧩 Custom Hooks Used

* useLocalStorage – persist theme & language
* useClickOutside – close dropdowns on outside click
* useScrollToSection – smooth scrolling navigation

## 🚀 Getting Started

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the project locally

```bash
npm start
```
The app will be available at: http://localhost:3000

## 📌 Best Practices Followed
- Functional components only
- Strong typing with TypeScript
- Separation of concerns
- Minimal and purposeful custom hooks
- No unnecessary re-renders
- Clean and readable styling
- ESLint and Prettier for code quality and consistency
- Deployed on Cloudflare.com
