# BASIC Community Future Labs Website

**Student:** Hlompho Muzi Xolo  
**Student number:** ST10476575  
**Module:** WEDE5020 — Web Development Introduction  
**Assessment:** Portfolio of Evidence, Part 3

## Project overview

This project is a responsive, five-page website for **BASIC Community Future Labs**, a fictional community-learning organisation based in Johannesburg and Durban, South Africa. The website presents the organisation, its programmes, volunteer and sponsorship opportunities, contact information, and two lab locations.

The project is implemented using HTML5, CSS, vanilla JavaScript, Leaflet/OpenStreetMap, and GSAP. It is a static website and does not require a backend, database, package installation, or build process.

## Live website and repository

- **Live URL:** https://44xolo.github.io/BASIC/
- **GitHub repository:** https://github.com/44Xolo/BASIC
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

- Removed HTML layout tables and used CSS Grid and Flexbox for page layout.
- Added dated documentation of changes in `CHANGELOG.md`.
- Added consistent hover, focus, active and disabled states to interactive elements.
- Improved alt text and descriptive image filenames.
- Added unique titles and descriptive meta information to all pages.
- Improved semantic structure, skip navigation and keyboard usability.
- Removed placeholder deployment instructions and other placeholder values from production pages.

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

## References

- Statistics South Africa — youth unemployment statistics: https://www.statssa.gov.za/
- Leaflet JavaScript library: https://leafletjs.com/
- Leaflet CDN documentation: https://unpkg.com/leaflet@1.9.4/dist/
- OpenStreetMap data and tiles: https://www.openstreetmap.org/copyright
- Google Maps directions URLs: https://developers.google.com/maps/documentation/urls
- GSAP animation library: https://gsap.com/docs/v3/
- Google Fonts: https://fonts.google.com/
- Inter font: https://fonts.google.com/specimen/Inter
- Montserrat font: https://fonts.google.com/specimen/Montserrat
- Microsoft Copilot — development and debugging assistance, used for code explanations and implementation suggestions.

All locally hosted image files are stored in `images/`. Image licences, ownership or replacement permissions should be verified before formal publication outside this academic submission.
