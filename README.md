# CV / Resume Builder

A React and TypeScript learning project for entering personal details and presenting a CV preview.

## Features

- General information: name, email, and phone.
- Education: school, study title, and date.
- Experience: company, position, responsibilities, and start/end dates.
- Submit to switch from editing to a CV preview.
- Return to editing while retaining current in-memory values.

## Built with

React, TypeScript, Vite, and CSS, with ESLint for source checks.

## Run locally

```bash
npm install
npm run dev
```

Open Vite's printed local URL.

| Command | Purpose |
| --- | --- |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

- `src/App.tsx`: form state, change handlers, and edit/preview mode.
- `src/components/`: general, education, experience, preview, and button components.
- `src/types/cv.ts`: shared TypeScript data types.
- `src/styles/`: component styles.
- `PROJECT_CONTEXT.md` and `ERROR_LOG.md`: learning and debugging documentation.

## Learning focus

Controlled inputs, lifting state, callback props, immutable object updates, conditional rendering, and TypeScript's keyof for field-specific updates.

## Current limitations

The inspected state represents one education and one experience entry. Values are held in memory and are not persisted after refresh. No PDF export or backend is implemented in App. Source was reviewed for this documentation update; build and browser behavior were not tested here.
