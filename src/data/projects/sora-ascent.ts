import type { ProjectTypes } from "./types";

const soraAscent: ProjectTypes = {
  id: "SoraAscent",
  importance: 2,
  featured: false,
  slug: "sora-ascent",
  images: [
    "/projects/soraAscent/home.png",
    "/projects/soraAscent/services.png",
    "/projects/soraAscent/pricing.png",
    "/projects/soraAscent/contact.png",
  ],
  name: "Sora Ascent",
  cardDescription:
    "Founder-built lead-gen website for a local web design service. Built with Next.js + Tailwind and a Resend-powered contact form. Achieved Lighthouse scores of 99 Performance and 100 in Accessibility, Best Practices, and SEO. Live at soraascent.com.",
  features: [
    "Mobile-first, conversion-focused marketing site for local businesses",
    "Service packaging and pricing presentation for quick self-qualification",
    "Contact form that emails leads via Resend (reliable production delivery)",
    "SEO-ready foundations (metadata, sitemap.xml, robots.txt, clean headings)",
    "Performance + accessibility tuned UI (99 Perf / 100 A11y / 100 BP / 100 SEO)",
    "Deployed with custom domain (soraascent.com)",
  ],
  overview: `Sora Ascent is my founder-built website for a local web design service. I designed it to function as both a portfolio and an inbound lead funnel, prioritizing clear offer communication, simple navigation, and a frictionless path to contact.

    The site is built with Next.js and Tailwind CSS. Lead capture is handled through a production contact form that sends submissions directly to my email via Resend. I focused heavily on performance, accessibility, and SEO fundamentals, achieving Lighthouse scores of 99 Performance and 100 in Accessibility, Best Practices, and SEO. The site is live at soraascent.com.`,
  problem: `Local business sites often fail to communicate the offer quickly, load slowly on mobile, and don't provide a clear next step for visitors. For a service business, the website needs to build trust fast, explain what's included, and convert visitors into inquiries without relying on vague or risky claims.`,
  solution: `I built a conversion-first marketing site with clear service packaging and a simple inquiry path. I implemented SEO fundamentals (page metadata, sitemap, robots, semantic headings) and optimized for speed and accessibility. For lead capture, I integrated a Resend-backed contact workflow that reliably delivers submissions to email, supported by "what happens next" copy to reduce friction and set expectations.`,
  architecture: [
    "Next.js frontend for routing, pages, and reusable UI sections",
    "Tailwind CSS for responsive design and consistent styling",
    "Resend integration for contact form email delivery",
    "SEO setup: metadata, sitemap.xml, robots.txt, canonical/redirect strategy",
    "Deployed with custom domain (soraascent.com)",
  ],
  challenges: [
    "Writing concise copy that communicates the offer clearly to non-technical business owners",
    "Balancing credibility and clarity without making unverifiable promises",
    "Designing a clean layout that stays conversion-focused on mobile",
    "Implementing reliable form delivery and a smooth post-submit experience",
  ],
  improvements: [
    "Add more case studies with screenshots and measurable outcomes",
    "Add lightweight analytics to track submissions and CTA clicks",
    "Build industry-specific landing pages for local SEO",
    "Add a short automated intake flow to qualify leads before calls",
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Resend",
    "SEO",
    "Accessibility",
    "Performance Optimization",
    "Deployment",
    "Copywriting",
  ],
  demoLink: "https:soraascent.com",
};

export default soraAscent;
