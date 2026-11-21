# Syed Shaheer Ahmed — Developer Portfolio

My personal portfolio as a Full-Stack MERN Developer: my projects, experience, university work, and CV in one place.

**Live site:** [shaheer-portfolio-sage.vercel.app](https://shaheer-portfolio-sage.vercel.app)

## Features

- **Live project board in the hero:** an animated Kanban board that shows real-time collaboration
- **Dark and light mode:** follows your system setting and remembers your choice
- **Scroll animations:** sections animate each time they come into view, and the experience timeline draws itself as you scroll
- **Fully responsive:** tested from 320px phones to 1920px desktops
- **Two CV downloads:** a 1-page resume and a 2-page detailed CV
- **Email options that always work:** copy the address or open a new email in Gmail
- **Accessible:** keyboard focus styles, screen-reader labels, and reduced-motion support

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque, IBM Plex Sans |
| Hosting | Vercel |

## Sections

1. Hero
2. About (education, recognition, skills)
3. Experience timeline
4. Selected work (Orbit, Ledger, Pulse, Snip) and more projects
5. University projects (HydroBin X and others)
6. Contact and CV downloads

## Run it locally

```bash
git clone https://github.com/devshaheerx/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Update the content

All text lives in `app/data.ts`: projects, experience, skills, awards, and links.

- **Photo:** save it as `public/profile.jpg`
- **CVs:** replace `public/Syed_Shaheer_Ahmed_Resume.pdf` and `public/Syed_Shaheer_Ahmed_CV.pdf`
- **Live demo button:** add `live: "https://..."` to any project in `app/data.ts`

Every push to `main` redeploys the live site on Vercel automatically.

## Contact

- Email: syedshaheerahmed90@gmail.com
- LinkedIn: [linkedin.com/in/syedshaheerahmeddev](https://www.linkedin.com/in/syedshaheerahmeddev/)
- GitHub: [github.com/devshaheerx](https://github.com/devshaheerx)
