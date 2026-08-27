# Portfolio Design & Content Reference

Internal spec for keeping the site consistent as it evolves.

> For **adding a project or experience**, read
> [ADDING-CONTENT.md](./ADDING-CONTENT.md) as well — it covers the data
> files, the skills registry, and the rule against inventing facts.
Source of truth: `src/app/page.tsx` (homepage).

---

## Purpose

This is a personal portfolio for Junhao Zhao, a Junior Solutions Engineer at ElcanoTek and Temple University computer science graduate beginning an M.S. in Artificial Intelligence in Fall 2026.

Primary goal: establish professional credibility by showing current engineering work, selected projects, research, and clear ways to connect.

The site should answer these questions quickly:
1. Who is this person and what do they build?
2. Can they actually write software? (projects)
3. Do they have relevant experience?
4. How do I reach them?

Everything else is secondary.

---

## Site Identity

- **Not a business site.** No partnerships, no services, no client work framing.
- **Not a freelance portfolio.** No "hire me for your project" language.
- **Not a startup landing page.** No hero animations, no bold taglines, no "disrupting X".
- **Not a design exercise.** Restraint over cleverness. Content over decoration.
- **Is:** A clean, readable, technical personal portfolio for early-career SWE recruiting.

The aesthetic is: working engineer's GitHub README, not a Dribbble showcase.

---

## Design Principles

1. **Hierarchy first.** Projects and experience carry the most weight. Everything else supports them.
2. **Recruiter scanability.** Assume 20 seconds of attention. The most important info must be visible without scrolling or clicking.
3. **Restraint.** Every element earns its place. When in doubt, remove it.
4. **Consistency.** Repeating the same card, spacing, and color patterns makes the site feel finished.
5. **No dashboard feel.** This is not a SaaS product. Inline filtering is fine and is used on `/projects` and `/experiences` — but it must stay a quiet, always-visible row. Toggle panels, hamburger-driven filter menus, and sort dropdowns are what create the dashboard feel; those stay out.
6. **Dark-first.** Dark mode is the default experience. Light mode should also look good but is secondary.

---

## Visual System

**Updated 2026-07-27 — "cool technical dark" redesign.**

All color and font values live as tokens in `src/app/globals.css`. Components
reference tokens only — never a raw hex value. Changing the site's look means
changing that token block plus the two font imports in `layout.tsx`, nothing else.

### Tokens

| Token | Tailwind class | Dark (default) | Light | Use |
|---|---|---|---|---|
| canvas | `bg-canvas` | `#0A0F16` | `#FBFCFD` | page background |
| surface | `bg-surface` | `#111926` | `#FFFFFF` | cards, raised panels |
| raised | `bg-raised` | `#16202F` | `#F4F7FA` | image wells, insets |
| line | `border-line` | `#1F2C3D` | `#E2E8F0` | hairlines, card edges |
| line-strong | `border-line-strong` | `#2B3B50` | `#CBD5E1` | emphasized borders, bullets |
| content | `text-content` | `#E9EEF5` | `#0D1521` | headings, primary text |
| muted | `text-muted` | `#94A5BA` | `#4B5B6E` | body copy, descriptions |
| subtle | `text-subtle` | `#64748B` | `#64748B` | dates, labels, metadata |
| accent | `text-accent` / `bg-accent` | `#4D9CFF` | `#1B6DE0` | links, active nav, primary CTA |
| accent-hover | `bg-accent-hover` | `#7DB6FF` | `#1552B0` | accent hover |
| accent-contrast | `text-accent-contrast` | `#06111F` | `#FFFFFF` | text on a filled accent button |
| positive | `bg-positive` | `#34D399` | `#059669` | positive status indicators |

Each accent is contrast-checked against its own canvas at 4.5:1 or better.

Skill-tag category colors live in `src/utils/SkillCategoryColor.ts` and carry
their own light/dark pair (`-700` in light, `-400` in dark) for the same reason.

