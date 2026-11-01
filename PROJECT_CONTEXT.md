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

- `src/App.tsx` composes the page and owns the `generalInfo` object and `isEditing` display state.
- `src/types/cv.ts` exports the shared `GeneralInfo` type. Its `keyof GeneralInfo` expression restricts a form field name to `name`, `email`, or `phone`.
- `src/components/GeneralForm.tsx` renders controlled inputs. Each input passes its typed value and a known field name to an update callback.
- `src/components/CvResult.tsx` displays submitted general information and sends an edit request upward through an `onEdit` callback.
- `src/components/Button.tsx` is the shared button component.
- `src/styles/` contains CSS imported by the relevant page or component.
- `src/index.css` contains global styles.

## Status and next step

Milestones 1 and 2 are complete. Tailwind was removed from `package.json`, the Vite configuration, and source styles. The former header utility classes are now named classes styled in `src/styles/App.css`.

The general-information form is implemented: controlled name, email, and phone inputs update a typed state object; form submission prevents the normal page refresh and invokes a dedicated submit callback from `App`; `CvResult` displays the saved values; and Edit restores the form while preserving its values. `npm.cmd run build` and `npm.cmd run lint` passed on 2026-11-01.

Next: build the education form using the same state, props, controlled-input, submit, and edit pattern. After the three form sections work, combine them into a fuller CV layout, improve responsive styling, and deploy the project.
