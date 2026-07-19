---
title: Git Analyser
blurb: An AI-powered tool for chatting with any GitHub repository in natural language — indexing commits, contributors, and code to answer questions like an LLM.
orientation: landscape
accent: project-2
tags: [UI Design, Design Systems, React]
order: 2
context: "Git Analyser lets developers \"talk\" to any GitHub repository in natural language — asking about commits, contributors, branches, and merge conflicts — powered by Groq (Llama 3.1) and Voyage AI over a Pinecone vector index, with a Node/Express backend and GitHub OAuth. I'm currently redesigning its React frontend around GitHub's own Primer design system, adding a proper dark mode and fixing the color/border token inconsistencies left over from the app's early build-fast phase."
scope: Front-end redesign using GitHub's Primer design system, including dark mode and design-token cleanup.
duration: 3 Weeks (Ongoing)
role: UI Designer & Front-End Developer
tools: [github]
outcomes:
  - shape: triangle-up
    label: 1,311+ lines across 30 files
  - shape: circle
    label: Primer design tokens adopted
  - shape: triangle-down
    label: Dark mode shipped
process:
  - problem: The UI predated any design system
    description: The frontend had been built fast to prove the product worked — functional, but with inconsistent spacing, colors, and borders accumulated across rapid iteration. Rebuilt it around GitHub's Primer design system, replacing ad hoc styles with Primer's token set for color, spacing, and typography so the UI would read as intentional rather than assembled.
  - problem: No dark mode, despite being a dev tool
    description: Added a proper dark mode — the default expectation for a tool developers will have open next to their editor and terminal all day — built on Primer's own light/dark token pairs rather than a bolted-on theme toggle.
  - problem: Token adoption surfaced its own bugs
    description: Swapping in a new token system exposed border and color inconsistencies the old ad hoc styles had been masking, plus some Docker dev-environment and backend connection-pool issues along the way. Fixed them as part of the same pass rather than leaving them for later — a 1,311-line, 30-file change now open as a pull request back into main.
learnings:
  - Adopting a design system isn't just visual — swapping in Primer's tokens surfaced border/color bugs the old styles had been quietly covering up.
  - A dev tool without dark mode is an unfinished dev tool — it wasn't optional, it was the baseline.
  - The redesign touched Docker and backend pool config too — a front-end pass on a real codebase rarely stays contained to the front end.
---