**Do not** reintroduce `#2196F3`, `#1E90FF`, `#1976D2`, `#151516`, or bare
`gray-*` utilities. They were retired in this redesign.

### Theme strategy

Dark is the designed default; light is the override applied when `<html>` does
not carry `.dark`. An inline script in `layout.tsx` applies the stored theme
before first paint, so light never flashes on load.

### Signature motif — the signal rule

A hairline that ignites at the accent and decays into nothing (`.signal-rule`,
plus `.signal-rule-reverse` for the mirrored direction). It appears in exactly
three places: beside a section label, under the sticky navbar, and above the
footer. It loses its meaning if it decorates anything else.

---

## Layout

### Page container

```
max-w-5xl mx-auto px-6 py-8
```

Use this on every full page. Do not use `max-w-[95vw]` or other ad-hoc widths.

### Vertical spacing between sections

```
space-y-12
```

Applied to the top-level page `<div>`. Do not add extra `mt-*` between top-level sections.

### Content max width

Long text blocks (descriptions, bios, coursework) cap at `max-w-lg` to keep line length readable.

---

## Typography

- **Display / headings:** Space Grotesk (`font-display`), weight 700.
- **Body:** Plus Jakarta Sans (`font-sans`) — the default on `body`.
- **Mono:** Geist Mono (`font-mono`) — section labels, dates, category labels,
  the hero metadata line, the footer copyright. Mono is the instrument-panel
  voice: metadata only, never body copy.
- Loaded via `next/font/google` in `layout.tsx` — never a CSS `@import`.

| Element | Classes |
|---|---|
| Hero H1 | `font-display text-4xl sm:text-5xl font-bold tracking-tight` |
| Subpage H1 | `font-display text-3xl font-bold tracking-tight` |
| Section label | `font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-subtle` |
| Card / entry title | `font-display text-[18px] font-bold text-content` |
| Body / description | `text-[15px] text-muted leading-relaxed` |
| Meta (dates, labels) | `font-mono text-[12px] text-subtle` |

- Avoid `font-thin` / `font-light` — they read poorly on the dark canvas.
- No decorative italic. All-caps is reserved for mono labels only.

---

## Section Header Pattern

Every major section uses the `SectionLabel` component:

```tsx
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}
```

- Always uppercase, small, muted — never the loudest element on the page.
- The horizontal rule fills the remaining width.
- `mb-8` creates breathing room between the label and content.
- Use this consistently on all pages, not a raw `<h1>` or `<h2>` with custom sizing.

---

## Cards and Surfaces

### Standard card

```
border border-line rounded-xl overflow-hidden
```

### Featured card (project cards on homepage)

```
border border-line border-t-2 border-t-accent rounded-xl overflow-hidden
```

The blue top border signals importance without adding loud badges or labels.

### Image well inside card

```
bg-raised p-4
```

### Card rules

- `rounded-xl` consistently. Do not mix `rounded-lg` and `rounded-xl` across cards.
- Do not nest a bordered card inside another bordered card.
- Do not add box shadows — the border is enough.
- Cards should have one clear click target (see Whole-card click below).

---

## Whole-Card Click Pattern

For clickable cards (project cards, experience items that link somewhere):

```tsx
<div className="relative ...card classes...">
  <Link href="..." className="absolute inset-0" aria-label="View X details" />
  {/* card content */}
  <div className="relative z-10">
    {/* interactive children like GitHub/Demo buttons */}
  </div>
</div>
```

- The `Link` sits at z-0 and covers the entire card.
- Any nested interactive elements (buttons, anchor tags) must be wrapped in `relative z-10` to sit above the overlay.
- This avoids nested `<a>` tags while keeping the full card clickable.
- Do not add a "Details →" or "View project" link as a visible CTA on project cards. The whole card is the CTA.

---

## Buttons

### Primary (filled)

```
px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors
```

