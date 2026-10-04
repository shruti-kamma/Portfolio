---
title: Blackbox
blurb: An accessibility-first platform for persons with disabilities, pairing an inclusive hiring portal with a public index that ranks Indian companies on disability inclusion.
orientation: landscape
accent: project-4
category: freelance
tags: [Next.js, AI/LLM Pipeline, Accessibility, Data Visualization]
order: 1
context: |
  Blackbox is a platform for persons with disabilities (PwDs), built for the Blackbox Global Foundation. At its core is the Blackbox INDEX™, a public ranking of Indian companies and universities by how accessible and inclusive they are toward employees and students with disabilities.

  Scores come from companies' own regulatory filings (BRSR sustainability reports), not self-reported surveys, so the index rests on evidence instead of PR.

  I handled the research, the scoring method (developed with the client), the AI data pipeline, and the UI of the leaderboards and organisation dashboards, plus the other index pages and the pages shared across the site. Many of the people using the platform are disabled themselves, so accessibility was a hard requirement from day one, enforced in the build rather than added at the end.
scope: Website, AI data pipeline, and scoring framework
duration: Ongoing (since July 2026)
role: Product Designer & Full-Stack Developer
liveUrl: https://blackbox.org.in
tools: [nextjs, typescript, tailwind, python, claude, github]
outcomes:
  - shape: circle
    label: 1,239 BRSR filings crawled
  - shape: circle
    label: 10-metric scoring framework
  - shape: circle
    label: ~60% cost saving via model choice
process:
  - problem: Turning long regulatory PDFs into data, cheaply
    description: |
      BRSR reports run 60 to 150 pages, and sending whole reports to an LLM would have been costly and noisy.

      I designed a triage-then-extract pipeline instead. A local scan, using keywords plus the BRSR section headers for Principles 3 and 5, picks out the relevant pages, and only those pages go to the model.

      The model returns structured JSON, and every field has to carry an evidence quote with its original page number, so each score can be traced back to the filing.
  - problem: Being honest about what companies don't disclose
    description: |
      What matters most to a disabled job seeker is often what companies keep quiet about: whether PwD employees stay (retention), whether any reach senior roles (leadership), and how they feel about their workplace (employee feedback). BRSR filings almost never report these. Averaging them in as low scores pulled every company down by the same amount, which hid real differences and implied the gaps had been measured.

      I made three design changes:
      - Those three metrics appear on every dashboard as "Not yet disclosed" and stay out of the overall score until the company claims its profile and submits the data, which gives companies a reason to be open
      - The PwD headcount panel is a ranked list of real numbers, not a bar chart. Several companies report employing exactly zero disabled people, and a bar chart would make that zero easy to miss
      - A "Weakest disclosure areas" panel shows which inclusion practices are under-reported most across the whole index, turning missing data into a visible accountability gap
  - problem: Dashboards usable by the people they're for
    description: |
      The INDEX™ shows scores through radar charts, heatmaps and distribution panels, formats that usually shut out screen-reader and low-vision users, who are exactly the community the product serves. I designed every visual to have an accessible equivalent:
      - Each chart has a screen-reader data table behind it, such as the radar chart's hidden table
      - Leaderboards use real semantic tables
      - Scores are always shown as text and numbers, never by colour alone
      - Colours meet WCAG AA contrast, and motion was stripped from the animated hero

      Accessibility lint rules are set to fail the build, so a regression can't ship.
learnings:
  - Cutting the input down before calling the LLM made extraction cheaper and auditable, and a real test overturned an assumption. Annual reports had fewer relevant pages than BRSR filings (11 of 362).
  - In disability inclusion, missing data is a finding in its own right. Label an undisclosed metric clearly, keep it out of a misleading score, and show a reported zero plainly instead of losing it in a chart.
  - Accessibility holds up when the build enforces it, not a checklist. With the accessibility lint rules set to fail the build, a regression can't quietly ship to users who depend on it.
---
