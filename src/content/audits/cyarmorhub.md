---
title: CyArmorHub
blurb: A usability and accessibility audit of a security compliance platform.
order: 1
date: 06/03/2026
version: '10'
reportUrl: /audits/cyarmorhub-report.pdf
findings:
  - title: Absence of the Account page/ Profile page
    category: Information Architecture
  - title: Absence of Help & Support page
    category: Trust & Credibility
    wcag: WCAG 3.3.5 - Help (Level AAA)
  - title: Absence of Privacy, Security & Data Retention Policies page
    category: Legal & Compliance
    wcag: WCAG 1.3.1 - Info & Relationships (Level A)
  - title: Absence of Legal Documentation page
    category: Legal & Compliance
  - title: 'Absence of Role-Based Access Control (Admin, Analyst, Viewer, etc.)'
    category: Information Architecture
  - title: No welcome onboarding or orientation for new users of the platform
    category: Trust & Credibility
    note: The Home page is a security service itself.
    images:
      - /audits/cyarmorhub/no-onboarding.png
  - title: Compliance frameworks are exposed as raw navigation items
    category: Trust & Credibility
    note: Preferably available as a consolidated framework section, and certificates may be mentioned on the landing page as cards.
    images:
      - /audits/cyarmorhub/compliance-frameworks-nav.png
  - title: The Default State of the dashboard presents no data and an error message. No reasoning behind the selected dates
    category: Forms & Interaction
    wcag: WCAG 3.3.1 - Error Identification (Level A)
    note: The default state of forms should be empty, allowing the user to enter the data. This avoids confusion and doesn't invalidate the utility of filters and other functionalities.
    images:
      - /audits/cyarmorhub/dashboard-default-state.png
  - title: No Indication of button clicking or No Status Message / Screen Update after clicking
    category: Forms & Interaction
    wcag: WCAG 4.3.1 - Status Messages (Level A)
    images:
      - /audits/cyarmorhub/button-click-search.png
      - /audits/cyarmorhub/button-click-monitoring.png
  - title: Alternative Authentications
    category: Forms & Interaction
    wcag: WCAG 3.3.8 - Accessible Authentication (Level AA)
    note: Authentication must not rely solely on cognitive function tests or memory, and must support password managers and alternative login methods such as multifactor, identity service providers, and biometric sign-in.
    images:
      - /audits/cyarmorhub/alternative-auth-login.png
  - title: Keyboard Operability
    category: Navigation
    wcag: WCAG 2.1.1 - Keyboard (Level A)
    note: Every function and interaction on the platform can be performed using a keyboard alone, without requiring a mouse or touch input.
  - title: Horizontal Scrolling
    category: Navigation
    wcag: WCAG 1.4.10 - Reflow (Level AA)
    note: Horizontal and vertical scrolling on the same page should be avoided.
    images:
      - /audits/cyarmorhub/horizontal-scrolling-table.png
  - title: Lack of Sufficient Colour Contrast between Sidebar and Work Area
    category: Design & Layout
    wcag: WCAG 1.4.1 - Use of Colour (Level A)
  - title: Minimum Contrast between Background and Text
    category: Design & Layout
    wcag: WCAG 1.4.3 - Contrast Minimum (Level AA)
    images:
      - /audits/cyarmorhub/minimum-contrast-dashboard.png
  - title: Lack of Brand Identity and Cohesive Design. Underutilized Color palette
    category: Design & Layout
    note: A Design system ensures a consistent look and behaviour, and removes repetitive decision-making.
  - title: Redundant or Misleading Headings with Inconsistent Typographic Hierarchy
    category: Information Architecture
    images:
      - /audits/cyarmorhub/heading-security-services.png
      - /audits/cyarmorhub/heading-search.png
  - title: Redundant Sidebar Icons
    category: Information Architecture
    wcag: WCAG 2.4.6 - Headings and Labels (Level AA)
    images:
      - /audits/cyarmorhub/sidebar-icons-a.png
      - /audits/cyarmorhub/sidebar-icons-b.png
  - title: The purpose of a button needs to be shown on hover
    category: Forms & Interaction
    wcag: WCAG 4.1.4 - Name, Role, Value (Level A)
    note: "Button needs to show 'logout'."
    images:
      - /audits/cyarmorhub/button-hover-purpose.png
  - title: Single option under Expand. Redundancy in titles
    category: Information Architecture
    note: Can be consolidated into a single service.
    images:
      - /audits/cyarmorhub/single-option-expand.png
  - title: Cross-platform Compatibility is Unestablished
    category: Mobile & Responsiveness
summary:
  - While the platform demonstrates functional capability across its core features, this review surfaced a number of significant usability and accessibility concerns that, if unaddressed, are likely to hinder user adoption and confidence.
  - The Absence of Privacy & Security Policies and Legal Documentation represent critical risks given the sensitive nature of the data the platform handles, and should be prioritised independently of other remediation efforts.
  - Several findings - particularly those relating to Information Architecture and Interaction - would benefit from domain research, user research and moderated usability sessions to confirm severity and priority.
  - Overall experience reflects an absence of cohesive brand identity and a consistent design language. Establishing them before proceeding with further remodelling is recommended.
---

Informally requested by the CyArmorHub project team.
