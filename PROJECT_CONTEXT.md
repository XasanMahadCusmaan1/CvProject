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
- `src/components/GeneralSection.tsx` renders controlled general-information inputs; its props type is `GeneralSectionProps`. Each input passes its typed value and a known field name to an update callback.
- `src/components/CvResult.tsx` displays submitted general information and sends an edit request upward through an `onEdit` callback.
- `src/components/Button.tsx` is the shared button component.
- `src/styles/` contains CSS imported by the relevant page or component.
- `src/index.css` contains global styles.

## Status and next step

Milestones 1 and 2 are complete. Tailwind was removed from `package.json`, the Vite configuration, and source styles. The former header utility classes are now named classes styled in `src/styles/App.css`.

The general-information form is implemented: controlled name, email, and phone inputs update a typed state object; form submission prevents the normal page refresh and invokes a dedicated submit callback from `App`; `CvResult` displays the saved values; and Edit restores the form while preserving its values. `npm.cmd run build` and `npm.cmd run lint` passed on 2026-11-01.

All three sections now have controlled inputs, shared submission, a result view, and editing. The user reports that the submit/edit/resubmit flow works and values are retained. Reference-based styling is implemented. Next: review the styled page on desktop and mobile, then push and deploy. Refactoring remains optional.

## 2026-11-02 - Shared form architecture and styling

- The agreed direction is one parent form with one Submit/Edit flow for the complete CV. `App` now renders the parent form; `GeneralForm` renders a fieldset. Education and experience remain to be implemented as additional fieldsets.
- Styling additions from this session were reverted at the user's request. The previous styles and JSX class names are restored; the user will handle visual design later.
- Styles are split between global tokens/reset in `index.css`, page/result layout in `App.css`, general fields in `generalForm.css`, and shared buttons in `button.css`.
- No state or event behavior was changed during styling or restoration.
- The fieldset now carries `className="general_form"`. The former `.general_form fieldset` selector now targets `.general_form` itself. This reconnects the existing label, input, fieldset, and legend styles without adding visual styles. See `ERROR_LOG.md` for the debugging lesson.
- After the class was moved to the parent form, it was restored to the general-information fieldset so its width and padding apply to that section alone. Duplicate `.general_form` rules were merged and the original legend padding restored.
- Build and lint passed before the styling was reverted. No additional checks were run for the CSS/class-name restoration.

## Section naming

Renamed the section files to `GeneralSection.tsx`, `EducationSection.tsx`, and `ExperienceSection.tsx` to distinguish them from the single parent HTML form. Renamed `generalForm.css` to `generalSection.css` and updated its import. Existing CSS class names and behavior are unchanged.

## Education and experience markup review

Education and experience fieldsets render inside the parent form, using the existing shared `.general_form` styles. Their component functions now match their file names: `EducationSection` and `ExperienceSection`.

Textarea styling now shares the input font size, padding, and minimum width, with an inherited font, 100px minimum height, and vertical resizing. This preserves the existing design.

Copied label targets and duplicate date IDs are corrected (see `ERROR_LOG.md`). All sections now follow the editing condition and connect their data to state and the result. A reusable label/input component is an optional later refactor.

## Education and experience functionality - 2026-11-02

- Added shared `Education` and `Experience` types in `src/types/cv.ts`.
- `App` owns separate typed state objects for general information, education, and experience. This follows the learner's existing pattern; consolidation into a nested CV object is deferred until the learner reviews the working code.
- New section props contain their data object and a callback accepting a string value and `keyof` that section's type.
- `educationChange` and `experienceChange` use functional state updates: React supplies the latest previous object, which is copied before replacing the selected field. This avoids mutating state.
- Submission prevents navigation and hides all input sections. `CvResult` displays all section values, including responsibility line breaks. Edit remounts inputs with values retained in `App`.
- Required fields use native HTML validation. The end date has a minimum matching the start date. Date input values are stored as strings, not JavaScript `Date` objects.
- Existing styling is unchanged. Build and lint passed; browser interaction has not been tested in this session.
- Manual checks: fill all sections, submit, verify all values, edit, verify retained values, change and resubmit. Also try missing required fields, invalid email, Enter submission, and an end date before the start date.

## Reference-based visual design - 2026-11-02

- Inspected `public/image.png`. The result uses its dark full-width name banner, gray contact sidebar, white content column, and ruled section headings. No photo or unsupported sample sections/content are included.
- `CvResult.tsx` now uses a semantic article, contact description list, contact links, and experience/education sections. Responsibility line breaks are preserved using `white-space: pre-wrap`.
- Added `src/styles/cvResult.css` for the result layout. CSS Grid creates the desktop sidebar and main column; a media query stacks them below 600px. Edit stays outside the resume sheet.
- The parent form has editing/preview modifier classes so the inactive container does not leave empty layout space. Input forms use a two-column desktop layout with experience spanning both columns, and one column below 650px.
- Shared field and button styles retain the original primary blue, Inter body font, and Amaranth headings. The result intentionally follows the sample's neutral gray palette.
- State, validation, and Submit/Edit callbacks are unchanged. Build and lint passed after the presentation changes. No browser tool was available for visual verification; mobile sizing and the previously tested interaction flow should be rechecked in the browser after styling.
- No PDF/download feature has been added; deployment and repository push remain outstanding.

## Design refinement

The user requested a more professional, restrained presentation. Replaced separate rounded form cards with one bordered white sheet and divided sections. Fields align in two columns on desktop and one on mobile. Inputs and buttons use smaller corner radii; typography uses Inter with a reduced heading scale and neutral colors. Original blue and font variables remain available, but Amaranth is no longer used for these headings. The reference-inspired CV retains its dark name banner and gray sidebar, with no shadow, quieter typography, and more document spacing. Header copy now describes the implemented edit/review behavior without promising a download feature. React state and event behavior are unchanged. Build and lint passed after refinement; browser visual review is still outstanding.