Use for the main action in a section (e.g., LinkedIn in hero, LinkedIn in CTA).

### Secondary (ghost border)

```
px-4 py-2 rounded-lg border border-line text-sm font-medium hover:border-accent hover:text-accent transition-colors
```

Use for supporting actions (GitHub, Resume).

### Compact utility (inside cards)

```
px-3 py-1 text-xs font-medium rounded-md border border-line text-muted hover:border-accent hover:text-accent transition-colors
```

For GitHub / Live Demo links inside project cards.

### Compact accent (demo variant)

```
px-3 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors
```

Use for Live Demo only — it draws slightly more attention than the GitHub button.

### Rules

- Never three equally loud CTAs in a row. Pick a hierarchy: primary → secondary → ghost.
- In any one section, maximum one filled blue button.
- Download links use the ghost border style, not the filled style.

---

## Skill Tags / Pills

```tsx
function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span className="px-2.5 py-0.5 text-xs rounded-full bg-raised text-muted">
      {children}
    </span>
  );
}
```

### Rules

- Use `SkillTag` for all skill/tech labels on homepage.
- On project cards, cap at 5 skills: `project.skills.slice(0, 5)`.
- Do not use pills as navigation. Filter pills are allowed on `/projects` and `/experiences`, but never on the homepage — see Filter Row Pattern.
- Skill pills are category-colored via `SkillCategoryColor`, which carries a light/dark pair per category. Keep them quiet in weight: they support the card, never dominate it.
- Pills should support, not dominate. If the pills are the most visible thing on a card, reduce them.

---

## Filter Row Pattern

Used on `/projects` and `/experiences` only — never the homepage.

- Sits directly beneath the page header, above the content grid.
- Always visible. No toggle, no panel, no hamburger, no sort dropdown.
- Label: `font-mono text-[12px] uppercase tracking-[0.14em] text-subtle`, reading `Filter:`.
- Unselected pill: `border border-line text-subtle hover:text-content hover:border-line-strong`.
- Selected pill: the skill'scategory color (`colors.bg` + `colors.text`) plus
  `border border-transparent font-medium`. The transparent border is required —
  without it the pill loses 1px on toggle and the row reflows.
- Selecting does not hide anything. It re-sorts matches to the front and dims
  non-matches to `opacity-40`, so the full set stays browsable.
- A `Clear` text button appears only while a filter is active.

Rationale: filtering earns its place on pages that list everything, and dimming
rather than hiding keeps it from feeling like a database query.

---

## Section-Level "View All" Links

```
<Link href="/projects" className="text-sm text-accent hover:underline">
  View all projects →
</Link>
```

- Light, text-only, no button treatment.
- Use after a section that shows a subset (featured projects, 2 experience items).
- `mt-6` above it.
- Do not use more than one per section.

---

## Project Card Rules (Homepage)

- Two cards, `grid-cols-1 sm:grid-cols-2 gap-5`
- Both cards equal treatment — no "featured" badge, the blue top border is enough signal
- Image at top, content below
- Show: name, description, up to 5 skill tags, compact GitHub/Demo buttons
- Whole card is clickable (links to detail page)
- GitHub and Demo buttons are `relative z-10` so they work independently
- Description should be 2–4 sentences max. What was built, what it does technically, why it matters.
- Do not show "This is a research project at..." as the first sentence — lead with what was built.

---

## Project Detail Page Rules

- Page container: `max-w-5xl mx-auto px-6 py-8` (align with homepage)
- Section structure should follow `SectionLabel` pattern
- Replace `blueBorder` class usage with explicit `border border-line rounded-xl`
- Use the accent token (`text-accent` / `bg-accent`) throughout
- Skills sidebar: use `SkillTag` not `SkillsItem` (which has old styling)
- Image gallery: keep, it's a useful proof of work
- GitHub / Demo links: compact utility button style, top of page near title

---

## Projects Page Rules

