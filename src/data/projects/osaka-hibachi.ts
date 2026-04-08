import type { ProjectTypes } from "./types";

const osakaHibachi: ProjectTypes = {
  id: "OsakaHibachiExpress",
  importance: 2,
  featured: false,
  slug: "osaka-hibachi-express",
  images: [
    "/projects/osakaHibachi/home.png",
    "/projects/osakaHibachi/menu.png",
    "/projects/osakaHibachi/location.png",
    "/projects/osakaHibachi/mobile.png",
  ],
  name: "Osaka Hibachi Express",
  cardDescription:
    "Paid client website built with Next.js. Mobile-first restaurant site with clear menu/contact flow and strong Lighthouse results (95 Performance, 93 Accessibility, 100 SEO).",
  features: [
    "Mobile-first layout optimized for customers coming from search",
    "Clear navigation to Menu, Location/Hours, and Contact",
    "Menu section designed for quick scanning and readability",
    "Performance-focused images and lightweight UI",
    "SEO-ready structure (metadata, headings, indexable pages)",
    "Production deployment with custom domain (osakahibachiexpress.com)",
    "Accessibility-focused semantic structure and readable typography",
  ],
  overview: `Osaka Hibachi Express is a paid client website built with Next.js for a local restaurant. The goal was a fast, clean site that makes it easy for customers to find the menu, hours, location, and contact details on mobile.

    I focused on information hierarchy and page speed so visitors can take action quickly (view the menu, call, get directions). The live site (osakahibachiexpress.com) achieved Lighthouse scores of 95 Performance, 93 Accessibility, 69 Best Practices, and 100 SEO.`,
  problem: `Restaurant visitors usually arrive from mobile search and need answers immediately: menu, hours, location, and how to contact or order. If those details are buried, slow to load, or hard to read on mobile, users bounce and the business loses customers.`,
  solution: `I built a mobile-first Next.js site with a clear conversion path and high-visibility calls to action. I structured the content so key info is reachable within one or two scrolls, optimized assets for performance, and ensured the site follows SEO-friendly and accessible page structure. The result is a production-ready client site that loads quickly and is easy to maintain.`,
  architecture: [
    "Next.js frontend with reusable sections/components",
    "Tailwind CSS for responsive design and consistent styling",
    "SEO foundations (metadata, headings, indexable routes)",
    "Deployment to production with custom domain + DNS configuration",
  ],
  challenges: [
    "Designing a layout that prioritizes menu/location info on mobile",
    "Keeping pages lightweight while still looking polished",
    "Ensuring accessibility and readable typography across devices",
    "Improving Lighthouse Best Practices by addressing audit recommendations",
  ],
  improvements: [
    "Add structured data (Restaurant schema) for richer search results",
    "Add analytics to track calls, direction clicks, and menu engagement",
    "Add a photo gallery and promotions/announcements section",
    "Continue improving Best Practices score by resolving remaining audit items",
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SEO",
    "Accessibility",
    "Performance Optimization",
    "Client Communication",
    "Deployment",
  ],
  demoLink: "https:osakahibachiexpress.com",
};

export default osakaHibachi;
