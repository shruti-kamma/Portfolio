---
title: Vivaha
blurb: A trust-network matrimonial app — matches are discoverable only through real social connections, not anonymous search.
orientation: portrait
accent: project-1
tags: [React Native, Full-Stack, Mobile]
order: 4
context: "Vivaha is a trust-network matrimonial platform for Indian families — matches are discoverable only through real social trust (direct connections, up to 3-hop mutual-contact chains, and community/family \"circles\") rather than the open, anonymous search of BharatMatrimony, Shaadi.com, or Jeevansathi. It's built for people who want matchmaking to feel like how introductions actually happen offline — vouched for by someone you trust — not stranger-search with a verification badge bolted on. I worked across the full stack: React Native (Expo) on the client, a Node/Hono API, Postgres via Drizzle, and a Redis/BullMQ-backed discovery engine."
scope: Matching feed, filter system, shared component library, Connections screen, and the profile privacy model.
duration: 1 Month (Ongoing)
role: Product Designer & Full-Stack Developer
tools: [github]
outcomes:
  - shape: triangle-up
    label: 1,065+ lines rewriting Discover
  - shape: circle
    label: 8 PRs reviewed & merged
  - shape: triangle-down
    label: 3 screens unified under one avatar system
process:
  - problem: Matches needed to show trust, not just faces
    description: Rewrote the Discover screen from scratch — a vertical feed of profile cards paired with a custom HopCircle component that visualizes trust distance at a glance (red for a direct connection, saffron for a 2- or 3-hop mutual chain), and a ChainModal that shows the actual people connecting you to a match. Built the filter system alongside it, a bottom-sheet UI for gender/age/community/city with active-filter chip pills and a badge count, persisted per account+profile so switching between profiles you manage keeps each one's own saved filters. Along the way, found and fixed a real data bug — the connections API was joining the wrong table, silently nulling every photo.
  - problem: Every screen was reinventing the same UI
    description: Built ProfileAvatar and ProfilePhoto, a single avatar implementation (hash-based initials color as a fallback) reused across Discover, ViewProfile, and Connections instead of three separate one-offs, and extended the shared Header with leftElement/centerElement slots so Discover's profile switcher and filter icon could slot in without forking the component. Also chased down the platform-level bugs that don't show up in a demo but block real use — a Windows-specific Metro bundler symlink issue that broke local dev entirely, and bottom-sheet modals that weren't extending behind the Android status bar/nav bar.
  - problem: Profile data needed a clear public/private boundary
    description: Authored the spec for a two-tier profile visibility model, defining which fields are always public versus gated behind a connection or accepted interest, then reorganized ViewProfileScreen to match it, added diet options (Pescatarian/Jain/Halal), and fixed a crash-causing unhandled promise rejection in the contacts-import flow. Also cleaned up along the way — added search to Connections, fixed a crash specific to circle-sourced profiles, and pulled a half-built Circles tab rather than ship it broken.
learnings:
  - A custom safe-area/keyboard-height hook beat the third-party one — worth building once useSheetNavBar proved unreliable.
  - The fixes nobody sees in a demo (a Windows Metro symlink bug, Android status-bar/modal quirks) are often what's actually blocking the team.
  - Writing the visibility-model spec before touching ViewProfileScreen meant the UI rewrite had rules to build against instead of guessing as I went.
---
