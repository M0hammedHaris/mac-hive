# Technology Stack & Coding Standards

## Core Stack
- **Framework:** Next.js 16 (App Router)
- **React Version:** React 19
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (Alpha/Stable - using `@theme` in `globals.css`)
- **UI Components:** Radix UI primitives, Shadcn/UI (manual implementations)
- **Icons:** Lucide React, Material Symbols (rounded)

## Coding Standards
- **Server Components:** Use Server Components by default for all data fetching and static content.
- **Client Components:** Only use `'use client'` for interactive elements (forms, buttons with handlers, carousels).
- **Hooks:** 
  - Prefer Server Actions over `useEffect` for data mutations.
  - Use `useActionState` and `useFormStatus` for form handling (React 19).
- **TypeScript:** 
  - Define interfaces/types for all component props.
  - Avoid `any` at all costs.
- **Styling:**
  - Use Tailwind v4 features. Avoid utility-heavy junk in HTML; use `@apply` sparingly in CSS if needed, but prefer standard Tailwind classes.
  - Leverage CSS variables for themes as defined in `design_system.md`.
