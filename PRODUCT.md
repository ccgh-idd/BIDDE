# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Current members check the next meeting: date, place, training topic and speakers. Prospective members, researchers in Berlin working on infectious disease dynamics, decide whether to join and contact the secretariat. Invited speakers check the format and audience before agreeing to present. Funders and partners (the Einstein Foundation, the Berlin University Alliance and member institutions) check that the network is active.

## Product Purpose

The website of the Berlin Infectious Disease Dynamics Expertise network (B-IDDE). It has two equally weighted jobs: tell members and speakers when and where the next meetings are, and show newcomers what the network is and how to join.

## Positioning

A city-wide, interdisciplinary network of more than 60 researchers from universities, research institutes and public health organisations across Berlin, covering epidemiological modelling, data science, phylodynamics and policy-relevant outbreak analysis. Its core activity is a monthly meeting: a training session on a research skill followed by a seminar from members or invited speakers. Attendance is ECTS accredited. The secretariat is hosted by the IDD group at the Charité Center for Global Health.

## Operating Context

Members return before each monthly meeting; newcomers arrive via colleagues, the IDD site or Charité pages. Event data is edited by the secretariat in `events.js` (month, year, training, seminar talks, place), and the page sorts it into next meeting, later meetings and past meetings automatically.

## Capabilities and Constraints

- Static HTML (inline JS), `styles.css` and `events.js` on GitHub Pages; no build step.
- Sections: hero, about, events (next meeting, later meetings), past meetings, contact, full-width network photo band above the footer (`Pics/Hero-band.webp`).
- Joining is by contacting the secretariat; there is no sign-up form. The secretariat also sends calendar invitations for meetings on request.
- Meetings are usually on the second Tuesday of the month; the page uses that date unless an event in `events.js` has its own `"date"` field. Times and rooms are not published.
- GDPR: no third-party fonts or tracking; any web font must be self-hosted.
- Cache-busting: bump the `?v=` query on any changed CSS or JS file.
- Spelling confirmed by the user: "Anna Frühauf".

## Brand Commitments

- B-IDDE keeps its own identity: navy `#0B2E5B` and red `#C41E3A`.
- Support from the Einstein Foundation and the Berlin University Alliance is acknowledged.
- UK English, plain register, no em dashes, no marketing clichés.
- The user has made a minimal, professional direction binding across the three sister sites (IDD, B-IDDE, course): no gradients, drop shadows, glass, pills, hover lifts, scroll reveals, eyebrow labels, side-tab borders, icon tiles or numbered section labels; system font stack with semibold headings (a self-hosted title font is undecided; no serif).

## Evidence on Hand

Real meeting history and upcoming programme in `events.js`, a network group photo, training materials linked from events. The member count ("more than 60") is the only stated figure; no testimonials or other metrics exist and none should be invented.

## Product Principles

- The next meeting is always findable in one glance.
- Joining is one clear step: contact the secretariat.
- Event content must stay editable by the secretariat in one plain data file.
- Restraint over decoration; the site reads as part of the same family as IDD and the course while keeping its own colours.
