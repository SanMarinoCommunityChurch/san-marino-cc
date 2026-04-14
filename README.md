# San Marino Community Church Astro Website

This repository contains the front-end code (HTML, CSS, and JavaScript) for the [San Marino Community Church website](https://sanmarinocommunitychurch.com/). Serving as the "presentation layer" of a "headless" architecture, the codebase uses the Node.js-based [Astro web framework](https://astro.build/) to prerender a static site via a build step. The "content layer" is handled separately in a [Sanity Studio app](https://github.com/SanMarinoCommunityChurch/san-marino-cc-sanity-studio) and is exposed to the front-end via a query language API (the studi).

> [!NOTE]
> A **headless content management sytem (CMS)** is a modern web architecture model where the content ("body") is separated from the presentation ("head") in its structure and concerns. This separation allows for greater freedom in modeling content for its intrinsic structure and meaning, and it allows editors to focus solely on managing that content without having to worry about how it looks or functions (which is the domain of the developer).

Use this project to make changes to template files, add new site integrations, or set up a local development environment for testing features / fixes.

## Features

- [Astro v6](https://astro.build/) TypeScript-based static site generator with various first- and third-party plugins and built-in [Vite](http://vite.dev/) server
- Astro's fully-typed [content collections](https://docs.astro.build/en/guides/content-collections/) loading headless data from the [Sanity](https://www.sanity.io/) content platform (accessed with Sanity client + [GROQ queries](https://www.sanity.io/docs/content-lake/how-queries-work))
- [Lightning CSS](https://lightningcss.dev/) scripts to transpile, bundle, and minify CSS
- Lightweight JavaScript interactivity with [Vue](https://vuejs.org/) and [Reka](https://reka-ui.com/) UI components
- [Full Calendar](https://fullcalendar.io/) JavaScript-based calendar using Google Calendar integration
- Lightweight [Splide](https://splidejs.com/) carousels
- Lightweight Youtube video players with `src/lib/scripts/liteYoutubeEmbed.js`
- Fluid typography scaling and spacing with [Utopia](https://utopia.fyi/)
- Formatting with [Prettier](https://prettier.io/) and linting with [ESLint](https://eslint.org/) + Astro plugin
- Netlify-based deployment configured through `netlify.toml`
- Nightly scheduled deploy defined in `netlify/functions`

### 2026 Update

Major changes were made to this repository in April of 2026:

- Upgraded Astro v4 to v6
- Added content collections with loaders/schemas
- Replaced hard-coded page routes with dynamic routes using `getStaticPaths`
- Replaced outdated dependencies with new/better versions, including `luxon` (replaced with `formkit/tempo`), `headless-ui` (replaced with `reka-ui`), etc.
- Replaced PostCSS with Lightning CSS
- Cleaned up components and templates

## Getting Started

### 1. Prerequisites

To get started locally, ensure that you have [Node](https://nodejs.org/en) and the [npm package manager](https://www.npmjs.com/) installed on your system. The easiest way to do this is by downloading Node, nvm (the Node version manager), and npm all together via the [Node downloads page](https://nodejs.org/en/download).

- [Node](https://nodejs.org/en) (JavaScript runtime environment)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (version control)

### 2. Clone repository

In the terminal, navigate to your projects directory and `git clone` the repository:

```sh
git clone https://github.com/SanMarinoCommunityChurch/san-marino-cc.git
cd san-marino-cc
```

### 3. Install dependencies with `npm`

```sh
npm install
```

### 4. Run scripts

The project's `package.json` file registers the following scripts:

<!-- prettier-ignore -->
| Script | Description |
| ------ | ----------- |
| `npm run dev` | Starts the Astro dev server. |
| `npm run build` | Builds site to `dist` output directory. |
| `npm run preview` | Previews the *built* site files in a local environment. |

## Project Structure

The project structure follows [Astro's opinionated guide](https://docs.astro.build/en/basics/project-structure/#public).

```yaml
.
├── dist/ # IGNORED - Astro build output
├── public/ # non-code, unprocessed assets (favicon, fonts, icons, etc.)
│   ├── fontawesome/
│   ├── fonts/
│   └── robots.txt
├── src/ # project source code
│   ├── assets/ # static/fallback assets for processing
│   ├── components/ # reusable units of code, organized by type
│   ├── content/ # schemas for content collections
│   ├── layouts/ # base layout and templates for special pages
│   ├── lib/ # library of helpers and utility functions
│   │   ├── sanity/ # GROQ queries and other helpers for Sanity
│   │   ├── scripts/ # third-party downloaded scripts
│   ├── pages/ # REQUIRED - page route definitions
│   ├── styles/ # CSS files
│   ├── utils/ # helper functions
│   ├── content.config.ts # REQUIRED - content collections config
│   └── env.d.ts # Typescript environment config
├── .gitignore # files ignored by repo
├── .prettierrc # config file for formatting
├── astro.config.mjs # REQUIRED - config file for Astro
├── eslint.config.js # config file for linter
├── package.json # REQUIRED - project manifest
├── README.md
└── tsconfig.json # config file for Typescript
```

### Content

Content collections are defined in the `src/content` directory and registered in the `src/content.config.ts` file. Almost all site data comes from the Sanity CMS, which is queried and loaded in [Astro collections](https://docs.astro.build/en/guides/content-collections/) in the following steps:

1. Content GROQ queries defined in `src/lib/sanity/queries`
2. Each content collection has a dedicated file in `src/content`, which uses a [custom loader](https://docs.astro.build/en/reference/content-loader-reference/#building-a-loader) to load/cache the queries
3. This file also contains a Zod schema, adding types/validation corresponding to the Sanity queries
4. Exported collections are then registered in the `content.config.ts` file
5. Result is a fully-typed collection

### Pages

The `src/pages` directory registers all of the page routes for the site. Because of how the initial project was set up, there are a few idiosyncracies.

- `[...sectionPage].astro` builds dynamic routes from the `pages` collection, with the exception of the home page (`index.astro`) and calendar page (`calendar.astro`). Within the file, pages are assigned another template based on their data (located in `src/layouts` - these are mostly for collection index pages) or instead utilize the default page modules (imported from `components/modules`).
- Other dynamic route files build pages for content collections that have detail pages or taxonomy pages - i.e., `[...event]`, `[...eventCategory]`, `[...form]`, etc.
- `worship/services/[page].astro` needs its own dedicated file because it is a paginated dynamic route collection.

## Resources

- [Astro Documentation](https://astro.build/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [An Opinionated Guide to Sanity Studio](https://www.sanity.io/docs/developer-guides/an-opinionated-guide-to-sanity-studio)
