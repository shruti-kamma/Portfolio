---
title: Charrish Travels
blurb: A mobile-first website for a Hyderabad travel agency, with a self-service admin for publishing tour itineraries and moderating customer reviews.
orientation: landscape
accent: project-3
category: freelance
tags: [Astro, Tailwind CSS, Netlify + Supabase, Web Design & Build]
order: 2
context: |
  Charrish Travels is a Hyderabad travel agency whose core offering is custom-built itineraries rather than fixed packages: domestic tours, temple and pilgrimage circuits, and international trips, plus transportation, guides and visa assistance.

  The site is both a shopfront and a working tool. Alongside the public pages, it has an admin area where the agency publishes its own tours and approves customer reviews without touching code.

  I was the sole designer and developer, covering the brand-led visual design, the Astro front end, content modelling, and the serverless back end.
scope: Website
duration: 2 Months
role: End-to-End Designer & Developer
liveUrl: https://charrishtravels.com
tools: [astro, tailwind, netlify, supabase, claude, github]
outcomes:
  - shape: circle
    label: Paste-to-publish itinerary import
  - shape: circle
    label: 6 serverless functions shipped
  - shape: circle
    label: 0 credentials exposed publicly
process:
  - problem: A brochure, not a booking engine
    description: |
      Most travel sites lead with a booking engine, but that assumes a standardised product. Charrish's product is a conversation, with every itinerary built from scratch, so a checkout would have meant inventing fixed packages just to have something to sell.

      I shipped no booking flow at all and made the site hand off to a person instead:
      - WhatsApp calls-to-action throughout, plus a floating call-and-WhatsApp pair on every page
      - Prices shown as "On request" rather than invented
      - A per-tour enquiry button that pre-fills the tour's name, so the conversation opens with context

      A site with no prices and no "Book now" can read as unfinished, so the copy carries that weight. The About page makes customisation the pitch, and empty categories say "Nothing on the shelf yet. Which is rather the point" instead of apologising.
  - problem: Long itineraries, non-technical publisher
    description: |
      The client's tours arrive as long, semi-structured documents with day headings, routes, distances, temple visits and overnight stays. Hand-typing those into 34 fields per tour wasn't realistic for a non-technical user.

      So I built an import tool at /admin/import. You paste in the raw document, every field fills in live with a preview, and publishing commits a new tour file straight to GitHub.

      The itinerary text itself stays free-form, and the tour page turns its recurring patterns (route legs, "Distance:" lines, temple visits, overnight stays) into styled elements at build time.
  - problem: Public reviews without public access
    description: |
      Customers needed to submit reviews with photos, but giving the public any database or CMS access was off the table. I built a four-stage pipeline:
      - A public form sends the review to a Netlify Function
      - The function saves it to Supabase as pending
      - The agency approves or rejects it from a login-protected dashboard
      - Approved reviews appear on /testimonials

      The database key never leaves the server, and photos are checked for type and size before they're uploaded.
learnings:
  - When a visual looks wrong to me, it's worth treating as a bug report. My unease about the 60-temple India map turned out to be real coordinate errors every time I checked properly.
  - Designing from the client's real 12-day Tamil Nadu itinerary, not placeholder text, is what showed the page needed a trip-facts strip, a day-by-day timeline, and distinct temple-visit and overnight-stay treatments.
  - Keeping every section a self-contained component made reversing a decision cost one line instead of an afternoon, which suited a client who decides by looking rather than discussing.
---
