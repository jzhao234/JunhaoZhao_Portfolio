# Adding Projects and Experiences

Rules for anyone — human or LLM — adding content to this portfolio.
Read this *and* `master.md` before editing. `master.md` owns visual design;
this file owns content structure.

---

## Rule zero: never invent facts

This is a recruiting site. A fabricated metric, date, or technology is a lie
told to a hiring manager, and it is the kind of thing that gets caught in an
interview.

**Never write** a number, date, job title, employer, team size, Lighthouse
score, user count, or outcome that was not explicitly supplied. If a field is
unknown, leave it out — every optional field renders fine when absent.

If you were asked to add something and were not given the facts, **stop and ask
for them.** Do not infer a tech stack from the project name. Do not guess dates
from surrounding entries. Do not pad bullets to match the length of others.

---

## Adding a project

### 1. Create `src/data/projects/<slug>.ts`

Copy the shape from an existing file — `sora-ascent.ts` is the most complete
example, `osaka-hibachi.ts` the leanest.

```ts
import type { ProjectTypes } from "./types";

const myProject: ProjectTypes = {
  id: "MyProject",            // unique, PascalCase, used as a React key
  slug: "my-project",         // kebab-case; becomes /projects/my-project
  name: "My Project",
  importance: 5,              // lower sorts first
  featured: false,            // true = appears on the homepage
  skills: ["Next.js", "TypeScript"],
  cardDescription: "...",
};

export default myProject;
```

### 2. Register it in `src/data/projects/index.ts`

Both the import and the `projects` array. A file that is not added to the array
is invisible — there is no auto-discovery.

### 3. Field reference

`ProjectTypes` is defined in `src/data/projects/types.ts`. Only `id`, `slug`,
`name`, and `skills` are required.

| Field | Where it shows | Notes |
|---|---|---|
| `cardDescription` | Homepage + `/projects` cards | Clamped to 4 lines on the homepage, 5 on `/projects`. Aim for 2–4 sentences. Lead with what was built, not "This is a project that…". |
| `skills` | Detail page; drives the `/projects` filter | Every entry should exist in `src/data/skills.ts` — see below. |
| `cardSkills` | Card pills only | Optional. Use when `skills` is long; `skills` still drives filtering. |
| `images` | Card thumbnail + detail gallery | First image is the card thumbnail. |
| `overview`, `problem`, `solution` | Detail page prose | Template literals; blank lines separate paragraphs. |
| `features`, `architecture`, `challenges`, `improvements` | Detail page lists | Plain string arrays. |
| `githubLink`, `demoLink` | Buttons on card + detail | Omit if none. `demoLink` renders as the filled accent button, `githubLink` as the outline one. |

### 4. Images

Put them in `public/projects/<projectName>/` and reference them as
`/projects/<projectName>/shot.png`. Use real screenshots of the actual work.
Card thumbnails render inside a fixed-height well, so a wide 16:9 screenshot
of the primary screen reads best.

If you have no screenshot, omit `images` entirely rather than using a
placeholder — the card layout handles its absence.

---

## Adding an experience

Add an object to the `experiences` array in `src/data/experiences.ts`.
The type is declared at the top of that same file.

```ts
{
  id: "unique-id",
  logo: { src: "/logo/org.png", alt: "Org" },
  title: "Software Engineering Intern",
  org: "Company Name",
  location: "City, State",
  date: "Aug 2025 – Dec 2025",
  bullets: ["..."],
  skills: ["TypeScript"],
  importance: 3,
  featured: false,
}
```

- `date` uses an en dash with spaces: `May 2025 – Present`, not a hyphen.
- `logo.src` must point to a real file in `public/logo/`. Reuse
  `/logo/Temple-Logo-T-Header.svg` for anything Temple.
- `link` is optional and points at a related project page, e.g.
  `/projects/drug-synergy-analyzer`.
- Entries are ordered by `importance` (lower first), not by date.

### Bullet writing

Two to four bullets. Each one should say **what you built or did, with what,
and to what end.** Compare:

- Weak: "Worked on the frontend using Vue."
- Strong: "Implemented frontend updates in Vue 3 + Vite, including bug fixes,
  UI adjustments, and missing language support for the cookie banner."

Do not claim impact that was not measured. "Improved performance" without a
number is filler; either cite the real number you were given or describe the
work instead.

---

## Skills registry

Skill strings are matched against `src/data/skills.ts` by
`src/utils/skillCategory.ts`, **case-insensitively but otherwise exactly**.

A skill not in that registry still renders — it just falls back to the muted
grey pill instead of its category color, and it will not appear in the homepage
tech-stack section. So:

- Reuse an existing skill string verbatim where one fits (`Next.js`, not
  `NextJS`; `Tailwind CSS`, not `Tailwind`).
- If the skill is genuinely new and you actually use it, add it to
  `src/data/skills.ts` under the right `SkillCategory` — the categories are
  `Language`, `Backend`, `DataVisualization`, `DatabaseCloud`, `Frontend`,
  and `Others`.

`highlightSkillsInText` also colors these strings when they appear inside
descriptions and bullets, which is why exact spelling matters.

---

## Homepage placement

`featured: true` promotes an item to the homepage.

- **Projects** render in a two-column grid, so featured projects look best in
  even numbers. Two is the current design intent.
- **Experiences** show the featured subset above a "View full experience" link.

Do not mark everything featured. The homepage is a 20-second scan; adding a
fifth featured project makes the first four matter less.

---

## Before you finish

```bash
npm run lint
npm run build
```

Then check:

- [ ] The new file is imported **and** added to the array in `index.ts`
- [ ] `slug` is unique and the detail page loads at `/projects/<slug>`
- [ ] Every skill string matches `src/data/skills.ts`, or was deliberately added
- [ ] Image paths resolve to real files in `public/`
- [ ] No invented dates, metrics, employers, or outcomes
- [ ] Copy follows the voice rules in `master.md` (no "elevate", no
      "trusted partner", no marketing filler)
- [ ] Renders correctly at 375px — the homepage cards and `/projects` grid are
      the tightest spots
