import type { ProjectTypes } from "./types";

const bigBrain: ProjectTypes = {
  id: "BigBrain",
  importance: 2,
  featured: true,
  slug: "big-brain",
  images: [
    "/projects/bigBrain/assistant.png",
    "/projects/bigBrain/cli.png",
  ],
  name: "big-brain",
  cardDescription:
    "Open-source MCP server and CLI that gives every AI assistant one shared memory: your notes, projects, and tasks as plain markdown you own. Published on npm and listed in the official MCP Registry, with 23 tools, local hybrid search, and 287 tests.",
  features: [
    "MCP server with 23 tools: search, capture, daily logs, projects, tasks, the link graph, related notes, and a vault health check",
    "One-command setup (npx @jzhao234/big-brain setup) that creates or adopts a vault and connects Claude Code and Codex",
    "Works on an existing Obsidian vault as is, with no migration and no writes until asked",
    "Full-text search with title boosting, wikilink backlinks, tags, and frontmatter filters, with no API keys and fully offline",
    "Optional on-device semantic search fused with full-text results by Reciprocal Rank Fusion",
    "Optional git auto-commit of only the files each write touched, with background push to keep other machines in sync",
    "Authenticated Streamable HTTP endpoint for remote MCP clients",
    "CLI and Claude Code / Codex skills (/brain, /capture, /weekly) for working with the vault by hand",
  ],
  overview: `big-brain is an open-source TypeScript tool that turns a folder of markdown into a memory every AI assistant can share. Claude Code, Claude Desktop, Cursor, Codex, or any other MCP client can search the vault, read it, capture into it, and keep projects and tasks current, so switching models does not mean losing context.

    It ships as an npm package (@jzhao234/big-brain) with an MCP server, a CLI, and agent skills, and is listed in the official MCP Registry. I use it every day as my own second brain.`,
  problem: `Each AI tool keeps its own private memory of you, and none of them share it. Moving between Claude, ChatGPT, and coding agents means re-explaining the same projects, decisions, and preferences, and the memory each one builds lives in a format you cannot read, edit, or take with you.`,
  solution: `I built a small core library over a plain markdown vault and exposed it three ways: an MCP server for AI clients, a CLI for people, and skills that teach coding agents when to load context and when to save it. Retrieval is deterministic first (fuzzy full-text search, backlinks, tags, frontmatter) so it works offline with no API keys, and local embeddings are an opt-in add-on rather than a requirement.

    Because an AI is writing into someone's personal notes, the write path is defensive: writes are atomic and locked per note, never land inside code blocks or frontmatter, refuse to rewrite frontmatter they cannot parse, and refuse any path that resolves outside the vault.`,
  architecture: [
    "TypeScript core library that reads and writes the markdown vault",
    "MCP server over stdio, plus a Streamable HTTP transport behind a bearer token",
    "CLI with --json output so the vault is scriptable from any tool",
    "Optional local embeddings via @huggingface/transformers, merged with full-text results by Reciprocal Rank Fusion",
    "Vitest suite of 287 tests and a CI job that installs the packed npm tarball before release",
  ],
  challenges: [
    "Letting an AI edit personal notes without corrupting them: atomic per-note locked writes, line-ending preservation, and vault-containment checks",
    "Keeping the default install free of native dependencies by moving semantic search into an optional add-on",
    "Making setup a single command across Claude Code, Codex, Claude Desktop, and Cursor, which each configure MCP differently",
    "Reading existing Obsidian vaults without forcing a folder layout, through an optional folder-mapping config",
  ],
  improvements: [
    "OAuth on the remote endpoint so browser connectors like claude.ai can connect directly",
    "Stable task ids for tasks with duplicate text",
  ],
  skills: ["TypeScript", "Node.js", "MCP", "Vitest"],
  githubLink: "https://github.com/jzhao234/big-brain",
};

export default bigBrain;