- Page header: `font-display text-3xl font-bold tracking-tight` + `.signal-rule` beneath.
- Filter row directly under the header — see Filter Row Pattern. Keep it.
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`.
- Cards match the homepage card pattern: `bg-surface border border-line rounded-xl`, hover to `border-accent/50`.
- No hamburger menu and no sort dropdown on this page — navigation patterns only.

---

## Experience Section Rules (Homepage)

- Show 2 most relevant entries only on homepage
- Format: title + date row, org below, bullets with `–` prefix
- Date right-aligned, muted (`text-subtle`)
- Bullets: `text-sm`, one line each if possible, impact-focused
- "View full experience →" link below

---

## Experience Page Rules

- Page header and filter row match `/projects` exactly — see Filter Row Pattern. Keep the filter.
- Prefer a flat list: bullets should be visible by default, not hidden behind an accordion.
- Show all bullets for every entry (recruiters read résumés linearly)
- Logo + title + date + location + bullets, consistent with homepage experience style
- Replace `ExperienceItem` accordion pattern with a simple static component
- Use the accent token (`text-accent` / `bg-accent`)

---

## Education Section Rules

- Temple University: logo + degree + location + years + relevant coursework
- Central High School: same `flex items-start gap-4` layout with a `w-10 h-10` spacer div (no logo), muted text only
- High school stays visually quieter: `text-subtle` for both name and location/years
- No extra details for high school (no activities, clubs, honors) — one line each is enough
- Do not add an education page unless there is a strong reason. The homepage section is sufficient.

---

## Hero Section Rules

- Profile photo: `width={160} height={160}`, `rounded-2xl`
- Photo border: `border border-line`
- Name: `text-4xl sm:text-5xl font-bold tracking-tight`
- Tagline: 2–3 sentences max. Current role → what I build → areas of technical focus. No buzzwords.
- Tech stack labels: `font-mono text-[12px] uppercase tracking-[0.1em] text-subtle`. Supporting detail, not the headline.
- Metadata dot: `w-2 h-2 rounded-full bg-accent`, followed by one short location or education line
- Buttons: LinkedIn (filled blue), GitHub (ghost), Resume (ghost) — always in that order
- Do not use pill badges ("Open to work", "Available"); keep the line factual and understated

---

## Contact Link Rules

- Keep LinkedIn, GitHub, and the résumé together in the hero.
- Do not imply availability or an active job search unless that is currently true.
- Keep the calls to action concise and professional.

---

## Copywriting Rules

### Tone

- Sound like a strong early-career engineer, not a senior engineer and not a student project fair.
- Precise and technical, but not jargon-heavy.
- No inflated verbs: "spearheaded", "architected", "championed", "drove alignment".
- Use normal verbs: built, added, contributed, designed, improved, wrote.
- Do not use marketing language: "cutting-edge", "innovative", "seamless", "world-class".
- Do not use startup pitch language: "empowering", "transforming", "disrupting".
- Do not use client-service language: "delivering value", "exceeding expectations", "client needs".

### Projects

- Lead with what was built, not the context it was built in.
- ✓ "Full-stack research platform for analyzing drug synergy in cancer treatment."
- ✗ "A project I built while doing research at Fox Chase Cancer Center."
- Follow with what it does technically in one sentence.
- End with why it matters or what's interesting about it, if space allows.
- Descriptions: 2–4 sentences. No more.

### Experience bullets

- Start with an action verb.
- One concrete thing per bullet.
- Prefer specificity over generality.
- ✓ "Built a full-stack drug synergy analysis platform using Next.js and FastAPI"
- ✗ "Worked on developing various technical solutions for the lab"
- Include a technology or method name where natural.
- Do not pad bullets with soft skills ("demonstrated strong communication").

### Employment / status language

- ✓ "Junior Solutions Engineer at ElcanoTek"
- ✓ "Philadelphia, PA · Temple University CS, Class of 2026"
- ✗ "Actively seeking opportunities to make an impact"
- ✗ Any availability claim that is not currently true

---

## Responsiveness Rules

- Mobile-first. Test at 375px width.
- All section layouts: `flex-col` on mobile, `flex-row` or `grid-cols-2` on `sm:` and above.
- Homepage project grid: `grid-cols-1 sm:grid-cols-2`
- Hero: `flex-col sm:flex-row`
- Experience date: hidden on mobile unless it fits inline
- Navbar: hamburger on mobile, horizontal on `md:` and above
- Touch targets: minimum 44px for any button or interactive element on mobile

---

## Interaction Rules

- Hover states: border or text color change to `accent`, `transition-colors`
- No scale transforms on hover (avoid `hover:scale-*` — it looks cheap on card grids)
- No entrance animations, scroll animations, or typing effects
- No particle backgrounds, gradient blobs, or moving hero elements
- The only motion allowed by default: `transition-colors` on buttons/links
- If animation is ever added, it should be subtle and purposeful (e.g., a single fade-in on page load)

---

## Things to Avoid

**Layout anti-patterns**
- Box inside box inside box (nested bordered containers)
- `max-w-[95vw]` — use `max-w-5xl` with standard padding
- Fixed-width cards (`w-80`) that break grid alignment on different screen sizes
- Centering everything with `justify-center` on a text-heavy page

**UI anti-patterns**
- Filter/sort controls on the homepage, or any filter hidden behind a toggle panel
- Accordion/expand patterns for content that should be visible by default
- Hamburger menus for anything other than primary navigation
- Tooltip-only affordances ("More Details" tooltip on hover only)
- Repeated "Details →" or "View →" links that are the main CTA
- Three or more equally loud CTAs in a row

**Visual anti-patterns**
- Overusing blue outlines (`border-accent`) — it loses meaning when everywhere
- Flooding cards with skill pills (cap at 5)
- `font-thin` in dark mode (illegible on many screens)
- Hardcoding any hex instead of using a token

**Copy anti-patterns**
- Buzzword-heavy bullet points
- Passive voice in experience bullets
- Mentioning soft skills in technical job descriptions
- Startup/freelance/agency tone

---

## Page-by-Page Guidance

### Home (`src/app/page.tsx`)

Current state: canonical reference. This is what the other pages should move toward.

Priority sections (in visual weight order):
1. Hero — candidate identity + quick access to LinkedIn / GitHub / Resume
2. Featured Projects — proof of work
3. Experience — credibility
4. Tech Stack — supporting signal
5. Education — supporting signal
6. CTA — close

Do not add more sections without removing something. The page is close to the right length.

### Projects (`src/app/projects/page.tsx` + `ProjectCard.tsx` + `ProjectItem.tsx`)

Current state: done. On tokens, `max-w-5xl` container, display-font page header with signal rule, quiet filter row, homepage card pattern.

Needs:
- Nothing outstanding. `ProjectItem.tsx` is dead code and should be deleted.

### Project Detail (`src/app/projects/[selectedProject]/page.tsx`)

Current state: partially functional, older styling.

Needs:
- Container alignment: `max-w-5xl mx-auto px-6 py-8`
- Replace `blueBorder` with explicit border classes
- Use the accent token (`text-accent` / `bg-accent`)
- `SectionLabel` for subsections (Overview, Skills, etc.)
- Consider flattening the two-column layout to a single column on smaller screens

### Experience (`src/app/experiences/page.tsx` + `ExperienceCard.tsx` + `ExperienceItem.tsx`)

Current state: on tokens, `max-w-5xl` container, display-font page header with signal rule, quiet filter row.

Needs:
- Nothing outstanding. `ExperienceItem` is already a flat list with all bullets
  visible; the accordion described in older revisions of this document no longer
  exists in the code.

### Education

Currently embedded in homepage only. No separate page. Keep it that way unless there is a specific reason to break it out.
