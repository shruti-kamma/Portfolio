---
title: LexiMind
blurb: An AI-driven web app that summarizes Indian Supreme Court judgments and answers case questions — now being redeveloped under a practicing advocate.
orientation: landscape
accent: project-3
tags: [UX Research, React, UI Design]
order: 3
context: "LexiMind is an AI-driven web app that simplifies Indian Supreme Court judgment analysis — condensing 100-page rulings into 1-2 page summaries, answering case-specific questions, and translating summaries into regional languages for lawyers, law students, and non-lawyers alike. It started as a college project with a small team; I designed and built the interfaces and flows in React, grounded in informal interviews my peers and I ran with law students about their day-to-day research workflow. It's now being redeveloped under a practicing advocate."
scope: UX research (interviews with law students), interface and flow design, and front-end development in React.
duration: A Few Weeks
role: UX Researcher, Product Designer & Front-End Developer
tools: [github]
outcomes:
  - shape: triangle-up
    label: 80% faster case prep
  - shape: circle
    label: Redeveloped under a practicing advocate
  - shape: triangle-down
    label: 100-page rulings in ~100s
process:
  - problem: Law students had no fast way to parse a 100-page ruling
    description: Ran informal interviews with law students, myself and peers, about their day-to-day case research workflow to understand where the real friction was, not just what a summarizer could technically do. Used that research to shape which flows mattered — upload, summarize, ask follow-up questions, export — in that order, rather than a feature list.
  - problem: The interface had to work for three very different users
    description: Designed and built the interfaces in React for three distinct audiences surfaced by the research — lawyers preparing cases, students researching for moot court, and non-lawyers wanting plain-language clarity — including multilingual translation and a low-bandwidth-friendly UI for users on 2 Mbps connections and budget devices.
  - problem: A college project needed to hold up as a real tool
    description: Built the summarization (100-page judgments to 1-2 pages, ~100s) and Q&A (case-specific answers in ~15s) flows end-to-end in React against a Flask/T5-small backend. The project has since moved beyond the classroom — it's currently being redeveloped under a practicing advocate.
learnings:
  - Talking to law students directly changed what we built — the priority wasn't more AI features, it was matching their actual day-to-day research order.
  - Designing for low-bandwidth, budget-device users (2 Mbps, 320px screens) is a different constraint than designing for a demo — accessibility here meant performance, not just interface.
  - A project holding up well enough to get picked up by a practicing advocate is a different kind of validation than a grade.
---
