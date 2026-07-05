# Portfolio Page

Interactive portfolio site built with React, Vite, and motion-driven section transitions.

<p align="center">
  <img src="./public/assets/hero/hero-bg-perfect.png" alt="Portfolio hero background" width="760" />
</p>

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Motion" src="https://img.shields.io/badge/Motion-12-111827?style=flat-square" />
</p>

## Overview

This repository contains a single-page portfolio with project detail routes, scroll-based section transitions, and a mobile-first visual system. It uses a narrow stage layout, reduced-motion support, and route-aware project overlays so the home scroll position is preserved while browsing case studies.

## Screens

The visual system is asset-backed. Key public assets include:

| Area | Asset |
| --- | --- |
| Hero | `public/assets/hero/hero-bg-perfect.png` |
| Profile | `public/assets/profile/profile-photo.png` |
| Career | `public/assets/career/trophy.png`, `briefcase.png` |
| Contact | `public/assets/contact/mail.png`, `map-pin.png`, `phone.png` |

## Architecture

```mermaid
flowchart LR
  App["App.tsx"] --> Route["resolveRoute"]
  App --> Sections["Hero / Profile / Projects / Career / Contact"]
  App --> Detail["ProjectDetailPage"]
  Sections --> Transitions["useSectionTransitions"]
  App --> Motion["MotionConfig + LazyMotion"]
  App --> Accessibility["useReducedMotion"]
```

## Getting Started

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project Layout

```text
.
├── src/
│   ├── App.tsx                     # Routing and page composition
│   ├── components/                 # Sections and project detail UI
│   ├── data/portfolio.ts           # Case-study metadata
│   ├── hooks/                      # Motion and accessibility hooks
│   └── styles.css                  # Visual system
├── public/assets/                  # Hero, profile, contact, and career imagery
├── package.json
└── vite.config.ts
```

## Implementation Notes

- Route state is managed in the app shell without adding a router dependency.
- Project detail pages preserve the original home scroll position.
- Motion respects `prefers-reduced-motion`.
- The repository includes historical layout-fix scripts; the active application code is under `src/`.
