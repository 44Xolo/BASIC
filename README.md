# BASIC Community Future Labs Website

- **Student:** Hlompho Muzi Xolo
- **Student number:** ST10476575
- **Module:** WEDE5020 — Web Development Introduction
- **Assessment:** Portfolio of Evidence, Part 3

## Project overview

This project is a responsive, five-page website for **BASIC Community Future Labs**, a fictional community-learning organisation based in Johannesburg and Durban, South Africa. The website presents the organisation, its programmes, volunteer and sponsorship opportunities, contact information, and two lab locations.

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

## Feedback changes

### Part 2 feedback addressed

This Part 3 repository continues the work submitted in the [Part 2 formative repository](https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo). The following Part 2 feedback was reviewed and addressed where relevant:

- Removed HTML layout tables from page content and retained CSS Grid and Flexbox for layout; no `<table>` element is used for website structure.
- Replaced vague commit or project documentation with dated, specific descriptions of each change in `CHANGELOG.md` and the README.
- Added a clearly dated Part 2 changelog section documenting the feedback response and its implementation.
- Added consistent hover, keyboard focus-visible, active and disabled states across navigation, buttons, tabs and other interactive elements.
- Improved descriptive `alt` text and renamed unclear image filenames such as generic, duplicated or misspelled names.
- Added unique page titles, page descriptions and relevant keyword metadata to all HTML pages.
- Improved semantic HTML structure, heading order, skip navigation and keyboard usability.
- Added or improved a reference list, including the information source, libraries, fonts, map provider and AI-development assistance used.
- Removed placeholders and incorrect deployment instructions, including the commented live-URL instructions, from production HTML.
- Updated the sitemap and robots directive to the final GitHub Pages domain and added canonical links to the final pages.

### Part 3 documentation

Part 3 additions and dated changes are recorded in `CHANGELOG.md`.

## Technologies

- HTML5
- CSS3, including Grid and Flexbox
- Vanilla JavaScript
- Leaflet 1.9.4
- OpenStreetMap
- GSAP and ScrollTrigger
- Google Fonts: Inter and Montserrat

## Project structure

```text
BASIC/
├── index.html
├── about.html
├── programmes.html
├── enquiry.html
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
| `lo.png` | Home gallery and BASIC logo image |
| `visual.jpg` | Home gallery, About page image and Enquiry page image |
| `solar-training.jpg` | Home gallery |
| `gallery-animation.gif` | Animated section on the Home page |
| `favicon.svg` | Website favicon used across all pages |

These local image assets support the layout and programme content shown in the site. Their source, licence or ownership should be verified before reuse outside this academic submission. The older original filenames remain in the repository only for compatibility and are no longer referenced in the HTML or JavaScript where the descriptive filenames are available.

All locally hosted image files are stored in `images/`. Image licences, ownership or replacement permissions should be verified before formal publication outside this academic submission.

## Dated changelog

The detailed development history is recorded in [`CHANGELOG.md`](CHANGELOG.md). Key dated entries are:

- **5 November 2026 — Part 3 submission preparation:** Added programme search, filtering, sorting, forms, maps, tabs, modal feedback, lightbox controls, animations and deployment documentation.
- **5 November 2026 — Documentation and feedback corrections:** Added the project changelog, rewrote the README, documented image usage, added Harvard Anglia references, removed placeholders, and corrected image filenames.
- **5 November 2026 — Part 2 feedback changes:** Linked the original Part 2 repository, recorded removal of layout tables, commit and changelog improvements, keyboard and focus improvements, semantic and SEO updates, image corrections and reference additions.
- **5 November 2026 — Feedback repository continuity:** Added the original Part 2 repository URL and identified the exact feedback areas carried forward or corrected for Part 3.
- **5 November 2026 — Initial website implementation:** Added the five-page BASIC website and responsive styles before final Part 3 enhancements.

## References

Google (n.d.) *Google Fonts: Inter*. Available at: https://fonts.google.com/specimen/Inter (Accessed: 5 November 2026).

Google (n.d.) *Google Fonts: Montserrat*. Available at: https://fonts.google.com/specimen/Montserrat (Accessed: 5 November 2026).

Google (n.d.) *Maps URLs: Build a URL for Google Maps*. Available at: https://developers.google.com/maps/documentation/urls (Accessed: 5 November 2026).

GreenSock (n.d.) *GSAP documentation*. Available at: https://gsap.com/docs/v3/ (Accessed: 5 November 2026).

Leaflet (n.d.) *Leaflet: An open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 5 November 2026).

Microsoft (2026) *Microsoft Copilot*. Available at: https://copilot.microsoft.com/ (Accessed: 5 November 2026). Development and debugging assistance was used for code explanations and implementation suggestions.

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 5 November 2026).

Statistics South Africa (2026) *Labour market trends and youth unemployment statistics*. Available at: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

UNPKG (n.d.) *Leaflet 1.9.4*. Available at: https://unpkg.com/leaflet@1.9.4/dist/ (Accessed: 5 November 2026).
