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
    "Cloud file storage platform with JWT authentication, bcrypt password hashing, AWS S3 integration, and a SQLite database tracking per-user file metadata and folder structure.",
  features: [
    "Authenticated file uploads with upload verification",
    "Store files in AWS S3 and track upload metadata in SQLite",
    "Track per-file size and aggregate per-user storage usage",
    "Dashboard showing storage usage and pricing breakdowns",
    "Backend structured into core, models, routes, schemas, and services",
    "API endpoints for upload workflows and usage retrieval",
  ],
  overview: `Baketsu is a cloud storage web application built to make file uploads reliable, traceable, and easy to understand from a user perspective. Users can upload files through a web interface, store them in AWS S3, and view storage usage metrics in a dashboard.

        The backend is built with FastAPI and Python, with a clean architecture (core/models/routes/schemas/services) to keep the codebase maintainable as features expand. Uploaded files are tracked in a SQLite database, including per-file size data, which is then aggregated into per-user usage metrics to power storage and pricing breakdown views.

        By combining a structured backend, verified upload workflows, and clear usage analytics, Baketsu turns raw file storage into something users can manage and interpret quickly.`,
  problem: `Building a cloud upload system is more than "send a file." You need a secure workflow that verifies users, stores files reliably, tracks metadata consistently, and turns file activity into useful product information like per-user storage usage and pricing. Without this structure, uploads become hard to debug, usage is inaccurate, and dashboards become unreliable.`,
  solution: `To solve this, I built an end-to-end upload pipeline that stores files in AWS S3 while writing consistent metadata to SQLite. I designed the FastAPI backend using a service-based structure (core/models/routes/schemas/services) so upload logic, database logic, and API routing stay separated and scalable. I also implemented database models that track file size at upload time and aggregate per-user usage, enabling a dashboard that clearly shows storage totals and pricing breakdowns.`,
  architecture: [
    "Next.js frontend for upload UX and dashboard views",
    "FastAPI backend with structured organization (core/models/routes/schemas/services)",
    "AWS S3 for cloud file storage",
    "SQLite for file metadata, size tracking, and per-user aggregation",
    "Usage + pricing breakdown logic powering dashboard components",
  ],
  challenges: [
    "Designing a backend architecture that stays scalable and readable as features grow",
    "Keeping S3 upload state consistent with database records and user sessions",
    "Accurately tracking file sizes and aggregating per-user usage for analytics",
    "Surfacing meaningful upload errors and status to the frontend",
  ],
  improvements: [
    "Add folders/tags and better file organization",
    "Add sharing/permissions for collaborative file access",
    "Improve upload resilience (retries, chunked uploads for large files)",
    "Add audit logs and event history for uploads and account activity",
    "Expand analytics (file types, time-based trends, per-project usage)",
  ],
  skills: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "SQLite", "Bcrypt", "AWS Amazon S3"],
  githubLink: "https://github.com/jzhao234/Baketsu-CloudStorage",
};

export default baketsu;
