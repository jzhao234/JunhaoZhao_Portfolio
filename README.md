# Junhao Zhao — Portfolio

The source for [junhaozhao.com](https://junhaozhao.com), a recruiter-focused
software engineering portfolio. The site presents selected projects,
professional experience, technical skills, and contact links in a responsive,
dark-first interface.

## What the site includes

- A scan-friendly homepage with featured projects, experience, education, and
  a categorized technical stack.
- Filterable project and experience pages backed by typed data files.
- Dynamic project case studies with screenshots, architecture notes,
  challenges, links, and technology tags.
- A persistent light/dark theme that is applied before first paint.
- Search metadata, Open Graph imagery, structured person data, `robots.txt`,
  and a generated sitemap.
- A downloadable resume plus direct GitHub and LinkedIn links.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Project structure

```text
src/
├── app/                 # Pages, dynamic routes, metadata, sitemap, robots
├── components/          # Layout and reusable portfolio UI
├── data/                # Typed project, experience, and skill content
└── utils/               # Skill categorization and image/text helpers
public/
├── files/               # Downloadable resume
├── logo/                # Organization and technology marks
└── projects/            # Project screenshots grouped by project
```

Project and experience content lives in `src/data/` rather than inside page
components. This keeps the rendering system stable while making portfolio
updates small and reviewable.

## Local development

### Prerequisites

- Node.js 20.9 or newer
- npm

### Setup

```bash
git clone https://github.com/jzhao234/JunhaoZhao_Portfolio.git
cd JunhaoZhao_Portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required for the current site.

## Validation

Run both checks before publishing content or implementation changes:

```bash
npm run lint
npm run build
```

The production build verifies the TypeScript application and generates the
static routes, sitemap, and robots file.

## Updating portfolio content

Read [ADDING-CONTENT.md](./ADDING-CONTENT.md) before adding or changing a
project or experience. It documents the data shapes, image conventions, skill
registry, homepage feature rules, and the requirement that recruiting claims
remain factual.

The visual system and component conventions are documented in
[master.md](./master.md). Content updates should use those existing patterns
instead of introducing one-off styling.

## Production

The canonical production URL is [junhaozhao.com](https://junhaozhao.com).
Metadata, structured data, the sitemap, and `robots.txt` all use that domain;
update them together if the canonical URL ever changes.
