# Mac-Hive "Anti-Gravity" Project Rules

## 1. Core Philosophy
**"Enterprise Quality at Startup Speed"**
- **Agentic Workflow:** Leverage AI for rapid iteration. Design in Stitch -> Implement in Code -> Deploy.
- **Mobile First:** All designs must be fully responsive and touch-friendly.
- **Performance:** Aim for 95+ PageSpeed scores.
- **Aesthetics:** High-end, "wow" factor, pastel tones, glassmorphism, smooth animations.

## 2. Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (using CSS variables and `@theme`)
- **UI Library:** Shadcn/UI (modified for specific design system) + Lucide React / Material Symbols
- **Mobile:** Flutter (for future mobile apps)
- **Deployment:** Vercel
- **Package Manager:** pnpm

## 3. Design System (Golden Rules)
Based on `ui-design/mac_hive_home_landing_page/code.html`:

### Colors
- **Primary:** `#427cf0` (Blue - Trust)
- **Secondary:** `#e2f9f3` (Mint - Growth)
- **Accent:** `#e8f0fe` (Soft Blue)
- **Background Light:** `#f6f6f8`
- **Background Dark:** `#101622`
- **Text:** Slate-900 (Light), White (Dark)

### Typography
- **Primary Font:** `Inter` (Sans-serif)
- **Headings:** Bold/Black weights, tight tracking.
- **Body:** Relaxed line-height for readability.

### UI Components
- **Cards:** Glassmorphism (`backdrop-filter: blur(12px)`), rounded-3xl.
- **Buttons:** Rounded-xl, bold text, shadow-lg.
- **Icons:** Material Symbols Outlined (rounded style).

## 4. Coding Standards
- **Component Structure:**
  - PascalCase for components (`HeroSection.tsx`).
  - Directories: `app/`, `components/ui/`, `components/sections/`, `lib/`.
- **Tailwind v4:**
  - Use `@theme` in CSS for configuration.
  - Avoid `tailwind.config.js` unless absolutely necessary.
- **React 19:**
  - Use Server Components by default.
  - Use `'use client'` only for interactive islands.
  - Avoid `useEffect` if Server Actions or simple event handlers suffice.

## 5. File Structure
```
/app
  /layout.tsx      # Global layout (styles, fonts, metadata)
  /page.tsx        # Landing Page
  /globals.css     # Tailwind v4 theme & global styles
/components
  /ui              # Reusable atoms (Button, Card, Input)
  /sections        # Page sections (Hero, Features, Footer)
  /icons           # Icon wrappers
/lib
  /utils.ts        # Helper functions
/public
  /images          # Optimised assets
```

## 6. Git & Workflow
- **Commit Messages:** Semantic (feat, fix, chore, docs).
- **Branching:** Feature branches -> PR -> Main.

## 7. Agent Instructions (Anti-Gravity)
- **Package Management:** **ALWAYS** use `pnpm` for all package management tasks (install, add, remove, script running). exact `npm` or `yarn` commands are forbidden unless strictly necessary for a specific one-off task that requires them (almost never).
- **Rule Adherence:** Always check this rules file references before initiating major architectural changes.
