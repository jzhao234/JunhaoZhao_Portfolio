# Portfolio Design & Content Reference

Internal spec for keeping the site consistent as it evolves.
Source of truth: `src/app/page.tsx` (homepage).

---

## Purpose

This is a personal portfolio for Junhao Zhao, a CS student at Temple University applying to software engineering internships and full-time roles.

Primary goal: get a recruiter to contact me or pass my resume to a hiring manager.

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
5. **No dashboard feel.** This is not a SaaS product. Filter controls, toggle menus, and accordion UX belong in apps, not portfolios.
6. **Dark-first.** Dark mode is the default experience. Light mode should also look good but is secondary.

---

## Visual System

### Colors

| Token | Value | Use |
|---|---|---|
| Accent | `#2196F3` | Buttons, top borders, links, highlights |
| Accent hover | `#1976D2` | Hover state for filled blue buttons |
| Accent tint | `#2196F3` at 10% opacity | Skill tags, badge backgrounds, tint surfaces |
| Border default | `border-gray-200 dark:border-white/10` | Card edges, dividers |
| Border accent | `border-t-2 border-t-[#2196F3]` | Top accent on featured cards |
| Text primary | default (inherits) | Headings, body |
| Text secondary | `text-gray-600 dark:text-gray-400` | Descriptions, body copy |
| Text muted | `text-gray-400 dark:text-gray-500` | Dates, labels, supporting text |
| Background card | `bg-gray-50 dark:bg-white/5` | Image wells, card insets |
| Status green | `bg-green-400 dark:bg-green-500` | Availability dot |

**Do not use `#1E90FF`.** The old pages use it. Unify everything to `#2196F3`.

### Dark mode backgrounds

- Page background: handled by layout/body (no explicit bg class needed on content containers)
- Navbar/footer: `dark:bg-[#151516]`
- Card surfaces: `dark:bg-white/5` or `dark:bg-[#131213]` (prefer `dark:bg-white/5` going forward)

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

| Element | Classes |
|---|---|
| Page H1 (hero name) | `text-4xl sm:text-5xl font-bold tracking-tight` |
| Section heading | `text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400` |
| Card title (project, experience) | `font-bold` or `font-semibold` |
| Body / description | `text-sm text-gray-600 dark:text-gray-400 leading-relaxed` |
| Supporting / muted | `text-sm text-gray-400 dark:text-gray-500` |
| Micro label / tag | `text-xs` |
| Tech stack line under bio | `text-xs text-gray-400 dark:text-gray-500 tracking-wide` |

- Use system font stack (Next.js default). No custom fonts unless there is a strong reason.
- Avoid `font-thin` or `font-light` — it reads poorly in dark mode on most screens.
- No decorative italic or all-caps body text.

---

## Section Header Pattern

Every major section uses the `SectionLabel` component:

```tsx
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
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
border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden
```

### Featured card (project cards on homepage)

```
border border-gray-200 dark:border-white/10 border-t-2 border-t-[#2196F3] rounded-xl overflow-hidden
```

The blue top border signals importance without adding loud badges or labels.

### Image well inside card

```
bg-gray-50 dark:bg-white/5 p-4
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
px-4 py-2 rounded-lg bg-[#2196F3] text-white text-sm font-medium hover:bg-[#1976D2] transition-colors
```

Use for the main action in a section (e.g., LinkedIn in hero, LinkedIn in CTA).

### Secondary (ghost border)

```
px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-sm font-medium hover:border-[#2196F3] hover:text-[#2196F3] transition-colors
```

Use for supporting actions (GitHub, Resume).

### Compact utility (inside cards)

```
px-3 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-[#2196F3] hover:text-[#2196F3] transition-colors
```

For GitHub / Live Demo links inside project cards.

### Compact accent (demo variant)

```
px-3 py-1 text-xs font-medium rounded-md bg-[#2196F3]/10 text-[#2196F3] hover:bg-[#2196F3]/20 transition-colors
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
    <span className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
      {children}
    </span>
  );
}
```

### Rules

- Use `SkillTag` for all skill/tech labels on homepage.
- On project cards, cap at 5 skills: `project.skills.slice(0, 5)`.
- Do not use pills as navigation. Do not use pills as filter controls on primary pages.
- Do not highlight or color-code individual skill pills on the homepage — the muted style is intentional.
- Pills should support, not dominate. If the pills are the most visible thing on a card, reduce them.

---

## Section-Level "View All" Links

```
<Link href="/projects" className="text-sm text-[#2196F3] hover:underline">
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
- Replace `blueBorder` class usage with explicit `border border-gray-200 dark:border-white/10 rounded-xl`
- Replace `#1E90FF` with `#2196F3` throughout
- Skills sidebar: use `SkillTag` not `SkillsItem` (which has old styling)
- Image gallery: keep, it's a useful proof of work
- GitHub / Demo links: compact utility button style, top of page near title

---

## Projects Page Rules

The current `/projects` page (`ProjectCard.tsx`) uses a filter/sort panel with a hamburger toggle. This creates a dashboard feel that is inappropriate for a portfolio.

