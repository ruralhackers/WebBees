Got it. Here’s a more technical, developer-friendly version of the README-style intro — focused on the stack, structure, and intent of the project — without marketing fluff:

⸻

🐝 Beautiful Bees — Web Experience by Rural Hackers

This is the production site for Beautiful Bees, a multi-phase rural empowerment program targeting women aged 18–29. Built by Rural Hackers, the site is designed as an interactive storytelling experience, blending modular React architecture with playful UX patterns.

Each section represents a “flower” (project phase), and scroll interaction is represented through a sticky animated bee — highlighting the project’s symbolic approach to peer-based learning and community care.

⸻

🔧 Stack Overview
	•	Vite — Fast dev server + optimized build pipeline
	•	React (TypeScript) — Component-based architecture
	•	Tailwind CSS — Utility-first styling
	•	shadcn/ui — Headless UI primitives for accessible components
	•	Custom scroll interaction — Animated bee component tied to scroll position
	•	IntersectionObserver — Section-level animations triggered on viewport entry

⸻

🗂 Folder Structure

/src
  ├── main.tsx             # Entry point
  ├── App.tsx              # Layout and section composition
  ├── index.css            # Tailwind and global styles
  └── components/
        BeeTracker.tsx         # Sticky bee scroll animation
        PollinatedFlower.tsx   # Animated sections (appear on scroll)
        HeroSection.tsx
        JourneySection.tsx
        CTASection.tsx
        ...


⸻

🧪 Running Locally

git clone https://github.com/ruralhackers/bee-bloom-journey.git
cd bee-bloom-journey
npm install
npm run dev

Local dev will run on http://localhost:5173 by default.

⸻

🚀 Deploy

Production deployment can be handled via:
	•	Vercel
	•	Netlify
	•	Static hosting (after npm run build)

⸻

Want help integrating CMS, internationalization, or turning this into a PWA? Contributions and forks welcome.
