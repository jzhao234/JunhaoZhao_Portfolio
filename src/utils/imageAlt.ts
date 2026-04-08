/**
 * Derives a human-readable alt string from a project image path.
 *
 * Example: "/projects/drugSynergy/curveFittings.png"
 *       → "Drug Synergy | Curve Fittings"
 */
export function imageAlt(src: string): string {
  const parts = src.split("/").filter(Boolean);
  // Expect: ["projects", "<folder>", "<file.ext>"]
  const folder = parts[1] ?? "";
  const file = (parts[2] ?? "").replace(/\.[^.]+$/, ""); // strip extension

  const expand = (s: string) =>
    s
      .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → words
      .replace(/[-_]/g, " ")               // kebab/snake → space
      .replace(/\b\w/g, (c) => c.toUpperCase()) // Title Case
      .trim();

  const projectLabel = expand(folder);
  const fileLabel = expand(file);

  return fileLabel ? `${projectLabel} | ${fileLabel}` : projectLabel;
}
