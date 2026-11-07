# BASIC Community Future Labs Website

- **Student:** Hlompho Muzi Xolo
- **Student number:** ST10476575
- **Module:** WEDE5020 — Web Development Introduction
- **Assessment:** Portfolio of Evidence, Part 3

## Project overview

This project is a responsive, six-page website for **BASIC Community Future Labs**, a fictional community-learning organisation based in Johannesburg and Durban, South Africa. The website presents the organisation, its programmes, volunteer and sponsorship opportunities, contact information, and two lab locations.

The project is implemented using HTML5, CSS, vanilla JavaScript, Leaflet/OpenStreetMap, and GSAP. It is a static website and does not require a backend, database, package installation, or build process.

## Live website and repository

- **Live URL:** https://44xolo.github.io/BASIC/
- **Part 3 GitHub repository:** https://github.com/44Xolo/BASIC
- **Part 2 repository:** https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo
- **Deployment:** GitHub Pages, deployed from the `main` branch and the repository root

## Website pages

- `index.html` — Home page, organisation statistics, programme overview, image gallery and animations
- `about.html` — Organisation history, mission, vision, values, team and frequently asked questions
- `programmes.html` — Searchable, filterable and sortable catalogue of seven programmes
- `enquiry.html` — Validated volunteer, sponsor and partnership enquiry form with generated responses and sponsorship estimates
- `news.html` — News and updates with category filter and newsletter sign-up
- `contact.html` — Validated contact form, Leaflet maps, map popups and directions

## Main features

### Part 3 functionality

- Search, category filtering, sorting and highlighted programme results
- A clear “no programmes match your search” message
- JavaScript-generated programme cards from a structured data array
- Accordion, enquiry tabs and modal feedback
- Gallery lightbox with close, previous, next and keyboard controls
- Leaflet maps with markers, popups and Google Maps directions
- Scroll reveal effects, counters, marquee content, progress indicator and GSAP animations
- Responsive layouts at desktop, tablet and mobile breakpoints
- Skip navigation, semantic headings and visible keyboard focus states
- Inline field validation and accessible field error messages

### Forms

The enquiry form supports text, email, telephone, programme, date, number, select and textarea controls. Depending on the selected enquiry type, it generates volunteer availability, sponsorship estimates or partnership acknowledgements.

The contact form validates the entered message and compiles a mailto response containing the visitor's name, email address, optional telephone number, enquiry type and message.

## Running locally

### Option 1: Open in a browser

1. Download or clone this repository.
2. Open `index.html` in a web browser.

### Option 2: Use a local server

Using the VS Code Live Server extension:

1. Open the project folder in Visual Studio Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

Alternatively, serve the folder with a static-server tool of your choice. A local server is recommended for the most reliable testing of JavaScript modules, maps and navigation.

## Testing checklist

Before submission, test the following:

- All five pages load from the live GitHub Pages URL.
- Navigation works on desktop and mobile devices.
- The programmes search, category filter and sorting controls work correctly.
- Enquiry tabs reveal the appropriate controls.
- Enquiry and contact validation reject empty or invalid values.
- Valid enquiry and contact submissions produce the expected response.
- The lightbox opens, closes, moves through images and responds to the keyboard.
- Leaflet maps show markers and popups on the contact page.
- The site has no missing images, console errors or broken internal links.
- Desktop, 1024px, 768px and 480px layouts are checked.
- Keyboard-only navigation has visible focus and all modals/dialogues can be closed.

## Feedback from Formative Part 2

This Part 3 repository continues the work submitted in the [Part 2 formative repository](https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo). Each point below records the marker feedback and the correction made in this repository:

- **Layout:** HTML tables used for page layout were replaced with CSS Grid and Flexbox; no `<table>` element is used for website structure. The layout changes are implemented in `css/style.css` and documented here and in [`CHANGELOG.md`](CHANGELOG.md).
- **Interactive pseudo-classes:** Hover, keyboard focus, active and focus-visible states now cover navigation, buttons, cards, tabs and form controls in `css/style.css` and `css/part3.css`. Disabled controls are styled separately.
- **Commit messages:** Future and documented commits use specific Conventional Commit summaries such as `feat: add lightbox with keyboard navigation` rather than vague messages such as `updated files`.
- **Changelog and README:** Development work is recorded with dates at repository root in [`CHANGELOG.md`](CHANGELOG.md), with a linked summary in this README.
- **References:** The Harvard-style reference list cites the youth unemployment source, development libraries, map providers, deployment documentation and AI assistance used. The image register records each original BASIC/student-created asset, its creator or owner, and its academic-use licence status.
- **Accessibility and SEO:** Descriptive image alternative text, semantic heading structure, skip navigation, unique page titles and descriptions, canonical links, keywords, `robots.txt` and `sitemap.xml` were added across the five HTML pages.
- **Deployment:** Placeholder deployment instructions were removed from production pages and replaced with the live GitHub Pages URL and repository documentation.

### Part 3 documentation

Part 3 additions and dated changes are recorded in `CHANGELOG.md`.

## Technologies

- HTML5
- CSS3, including Grid and Flexbox
- Vanilla JavaScript
- Leaflet 1.9.4
- OpenStreetMap
- GSAP and ScrollTrigger
- Google Fonts: Inter, Montserrat and Space Grotesk

