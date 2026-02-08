# Project Structure & Organization

## Directory Mapping
- `/app`: App router pages, layouts, and global styles.
- `/components/ui`: Atomic UI components (Button, Card, Input).
- `/components/sections`: Page-specific sections (Hero, Portfolio, Advantages).
- `/components/layout`: Global layout components (Navbar, Footer).
- `/lib`: Utilities, types, and services.
- `/public`: Static assets (images, fonts, icons).
- `/ui-design`: Refer to this for original Stitch designs (png/html).

## File Naming
- **Components:** PascalCase (`HeroSection.tsx`).
- **Utilities/Hooks:** camelCase (`useLocalStorage.ts`, `cn.ts`).
- **Folders:** kebab-case.

## Component Organization
- Keep components small and focused.
- If a section becomes complex, break it into smaller components within a folder named after the section.
