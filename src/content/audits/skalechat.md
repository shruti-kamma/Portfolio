---
title: SkaleChat
blurb: A usability and accessibility audit of a messaging app's onboarding and core flows.
order: 2
date: 03/07/2026
version: '1'
reportUrl: /audits/skalechat-report.pdf
findings:
  - title: App icon shifts/jitters between two variations during splash/load
    category: Design & Layout
    note: Looks like an unintended asset swap or animation glitch rather than deliberate motion.
    images:
      - /audits/skalechat/app-icon-variant-a.png
      - /audits/skalechat/app-icon-variant-b.png
  - title: 'Word wrap breaks mid-word ("SkaleCha" / "t")'
    category: Design & Layout
    wcag: WCAG 1.4.10 - Reflow (Level AA)
  - title: 'Minor copy issue: "Let''s Setup your account" should read "Let''s set up your account"'
    category: Design & Layout
    note: '"Setup" is a noun; the verb form "set up" is grammatically correct here.'
  - title: No onboarding progress indicator (step count/dots)
    category: Navigation
    note: Users can't tell how many steps are ahead in account setup.
    images:
      - /audits/skalechat/no-progress-indicator.png
  - title: '"Next" CTA overlaps and obscures the phone number input field entirely.'
    category: Forms & Interaction
    wcag: 'WCAG 1.3.1 - Info and Relationships (Level A) / 2.4.7 - Focus Visible (Level AA)'
    note: The number entry field appears rendered underneath the button, leaving users no visible way to type their phone number. This blocks the task entirely, not just a cosmetic issue.
    images:
      - /audits/skalechat/phone-number-entry.png
  - title: '"Done" CTA overlaps 4 of the 6 OTP input boxes'
    category: Forms & Interaction
    wcag: 'WCAG 1.3.1 - Info and Relationships (Level A) / 2.4.7 - Focus Visible (Level AA)'
    note: Users cannot see or tap the covered OTP boxes, making manual code entry impossible on this layout.
    images:
      - /audits/skalechat/otp-verification-overlap.png
  - title: '"Done" button also overlaps "Didn''t Received yet?" link, making it unreadable/untappable'
    category: Forms & Interaction
    note: Same overlap issue removes access to the resend flow, not just the code entry.
    images:
      - /audits/skalechat/otp-verification-overlap.png
  - title: '"Resend Code" label and "Get Code on call" button text appear stacked/overlapping'
    category: Design & Layout
    note: Unclear which is a heading vs. a tappable action; visual hierarchy is broken here.
    images:
      - /audits/skalechat/otp-verification-overlap.png
  - title: 'Grammar: "Didn''t Received yet?" should read "Didn''t receive it yet?"'
    category: Design & Layout
    images:
      - /audits/skalechat/otp-verification-overlap.png
  - title: 'Capitalized mid-sentence: "Check your Messages." should read "Check your messages"'
    category: Design & Layout
    images:
      - /audits/skalechat/otp-verification-overlap.png
  - title: Attachment menu icons are small relative to available space, with an uneven 5+2 grid
    category: Forms & Interaction
    wcag: WCAG 2.5.8 - Target Size Minimum (Level AA)
    note: 'Two rows (5 then 2) leaves a lot of unused horizontal space in the second row while the icons stay compact - sizing them up would both improve tap accuracy and make better use of the layout. Consider a more evenly spaced grid (e.g., 4+3) if more items are added later.'
    images:
      - /audits/skalechat/attachment-menu-grid.png
  - title: '"Notifications" repeated as both a quick-action icon and a list item'
    category: Information Architecture
    wcag: WCAG 2.4.6 - Headings and Labels (Level AA)
    note: 'If both go to the same place, consolidate into one entry point. If they''re actually different (e.g., bell = quick mute toggle, list item = full notification settings), the icon needs a distinguishing label - right now nothing differentiates their purpose.'
    images:
      - /audits/skalechat/contact-detail-icons.png
  - title: 'Quick-action icons (call, video, bell, search) have no visible text labels'
    category: Forms & Interaction
    wcag: 'WCAG 1.1.1 - Non-text Content (Level A) / 4.1.2 - Name, Role, Value (Level A)'
    note: Inconsistent with the list section below, where every row has a text label. Icon-only controls should at minimum expose an accessible name.
    images:
      - /audits/skalechat/contact-detail-icons.png
  - title: 'Greeting text ("Hi, Shruti") uses a different font from the rest of the UI.'
    category: Design & Layout
    note: Suggests no single type system is being applied consistently - worth checking if this is a one-off style override or a broader pattern across screens.
    images:
      - /audits/skalechat/greeting-font-mismatch.png
  - title: 'Light/dark mode toggle duplicated: quick-access button on the Home header AND a full setting under Settings > Chats > Display.'
    category: Information Architecture
    wcag: WCAG 2.4.6 - Headings and Labels (Level AA)
    note: Two separate entry points for the same theme control create redundancy and potential inconsistency. If the home header toggle is meant as a convenience shortcut, that's reasonable, but it should stay in sync with the Settings entry rather than existing as a fully duplicate control - worth clarifying which is the source of truth.
    images:
      - /audits/skalechat/theme-toggle-duplicate.png
  - title: 'Three separate "add/compose" entry points visible at once (green "+" top right, "Add status" circle, blue FAB at bottom)'
    category: Information Architecture
    note: Each looks like it starts something different, but nothing distinguishes the green one's purpose at a glance.
    images:
      - /audits/skalechat/home-screen-compose-entries.png
  - title: 'Bottom icon cluster (phone, stack icon, FAB, chat bubble, avatar) has no labels.'
    category: Navigation
    wcag: WCAG 2.4.6 - Headings and Labels (Level AA)
    images:
      - /audits/skalechat/bottom-icon-cluster.png
  - title: Icon rendering quality - some icons pixelated, others crisp.
    category: Design & Layout
    note: The phone icon appears to be a proper vector/SVG asset, while the brand "S" icons look like raster images scaled up without adequate resolution for the display density. Likely fix - export these as vector assets or provide proper @2x/@3x raster resolutions so they scale cleanly across device pixel densities.
    images:
      - /audits/skalechat/icon-rendering-quality.png
  - title: Uneven gap between avatar image and its surrounding ring/outline.
    category: Design & Layout
    note: The avatar appears to float inside the ring rather than being sized/cropped to sit flush against it - likely an asset sizing or padding mismatch in the avatar component, giving it an unfinished look.
    images:
      - /audits/skalechat/avatar-ring-gap.png
  - title: 'Archive folder icon is present, but there''s no visible mechanism to actually archive a chat.'
    category: Information Architecture
    note: 'The archive icon (top right of the chat list) implies chats can be moved there, but there''s no swipe gesture, long-press menu, or per-chat control shown to perform that action - the feature is discoverable but not actionable.'
    images:
      - /audits/skalechat/archive-icon-no-action.png
  - title: 'Empty state says "Start a voice or video call from any chat", but this screen offers no contacts list or CTA to initiate one'
    category: Navigation
    note: 'Users landing on the Calls tab with no history hit a dead end - the instruction points them elsewhere ("any chat") instead of letting them act from here, which is inconsistent with the tab''s stated purpose.'
    images:
      - /audits/skalechat/calls-tab-empty-state.png
  - title: 'No "New Call" entry point on the Calls tab, unlike the Chats tab''s compose FAB'
    category: Information Architecture
    note: The bottom FAB stays the same generic compose icon regardless of tab - Calls would benefit from its own equivalent action rather than relying on users to remember to back out to a chat.
    images:
      - /audits/skalechat/calls-tab-empty-state.png
  - title: 'Label "Allow photo access" reads like a system permission prompt, not a menu action (inconsistent with sibling label "Camera")'
    category: Design & Layout
    note: 'If this is meant to be "Gallery"/"Photos" until permission is granted, consider a consistent label with a secondary permission cue instead, so the grid item naming stays consistent regardless of permission state.'
    images:
      - /audits/skalechat/add-status-menu.png
  - title: Circular icon targets sit very close together with minimal gap between them
    category: Forms & Interaction
    note: Even if each circle individually meets minimum target size, tight spacing between adjacent targets increases the risk of mis-taps.
    images:
      - /audits/skalechat/add-status-menu.png
  - title: No resize handles or pinch-to-scale control for text/emoji overlays once placed.
    category: Forms & Interaction
    note: 'The emoji and "Navadeep" text overlay show no visible handles indicating they can be resized or rotated - even if the underlying gesture exists, there''s no affordance communicating it''s possible.'
    images:
      - /audits/skalechat/status-editor-emoji.png
      - /audits/skalechat/status-editor-text.png
  - title: Placed text cannot be re-opened/edited afterward
    category: Forms & Interaction
    note: 'Once text like "Navadeep" is placed on the status, there''s no tap-to-edit interaction shown - users must delete and retype rather than adjust wording, sizing, or position.'
    images:
      - /audits/skalechat/status-editor-text.png
  - title: Dialog boxes use the native system instead of a custom-branded one.
    category: Design & Layout
    note: Breaks visual continuity - the teal system buttons and generic styling stand out against the app's established purple/lime design language.
    images:
      - /audits/skalechat/native-dialog-delete.png
  - title: '"Chat lock" label implies a toggle, but it''s actually a navigable list of locked chats.'
    category: Information Architecture
    wcag: WCAG 2.4.6 - Headings and Labels (Level AA)
    note: 'Renaming to "Locked Chats" or "Chat Locker" would better match what''s actually inside and disambiguate it.'
    images:
      - /audits/skalechat/privacy-chat-lock.png
  - title: '"No contacts match" message is shown even though contacts integration isn''t connected, misrepresenting the actual system state.'
    category: Forms & Interaction
    wcag: 'WCAG 3.3.1 - Error Identification (Level A) / 4.1.3 - Status Messages (Level AA)'
    note: The empty state implies the search ran against real contact data and found nothing, when the actual issue is missing permission/connection.
    images:
      - /audits/skalechat/invite-friend-no-contacts.png
  - title: User Policy page is entirely blank - no content rendered.
    category: Legal & Compliance
    wcag: WCAG 1.3.1 - Info and Relationships (Level A)
    note: Given SkaleChat handles personal messages, contacts, and status content, an absent or unpopulated policy page is a critical gap.
    images:
      - /audits/skalechat/user-policy-blank.png
  - title: '"Contact Us" email routes to a mismatched address instead of a SkaleChat-branded one.'
    category: Trust & Credibility
    wcag: WCAG 1.3.1 - Info and Relationships (Level A)
    images:
      - /audits/skalechat/contact-us-email-mismatch.png
  - title: '"Terms and Privacy Policy" link leads to a domain that returns "Page Not Found"'
    category: Legal & Compliance
    wcag: WCAG 1.3.1 - Info and Relationships (Level A)
    note: Sending a support request to a mismatched domain name undermines credibility.
    images:
      - /audits/skalechat/terms-link-page-not-found.png
  - title: The linked domain itself is an undeveloped placeholder, still showing a website-builder promo banner
    category: Trust & Credibility
    images:
      - /audits/skalechat/terms-link-page-not-found.png
summary:
  - While SkaleChat demonstrates a functional core chat experience, this review surfaced several usability and accessibility concerns that would benefit from remediation before further rollout.
  - The most critical issues are the CTA-overlap bugs on the Phone Number and OTP verification screens, which block core onboarding tasks outright - these should be treated as blocking defects rather than polish items, given they sit at the very start of the user journey.
  - The Legal & Compliance gaps compound one another - the in-app "User Policy" page renders blank, and the "Terms and Privacy Policy" / "Contact Us" links under Help both route to a mismatched, undeveloped external domain. Given the sensitive nature of personal messages and contacts this app handles, these should be prioritised independently and with urgency.
  - Several findings point to an absence of a consistent design system - mismatched fonts, pixelated icons alongside vector ones, uneven/asymmetric grids, disproportionate whitespace, and a native system dialog breaking from the app's branded visual language.
  - A few findings - the Calls tab dead-end, and the contacts "no results" state misrepresenting a missing integration - reflect incomplete or in-progress features rather than design flaws, and should be validated against the current build/roadmap before being treated as defects.
---

Informally requested by the SkaleChat project team.
