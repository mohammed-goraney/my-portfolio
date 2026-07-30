# Portfolio Architecture

This project is organized around a clear separation between data, types, constants, and UI components.

## Directory layout

- `src/types/` — domain type definitions used throughout the app.
- `src/data/` — centralized static content for the portfolio.
- `src/constants/` — visual tokens, navigation, and SEO metadata.
- `src/components/` — reusable UI and section components.
- `src/hooks/` — custom hooks for application behavior.
- `src/utils/` — pure utility functions.
- `src/layouts/` — page-level layout wrappers.
- `src/styles/` — styling and theme definitions.
- `src/assets/` — shared icons, fonts, and image helpers.

## Design goals

- Keep data and presentation separated.
- Define reusable type contracts for all major content models.
- Support future growth by isolating components and hooks.
