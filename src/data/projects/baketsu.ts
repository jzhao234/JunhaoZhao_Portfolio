import type { ProjectTypes } from "./types";

const baketsu: ProjectTypes = {
  id: "Baketsu",
  importance: 2,
  featured: true,
  slug: "baketsu-cloud-storage",
  images: [
    "/projects/baketsu/homePage.png",
    "/projects/baketsu/dashboard.png",
    "/projects/baketsu/filesPage.png",
    "/projects/baketsu/filePreview.png",
  ],
  name: "Baketsu",
  cardDescription:
    "Team-built cloud storage platform where I focused on backend architecture, authenticated upload workflows, AWS S3 integration, and SQLite-based file metadata and per-user storage tracking.",
  features: [
    "Created the original FastAPI backend architecture using core, models, routes, schemas, and services",
    "Reworked the AWS upload flow so files passed through the backend for verification and metadata persistence",
    "Stored file metadata in SQLite and tracked which user uploaded each file",
    "Tracked file sizes and aggregated per-user storage usage for dashboard analytics",
    "Built endpoints for upload workflows, image display, and storage usage retrieval",
    "Implemented email-based account verification during registration",
  ],
  overview: `Baketsu is a team capstone project centered around cloud file storage, authenticated uploads, and storage visibility. My strongest contributions were on the backend: I created the initial FastAPI architecture, built core API functionality, routed uploads through the backend instead of directly from the frontend, and implemented the database models used to track uploaded files and per-user storage usage.

The platform stores files in AWS S3 while persisting metadata in SQLite so uploads are not just stored, but also traceable and measurable. That backend foundation made it possible to support protected upload flows, user-specific file retrieval, dashboard usage views, and pricing-related storage breakdowns.

Although I contributed across the stack, Baketsu is one of my strongest backend projects because it pushed me to think about project structure, cloud workflows, database design, and how product features depend on reliable backend state.`,
  problem: `A cloud storage product needs more than a file picker and a bucket. Uploads have to be tied to authenticated users, metadata has to stay consistent with stored files, and the system needs enough structure to support features like usage dashboards, storage totals, and account verification. Without that backend foundation, uploads become hard to trust, hard to track, and difficult to build product features on top of.`,
  solution: `I helped solve this by designing the original FastAPI backend structure and moving the AWS upload flow through the backend instead of the frontend. That allowed the application to verify users, persist upload metadata in SQLite, and associate uploaded files with the correct account. I also implemented backend models and endpoints that supported storage usage retrieval, file ownership tracking, and email-based verification, giving the project a much more realistic and maintainable foundation.`,
  architecture: [
    "Next.js frontend for authentication flows, upload UI, dashboard views, and file browsing",
    "FastAPI backend organized into core, models, routes, schemas, and services for maintainability",
    "AWS S3 for cloud file storage",
    "SQLite for file metadata, file ownership, and per-user storage tracking",
    "JWT-based authentication and protected routes for authenticated user access",
    "Email verification flow using secure token generation and server-side email delivery",
  ],
  challenges: [
    "Designing a backend structure that stayed readable and scalable as the project grew",
    "Keeping uploaded files in S3 consistent with database metadata and user ownership records",
    "Routing uploads through the backend so verification and persistence happened in one reliable flow",
    "Turning raw upload data into useful per-user storage metrics for dashboard views",
  ],
  improvements: [
    "Add stronger folder and tagging support for file organization",
    "Expand storage analytics with file-type breakdowns and time-based usage trends",
    "Improve upload resilience with retry handling and chunked uploads for large files",
    "Add file sharing and permission controls for collaborative access",
    "Move from SQLite to a more scalable production database for larger multi-user workloads",
  ],
  skills: [
    "Python",
    "FastAPI",
    "AWS S3",
    "SQLite",
    "JWT",
    "Bcrypt",
    "Next.js",
    "Tailwind CSS",
  ],
  githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
};

export default baketsu;