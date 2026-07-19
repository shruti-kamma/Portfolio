---
title: Portfolio
blurb: You're looking at it!
orientation: landscape
accent: accent
tags: [Astro, Design Systems, TypeScript]
order: 5
context: "This is that portfolio — an Astro + TypeScript site designed in Figma and built entirely solo, from custom hand-drawn SVG illustration (the hero's dashed sun and mountains) through to a real usability-audit pipeline that extracts and matches screenshots directly out of PDF reports. It runs on Astro content collections with Zod-validated schemas for projects, audits, and certifications, and deploys continuously to Netlify from GitHub."
scope: Full site design and build — component architecture, custom SVG illustration, content-collection schema design, and an audit-PDF screenshot extraction pipeline.
duration: 2-3 Weeks (Ongoing)
role: Designer & Developer
tools: [figma, github]
outcomes:
  - shape: triangle-up
    label: 53 audit findings documented
  - shape: circle
    label: Figma to deploy, solo
  - shape: triangle-down
    label: 100% custom SVG illustration
process:
  - problem: The hand-drawn dashed lines looked jittery, not hand-drawn
    description: Every dashed border and divider on the site is an SVG stroke, not an image — but they were rendering as jagged, inconsistent segments instead of a clean sketch line. Traced it to shape-rendering="crispEdges" independently pixel-snapping each dash segment. Removed it and switched to a computed seamless dash period (period = length / round(length / 10)) so every dashed line on the site tiles evenly regardless of its length.
  - problem: No tool in this environment could turn the audit PDFs into images
    description: The two case-study audits needed real screenshots pulled out of their PDF reports, but the standard route (the canvas npm package) failed to build here, and no system PDF tools were available either. Found that @napi-rs/canvas ships prebuilt binaries and pairs with pdfjs-dist to render pages without a native build step, then wrote a connected-component blob detector to automatically locate each figure on a rendered page and match it to its finding — 53 findings, 38 screenshots, across two real reports.
  - problem: Content needed to stay type-safe without a CMS
    description: Projects, audits, and certifications all live as Markdown with Zod-validated frontmatter schemas via Astro content collections, not a headless CMS or hardcoded page data. Let every project/audit/certification page share the same components while still catching schema mistakes (a missing field, a wrong shape) at build time instead of silently rendering wrong.
learnings:
  - A rendering bug that looks like a design problem ("this looks hand-drawn and messy") is sometimes a one-line CSS attribute, not a redesign.
  - When the standard tool for a job doesn't work in a given environment, the fix is often a differently-packaged version of the same idea (a prebuilt-binary canvas library instead of a source-build one), not abandoning the approach.
  - Building the content schema before writing any content meant every later project/audit/cert just slotted in, instead of each page reinventing its own shape.
---
