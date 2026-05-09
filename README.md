# 🎓 FindMyCollege - Elite Engineering Institutions Discovery

Welcome to **FindMyCollege**, a modern, full-stack platform designed to help students discover and compare top-tier engineering colleges across India (IITs, NITs, BITS, VIT, SRM, etc.). 

### 🌐 Live Demo
You can view the fully working live application here:
**[👉 Click here to visit FindMyCollege](https://findmy-college-cugw.vercel.app)**

---

## 🚀 Features

- **Massive Database:** Browse through 200+ authentic premier engineering colleges in India.
- **Smart Filtering & Search:** Search colleges by name or filter them by states (Tamil Nadu, Maharashtra, Delhi, etc.) and fee ranges.
- **Side-by-Side Comparison:** Select up to 3 colleges and compare their average packages, total fees, ratings, and placement rates in a dedicated, mobile-responsive comparison table.
- **Modern UI/UX:** Built with a beautiful, responsive Mint/Blue gradient aesthetic featuring glassmorphism elements, smooth hover effects, and CSS micro-animations.
- **Mobile First:** Fully optimized for seamless browsing on phones, tablets, and desktop computers.

---

## 🛠️ Technology Stack

This project was built using a robust, modern tech stack:

### Frontend
- **Framework:** [Next.js (React)]
- **Styling:** Vanilla CSS & [Tailwind CSS]
- **Icons:** [Lucide React]
- **Hosting:** [Vercel]

### Backend
- **Environment:** [Node.js] & [Express.js]
- **ORM:** [Prisma] (for strict type-safe database interactions)
- **Language:** TypeScript
- **Hosting:** [Render]

### Database
- **Database Engine:** PostgreSQL
- **Hosting:** [Supabase]

---

## 🏗️ Architecture & Deployment

The application utilizes a decoupled architecture where the client, server, and database scale independently in the cloud:

1. **Frontend (Vercel):** The Next.js frontend fetches data dynamically via REST API routes. It manages complex React state for comparison tracking and dynamic pagination.
2. **Backend API (Render):** A custom Node.js/Express server that exposes endpoints to retrieve and query college data. 
3. **Database (Supabase):** A cloud-hosted PostgreSQL database managed through Prisma migrations and populated with a custom TypeScript seed script.

---

## 💻 Running Locally

If you'd like to run this project on your own machine:

### 1. Clone the repository
```bash
git clone https://github.com/SamyuEswar/FindmyCollege.git
cd FindmyCollege
```

### 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` folder and add your database URL:
  `DATABASE_URL="postgresql://username:password@localhost:5432/college_discovery"`
- Run Prisma migrations and seed the data:
```bash
npx prisma db push
npm run seed
```
- Start the backend development server:
```bash
npm run dev
```

### 3. Setup Frontend
Open a new terminal window:
```bash
cd frontend
npm install
```
- Create a `.env.local` file in the `frontend` folder:
  `NEXT_PUBLIC_API_URL="http://localhost:5000/api"`
- Start the frontend development server:
```bash
npm run dev
```

The app will now be running at `http://localhost:3000`!

---

## 📝 License
This project was built for educational and portfolio purposes. Feel free to explore the code!
