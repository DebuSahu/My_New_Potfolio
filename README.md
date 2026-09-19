# Divyanshu Sahu - Interactive React Developer Portfolio

A modern, reactive, interactive, and fully responsive portfolio website for **Divyanshu Sahu** (Software Engineer @ MapmyIndia, Java Backend & Spring Boot Specialist, PostgreSQL/MySQL DBA, and MCA graduate from Jagran Institute of Management).

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Features

- **Interactive Constellation Particle Canvas**: Subtle interactive backdrop reacting to mouse movements and screen resizing.
- **Dynamic Typewriter Subheadline**: Highlighting engineering roles (MapmyIndia, Spring Boot, DBA, MCA).
- **Dark / Light Theme Toggle**: Persistent across sessions via `localStorage` with smooth color transitions.
- **Reactive Skills Matrix**: Filter skills dynamically by Backend & Java, Databases & DBA, Web & Frontend, or Tools.
- **DBA & Performance Tuning Spotlight**: Focused on PostgreSQL, MySQL, and Oracle database architecture.
- **Interactive Experience & Education Timeline**: Seamlessly switch between work history (MapmyIndia, Railworld India, YHills, CodSoft, OctaNet) and academic background (MCA 73% Honors, BCA, certifications).
- **Featured Projects Showcase with Deep-Dive Modals**:
  - **GymNation**: Gym Management System (Java, NetBeans, MySQL, Swing).
  - **Red Drop**: Blood Bank & Emergency Donation Platform (HTML5, CSS3, JavaScript, Figma).
  - **GoDrive**: Fleet & Car Rental Operations Management (HTML5, CSS3, JavaScript, LocalStorage).
  - **Enterprise REST & DBA Architecture**: High-throughput microservices in Spring Boot & PostgreSQL.
- **Executive Resume Viewer**: One-click preview modal with a clean print / save-to-PDF stylesheet (`@media print`).
- **Interactive Contact Hub**: One-click copy for email and phone, WhatsApp direct connect, and interactive contact form with confetti celebration.
- **100% Responsive Design**: Optimized for mobile phones (320px+), tablets, laptops, and ultra-wide screens.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher installed)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the live portfolio with Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized, minified bundle in the `dist/` directory ready for deployment.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
f:/Portfolio/
├── index.html                  # HTML5 Entry Point & Meta Tags
├── package.json                # Dependencies & Scripts
├── vite.config.js              # Vite Build Configuration
├── tailwind.config.js          # Tailwind CSS Configuration & Colors
├── postcss.config.js           # PostCSS Configuration
├── src/
│   ├── App.jsx                 # Root Application Component & Theme Manager
│   ├── main.jsx                # React DOM Mount Entry
│   ├── index.css               # Tailwind Directives, Glassmorphism & Animations
│   ├── data/
│   │   └── portfolioData.js    # Centralized Profile, Experience, & Projects Data
│   └── components/
│       ├── Navbar.jsx          # Header, Nav Links, Mobile Drawer & Theme Switch
│       ├── Hero.jsx            # Particle Canvas, Typewriter, CTAs & Stats
│       ├── About.jsx           # Bio, Core Pillars, Location & Quick Info
│       ├── Skills.jsx          # Filterable Skills Grid & DBA Showcase
│       ├── Experience.jsx      # Work & Education Interactive Timeline
│       ├── Projects.jsx        # Project Cards & Category Filtering
│       ├── ProjectModal.jsx    # Deep-Dive Project Architecture Dialog
│       ├── ResumeModal.jsx     # Executive Resume Viewer & Print Stylesheet
│       ├── Contact.jsx         # Contact Form, Confetti & Quick Connect
│       └── Footer.jsx          # Footer, Back-to-Top & Social Shortcuts
```

---

## 🛠️ Easy Customization

To update personal information, projects, or add new experiences, simply edit:
👉 `src/data/portfolioData.js`

All text, links, numbers, and categories are centralized in this single file, so changes automatically reflect across the entire application without touching any JSX component code!

---

## 🌐 Free Deployment Options

- **Vercel**: Run `npx vercel` or connect the GitHub repository `https://github.com/DebuSahu`.
- **Netlify**: Drag and drop the `dist/` folder into Netlify Drop or link GitHub.
- **GitHub Pages**: Build with `npm run build` and publish the `dist` branch.

---

Designed & Built with ❤️ for **Divyanshu Sahu**.

