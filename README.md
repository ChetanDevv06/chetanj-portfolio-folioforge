<div align="center">

# Chetan — Developer Portfolio

**A personal portfolio showcasing software engineering, web development, AI/ML exploration, and creative problem-solving.**

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Website-FF5101?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chetanj-portfolio-folioforge.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-ChetanDevv06-181717?style=for-the-badge&logo=github)](https://github.com/ChetanDevv06)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-555555?style=for-the-badge)](#license)

</div>

---

## Technology Stack

The repository uses a lightweight, browser-native frontend architecture. The following stack badges are clickable and link to the official project documentation.

<div align="center">

### Core languages and web platform

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111"></a>

### UI, layout and interaction

<a href="https://getbootstrap.com/"><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>
<a href="https://jquery.com/"><img alt="jQuery" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"></a>
<a href="https://swiperjs.com/"><img alt="Swiper" src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white"></a>
<a href="https://michalsnik.github.io/aos/"><img alt="AOS" src="https://img.shields.io/badge/AOS-Scroll%20Animations-444444?style=for-the-badge"></a>

### Motion and visual effects

<a href="https://gsap.com/"><img alt="GSAP" src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=111111"></a>
<a href="https://dimsemenov.com/plugins/magnific-popup/"><img alt="Magnific Popup" src="https://img.shields.io/badge/Magnific%20Popup-Lightbox-555555?style=for-the-badge"></a>
<a href="https://github.com/aamirafridi/jQuery.Marquee"><img alt="jQuery Marquee" src="https://img.shields.io/badge/jQuery%20Marquee-Text%20Effects-0769AD?style=for-the-badge"></a>

### Developer tools and delivery

<a href="https://git-scm.com/"><img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></a>
<a href="https://github.com/"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://vercel.com/"><img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></a>

</div>

> **About the stack:** This is a static HTML, CSS, and JavaScript website. Bootstrap supplies responsive layout utilities; jQuery supports DOM and interaction logic; GSAP powers timeline-based motion and scroll effects. There is no React, Next.js, Vite, Node.js application runtime, or backend service in this repository.

---

## Overview

This repository contains the source code for my personal developer portfolio. It is designed to introduce who I am, communicate the areas of software engineering I work in, highlight selected projects, outline my technical interests, and provide ways to connect.

The experience combines a bold typographic layout with responsive sections, scroll-driven motion, image treatments, carousels, counters, and a custom cursor. The visual language uses a predominantly neutral palette with a warm orange accent, large display typography, and dark service/detail content.

### Portfolio sections

| Section | Purpose |
| --- | --- |
| **Home** | Introduction, disciplines, primary calls to action, and profile highlights. |
| **About** | Background, approach to building software, education timeline, and learning milestones. |
| **Services** | Full-stack development, AI/ML, web development, and application design areas. |
| **Work** | Selected projects with descriptions, visuals, and links to their repositories. |
| **Approach** | A short statement of engineering values and problem-solving philosophy. |
| **Skills** | A visual collection of technologies and tools represented in the site. |
| **Contact** | Contact information, social links, and a call to collaborate. |

The separate `service-details.html` page reads a service key from the URL query string and renders the corresponding service content.

---

## Featured Projects

The Work section currently highlights the following projects. Project names link to their source repositories.

### 1. RootCause

A decision-driven AI debugging project.

- **Focus:** AI-assisted debugging and root-cause analysis.
- **Repository:** [ChetanDevv06/Rootcause-Decision-Driven-AI-Debugging](https://github.com/ChetanDevv06/Rootcause-Decision-Driven-AI-Debugging)

### 2. CampusForge

A campus-focused platform concept.

- **Focus:** Student-oriented campus utility and marketplace workflows.
- **Repository:** [ChetanDevv06/CampusForge](https://github.com/ChetanDevv06/CampusForge)

### 3. Replate

A food-sharing and redistribution concept aimed at reducing campus food waste.

- **Focus:** Connecting surplus food with people who can use it.
- **Repository:** [ChetanDevv06/RePlate](https://github.com/ChetanDevv06/RePlate)

### 4. AI Diabetes Predictor

A machine-learning project presented as part of the portfolio.

- **Focus:** Applying machine learning to a diabetes prediction use case.
- **Repository:** [ChetanDevv06/Machine_Learning_Flyrank_ChetanJ](https://github.com/ChetanDevv06/Machine_Learning_Flyrank_ChetanJ)

Project descriptions above summarize the presentation and repository naming; consult each linked repository for implementation details, datasets, setup instructions, and model limitations.

---

## Repository Structure

The project is organized as a static website. No source compilation step is required.

```text
chetanj-portfolio-folioforge/
├── index.html
├── service-details.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   ├── aos.css
    │   ├── bootstrap.min.css
    │   ├── magnific-popup.css
    │   ├── main.css
    │   ├── service-details.css
    │   └── swiper-bundle.css
    ├── documents/
    │   └── ChetanJ_CV.pdf
    ├── images/
    │   ├── icons/
    │   ├── logo/
    │   ├── shapes/
    │   ├── tech-stack/
    │   └── thumbs/
    ├── js/
    │   ├── gsap/
    │   │   ├── chroma.min.js
    │   │   ├── gsap-scroll-smoother.js
    │   │   ├── gsap-scroll-to-plugin.js
    │   │   ├── gsap-scroll-trigger.js
    │   │   ├── gsap-split-text.js
    │   │   └── gsap.js
    │   ├── aos.js
    │   ├── boostrap.bundle.min.js
    │   ├── custom-gsap.js
    │   ├── jquery-3.7.1.min.js
    │   ├── jquery.marquee.min.js
    │   ├── magnific-popup.min.js
    │   ├── main.js
    │   ├── phosphor-icon.js
    │   ├── purecounter.js
    │   ├── slider-active.js
    │   ├── swiper-bundle.min.js
    │   └── tw-cursor.js
    └── wenfonts/
        ├── fa-brands-400.woff2
        ├── fa-regular-400.woff2
        ├── fa-solid-900.woff2
        └── fa-v4compatibility.woff2
```

### Key files

| File | Responsibility |
| --- | --- |
| `index.html` | Main single-page portfolio, section markup, metadata, and library loading order. |
| `service-details.html` | Query-parameter-driven service detail page and its service content configuration. |
| `assets/css/main.css` | Global design system, typography, layout, responsive rules, components, and visual effects. |
| `assets/css/service-details.css` | Additional service detail styling (where included). |
| `assets/js/main.js` | Preloader, navigation/offcanvas controls, AOS initialization, back-to-top, popup, counters, and UI interactions. |
| `assets/js/custom-gsap.js` | GSAP timelines, scroll-triggered effects, smooth scrolling, and portfolio motion. |
| `assets/js/slider-active.js` | Swiper instances and marquee behavior. |
| `assets/js/tw-cursor.js` | Custom cursor behavior. |
| `assets/images/` | Portfolio imagery, thumbnails, illustrations, icons, logos, and technology marks. |
| `assets/documents/ChetanJ_CV.pdf` | Downloadable CV linked from the site. |

---

## Libraries and Responsibilities

The project vendors its browser libraries in `assets/` and loads them directly from the HTML pages.

| Library / Tool | Usage in this project |
| --- | --- |
| **HTML5** | Semantic page structure and content. |
| **CSS3** | Styling, responsive layouts, typography, transitions, and visual treatments. |
| **JavaScript (ES6+)** | Page behavior, dynamic content, and interaction logic. |
| **Bootstrap** | Grid system, responsive breakpoints, and utility classes. |
| **jQuery** | DOM selection, event handling, and plugin integration. |
| **GSAP** | Timeline-based animations and motion orchestration. |
| **ScrollTrigger** | Scroll-position-driven animation triggers and pinning effects. |
| **ScrollSmoother** | Smooth scrolling integration. |
| **SplitText** | Character and word-based text animation. |
| **AOS** | Reveal animations configured through `data-aos` attributes. |
| **Swiper** | Responsive sliders and carousels. |
| **Magnific Popup** | Popup/lightbox behavior for supported links. |
| **PureCounter** | Animated numeric counters. |
| **jQuery Marquee** | Continuously moving marquee text. |
| **Chroma.js** | Color manipulation used by animation code. |
| **Phosphor Icons** | Interface iconography. |

**Note:** The repository includes locally stored library files. Verify the terms and licenses of third-party assets and libraries before redistributing them in another project.

---

## Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Edge, or Safari).
- Git, if you intend to clone and modify the repository.
- A local static HTTP server for the most reliable development experience.

There is no package installation step, build command, or application server required by the current source.

### 1. Clone the repository

```bash
git clone https://github.com/ChetanDevv06/chetanj-portfolio-folioforge.git
cd chetanj-portfolio-folioforge
```

### 2. Run locally

**Option A — VS Code Live Server**

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

**Option B — Python static server**

From the repository root, run:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

**Option C — Node.js static server (optional)**

If Node.js is installed, you can use a one-off static server without adding project dependencies:

```bash
npx serve .
```

Open the local URL printed in the terminal.

> Opening the HTML file directly may work for many parts of the site, but using a local HTTP server avoids browser restrictions that can affect some assets and scripts.

---

## Customization

### Update portfolio content

- Edit the introduction, About content, section headings, and contact details in `index.html`.
- Update project names, descriptions, screenshots, and repository links in the Work section.
- Update service cards and their query keys in `index.html`.
- Update the service data object in `service-details.html` when adding or editing a service.

### Update styles

- Use `assets/css/main.css` for global styles and shared components.
- Use `assets/css/service-details.css` for service page-specific styles if you move inline styles there.
- Keep responsive overrides grouped with the relevant component or breakpoint.
- Prefer adding clearly named custom rules over editing minified vendor styles.

### Update animations and interactions

- Use `assets/js/custom-gsap.js` for GSAP and ScrollTrigger animations.
- Use `assets/js/main.js` for general navigation and interface behavior.
- Use `assets/js/slider-active.js` for Swiper configuration and marquee behavior.
- Use `assets/js/tw-cursor.js` for the custom cursor.

When changing scroll animations, test both scrolling directions, different viewport widths, and the interaction with ScrollSmoother. Refresh ScrollTrigger measurements after significant layout changes.

### Update images and documents

- Add image assets under the appropriate directory in `assets/images/`.
- Keep image paths relative to the HTML document.
- Replace `assets/documents/ChetanJ_CV.pdf` to update the downloadable CV, keeping the referenced path intact.

---

## Deployment

This project is a static website and can be deployed to any host that serves HTML, CSS, JavaScript, and static assets.

### Deploy with Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Select the project.
4. Configure it as a static site:
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** `.`
   - **Install Command:** leave empty
5. Deploy.

### Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose the `main` branch and the root folder.
4. Save and wait for the Pages deployment to finish.

Because `index.html` is in the repository root, it can be served as the site's entry page.

---

## Development Workflow

A simple Git workflow for changes:

```bash
# Check changed files
git status

# Stage selected changes
git add index.html assets/

# Commit with a descriptive message
git commit -m "feat: refine portfolio project section"

# Push to GitHub
git push origin main
```

Suggested commit message conventions:

| Prefix | Use |
| --- | --- |
| `feat:` | Add a user-visible feature or section. |
| `fix:` | Correct a bug or broken behavior. |
| `style:` | Make visual-only styling changes. |
| `refactor:` | Restructure code without changing behavior. |
| `docs:` | Update documentation. |
| `perf:` | Improve loading or runtime performance. |
| `chore:` | Maintenance and repository housekeeping. |

---

## Accessibility and Performance Notes

When making future changes, keep the following practices in mind:

- Use semantic HTML elements and a logical heading hierarchy.
- Provide descriptive `alt` text for meaningful images; use empty alt text for decorative images.
- Ensure interactive controls are keyboard accessible and have visible focus states.
- Respect reduced-motion preferences when adding or extending animation behavior.
- Avoid shipping unnecessarily large images; resize and compress assets for their displayed dimensions.
- Use lazy loading for below-the-fold images where it does not interfere with animation or layout measurement.
- Test on small screens, touch devices, and multiple browsers.
- Keep third-party libraries local and version-controlled only when redistribution is permitted; otherwise load them through an appropriate package or CDN strategy.

---

## Known Implementation Notes

- The website is currently a static frontend with no backend API or server-side data layer.
- Service detail content is selected through URL query values such as `service-details.html?service=fullstack`, `?service=ai-ml`, `?service=web-dev`, and `?service=app-dev`.
- The main page includes a custom cursor, preloader, animated counters, scroll effects, sliders, marquee text, and an off-canvas navigation menu.
- The repository vendors dependencies as static files; it does not currently define an npm package manifest or automated build pipeline.
- The current page links to a CV PDF inside the repository. Review whether you intend that document to be publicly downloadable before publishing.

---

## Connect

<div align="center">

**Have an idea, opportunity, or project in mind? Let's connect.**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chetan-jagadeesha)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChetanDevv06)
[![Email](https://img.shields.io/badge/Email-Get%20in%20touch-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:workwithchetanj@gmail.com)

</div>

---

## License

No open-source license is currently specified in this repository. Unless a license is added, the default copyright rules apply: you may view the repository, but reuse, modification, and redistribution are not granted by an open-source license.

If you intend to make this project reusable, add a suitable license and confirm that the included third-party libraries, fonts, icons, images, and other assets may be redistributed under their respective terms.

---

<div align="center">

**Designed and developed by Chetan Jagadeesha**

*Building intelligent solutions through code and creativity.*

</div>
