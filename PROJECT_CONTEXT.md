# Project Context

## Purpose

This is a beginner React CV/resume builder. Users will enter, submit, display, and edit their general information, education, and practical experience.

## Version-one requirements

- One general-information section: name, email, and phone number.
- One education section: school name, title of study, and date of study.
- One practical-experience section: company, position, responsibilities, and employment dates.
- Submit and edit controls that preserve entered values.
- Submitted data displayed in HTML elements.
- Plain CSS only; Tailwind CSS is not used.
- Global design tokens in `src/index.css`: Inter and Amaranth fonts, plus the original primary blue (`#0066FF`), pale-blue background (`#E5F0FF`), white, and black colors.

## Stack and commands

- React 19, TypeScript, Vite, and plain CSS.
- `npm run dev` — start the development server.
- `npm run build` — type-check and build for production.
- `npm run lint` — check code quality.
- `npm run preview` — preview the production build.

## Architecture

- `src/App.tsx` composes the page and will own submitted CV data.
- `src/components/` contains form components.
- `src/styles/` contains CSS imported by the relevant page or component.
- `src/index.css` contains global styles.

## Status and next step

Milestone 1 is complete. Tailwind was removed from `package.json`, the Vite configuration, and source styles. The former header utility classes are now named classes styled in `src/styles/App.css`. `npm.cmd run build` and `npm.cmd run lint` both passed on 2026-11-01. Form behavior is intentionally not implemented yet. Next: build the general-information form with controlled inputs and submit/edit behavior.