**Direction for future refactor:**
- Remove or significantly downsize the filter UI
- Use a simple `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` layout
- Cards should match homepage card style: bordered, `rounded-xl`, blue top border
- If filtering is kept at all, use a compact row of plain text filter buttons, not a toggle panel
- No hamburger menu on the projects page — that pattern is for navigation, not filter controls

---

## Experience Section Rules (Homepage)

- Show 2 most relevant entries only on homepage
- Format: title + date row, org below, bullets with `–` prefix
- Date right-aligned, muted (`text-gray-400 dark:text-gray-500`)
- Bullets: `text-sm`, one line each if possible, impact-focused
- "View full experience →" link below

---

## Experience Page Rules

The current `/experiences` page uses an accordion-expand pattern with a sort filter. This is overly complex for a portfolio.

**Direction for future refactor:**
- Drop the sort/filter panel entirely — recruiters don't filter experience
- Use a flat chronological list, no accordion
- Show all bullets for every entry (recruiters read résumés linearly)
- Logo + title + date + location + bullets, consistent with homepage experience style
- Replace `ExperienceItem` accordion pattern with a simple static component
- Replace `#1E90FF` with `#2196F3`

---

## Education Section Rules

- Temple University: logo + degree + location + years + relevant coursework
- Central High School: same `flex items-start gap-4` layout with a `w-10 h-10` spacer div (no logo), muted text only
- High school stays visually quieter: `text-gray-400 dark:text-gray-500` for both name and location/years
- No extra details for high school (no activities, clubs, honors) — one line each is enough
- Do not add an education page unless there is a strong reason. The homepage section is sufficient.

---

## Hero Section Rules

- Profile photo: `width={160} height={160}`, `rounded-2xl`
- Photo border: `border border-gray-200 dark:border-white/10`
- Name: `text-4xl sm:text-5xl font-bold tracking-tight`
- Tagline: 2–3 sentences max. CS student → what I build → most recent significant project. No buzzwords.
- Tech stack line: `text-xs text-gray-400` with `·` separator. Supporting detail, not the headline.
- Availability dot: `w-2 h-2 rounded-full bg-green-400`, followed by one short availability line
- Buttons: LinkedIn (filled blue), GitHub (ghost), Resume (ghost) — always in that order
- Do not use pill badges ("Open to work", "Available") — the green dot + text is enough

---

## CTA Section Rules

Located at the bottom of the homepage, separated by a top border.

- Green dot + short availability line above heading
- Heading: direct, honest ("Open to software engineering opportunities")
- Subtext: one sentence pointing to LinkedIn / GitHub / resume
- Buttons: LinkedIn (filled), GitHub (ghost), Download Resume (ghost)
- No "Let's work together" or partnership language
- No "I'd love to chat about your project" freelance framing
- Keep it short — this section exists to close the page, not repeat the hero

---

## Copywriting Rules

### Tone

- Sound like a strong early-career SWE, not a senior engineer and not a student project fair.
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

### Availability / status language

- ✓ "Open to SWE internships and full-time roles"
- ✓ "Available for summer 2026 internships and full-time roles"
- ✗ "Actively seeking opportunities to make an impact"
- ✗ "Passionate about contributing to innovative teams"

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

- Hover states: border color or text color change to `#2196F3`, `transition-colors`
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
- Filter/sort controls on pages that don't need them
- Accordion/expand patterns for content that should be visible by default
- Hamburger menus for anything other than primary navigation
- Tooltip-only affordances ("More Details" tooltip on hover only)
- Repeated "Details →" or "View →" links that are the main CTA
- Three or more equally loud CTAs in a row

**Visual anti-patterns**
- Overusing blue outlines (`border-[#2196F3]`) — it loses meaning when everywhere
- Flooding cards with skill pills (cap at 5)
- `font-thin` in dark mode (illegible on many screens)
- Mixing `#1E90FF` and `#2196F3` — unify to `#2196F3`

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

Current state: diverged. Uses `#1E90FF`, fixed-width cards, filter/sort dashboard.

Needs:
- Replace `max-w-[95vw]` container with `max-w-5xl mx-auto px-6 py-8`
- Remove or simplify filter UI
- Replace `ProjectItem` card with homepage card pattern
- Unify accent color to `#2196F3`
- `SectionLabel` for "Projects" heading

### Project Detail (`src/app/projects/[selectedProject]/page.tsx`)

Current state: partially functional, older styling.

Needs:
- Container alignment: `max-w-5xl mx-auto px-6 py-8`
- Replace `blueBorder` with explicit border classes
- Replace `#1E90FF` with `#2196F3`
- `SectionLabel` for subsections (Overview, Skills, etc.)
- Consider flattening the two-column layout to a single column on smaller screens

### Experience (`src/app/experiences/page.tsx` + `ExperienceCard.tsx` + `ExperienceItem.tsx`)

Current state: diverged. Filter/sort panel, accordion UX, `#1E90FF`.

Needs:
- Remove filter/sort panel entirely
- Replace accordion with flat list
- Match homepage experience item style
- Replace `#1E90FF` with `#2196F3`
- Container: `max-w-5xl mx-auto px-6 py-8`

### Education

Currently embedded in homepage only. No separate page. Keep it that way unless there is a specific reason to break it out.