## Project structure

```text
BASIC/
├── index.html
├── about.html
├── programmes.html
├── enquiry.html
├── news.html
├── contact.html
├── README.md
├── CHANGELOG.md
├── robots.txt
├── sitemap.xml
├── css/
├── js/
└── images/
```

## Images used

The website uses the following locally hosted files from the `images/` directory:

| Image file | Use in the website |
|---|---|
| `basic-community-lab.jpg` | Home page hero image and social preview |
| `community-collaboration.jpg` | Home gallery and Entrepreneur programme card |
| `code-editor.jpg` | Home gallery and CODE programme card |
| `community-tutor.jpg` | Home gallery and EDUCATION programme card |
| `computer.jpg` | Home gallery, AI programme card and Contact page image |
| `solar.jpg` | Home gallery |
| `machine.jpg` | Home gallery and BUILD programme card |
| `TOGETHER.jpg` | Home gallery, CONNECT programme card and About page social preview |
| `solar-energy.jpg` | Home gallery and GREEN programme card |
| `lo.webp` | Home gallery and BASIC logo image |
| `visual.jpg` | Home gallery, About page image and Enquiry page image |
| `solar-training.jpg` | Home gallery |
| `gallery-animation-small.gif` | Optimised animated section on the Home page |
| `favicon.svg` | Website favicon used across all pages |

The listed photographs, graphics and the animated gallery asset are original BASIC/student-created work. For this academic project, Hlompho Muzi Xolo and BASIC Community Future Labs retain the copyright and licence their use for this website and assignment. Written permission from the copyright holder is required for reuse outside this academic submission unless the holder explicitly grants another licence.

All locally hosted image files are stored in `images/`. Descriptive filenames are used throughout the HTML and JavaScript, and unused legacy duplicates have been removed. Large assets are provided in optimised formats (`lo.webp` and `gallery-animation-small.gif`).

### Image ownership and licence record

| Asset | Creator / owner | Licence or permitted use |
|---|---|---|
| `basic-community-lab.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `community-collaboration.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `code-editor.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `community-tutor.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `computer.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `machine.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `solar.jpg`, `solar-energy.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use images; copyright retained by the creator; no third-party redistribution licence stated |
| `solar-training.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use images; copyright retained by the creator; no third-party redistribution licence stated |
| `TOGETHER.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `visual.jpg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original academic-use image; copyright retained by the creator; no third-party redistribution licence stated |
| `lo.webp` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original BASIC logo graphic converted to WebP; copyright retained by the creator |
| `gallery-animation-small.gif` | Hlompho Muzi Xolo / BASIC Community Future Labs | Optimised academic-use animation; copyright retained by the creator |
| `favicon.svg` | Hlompho Muzi Xolo / BASIC Community Future Labs | Original BASIC favicon graphic; copyright retained by the creator; no third-party redistribution licence stated |

## Dated changelog

The detailed development history is recorded in [`CHANGELOG.md`](CHANGELOG.md). Key dated entries are:

- **6 November 2026 — Proposal alignment:** Added the News page, newsletter sign-up, programme registration and Space Grotesk accent font from the Part 1 proposal.
- **5 November 2026 — Part 3 submission preparation:** Added programme search, filtering, sorting, forms, maps, tabs, modal feedback, lightbox controls, animations and deployment documentation.
- **5 November 2026 — Documentation and feedback corrections:** Added the project changelog, rewrote the README, documented image usage, added Harvard Anglia references, removed placeholders, and corrected image filenames.
- **5 November 2026 — Part 2 feedback changes:** Linked the original Part 2 repository, recorded removal of layout tables, commit and changelog improvements, keyboard and focus improvements, semantic and SEO updates, image corrections and reference additions.
- **5 November 2026 — Feedback repository continuity:** Added the original Part 2 repository URL and identified the exact feedback areas carried forward or corrected for Part 3.
- **5 November 2026 — Initial website implementation:** Added the five-page BASIC website and responsive styles before final Part 3 enhancements.

## References and source use

In-text citations are used where factual or technical support appears on the website. For example, Statistics South Africa supports the youth-unemployment statistic on the home page (Statistics South Africa, 2026), Leaflet and OpenStreetMap support the lab maps, and the MDN and W3C resources support the form and accessibility implementation (MDN Web Docs, n.d.; W3C, 2023). Only sources that informed the project are listed below.

## References

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-submit-sitemaps (Accessed: 5 November 2026).

GreenSock (n.d.) *GSAP documentation*. Available at: https://gsap.com/docs/v3/ (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog (Accessed: 5 November 2026).

Leaflet (n.d.) *Leaflet: An open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 5 November 2026).

Anglia Ruskin University (n.d.) *Harvard referencing*. Available at: https://library.aru.ac.uk/referencing/ (Accessed: 5 November 2026). This institutional guide was used to present AI-assistance and other sources in Harvard style.

Microsoft (2026) *Microsoft Copilot*. Available at: https://copilot.microsoft.com/ (Accessed: 5 November 2026). Development and debugging assistance was used for code explanations and implementation suggestions (Anglia Ruskin University, n.d.).

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 5 November 2026).

Statistics South Africa (2026) *Labour market trends and youth unemployment statistics*. Available at: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

World Wide Web Consortium (W3C) (2023) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 5 November 2026).
