# Error Log

## 2026-11-02 - Reported commit-graph warning after branch rename

1. **Goal:** Rename the main Git branch.
2. **Expected:** Branch operations and history remain accessible without warnings.
3. **Actual:** User reported `unable to find all commit-graph files`.
4. **Message:** As quoted above; full command output was not provided.
5. **Locations:** Git metadata; no application source is implicated.
6. **Root cause:** Unconfirmed. Commit-graph data accelerates history operations; the warning alone does not establish missing commits or a failed rename.
7. **Investigation:** Ran `git status --short --branch`, `git branch -avv`, `git log -3 --oneline`, and `git commit-graph verify` under the user's account. The sandbox account initially hit a separate ownership check; no global safe-directory settings were changed.
8. **Solution:** No repair applied because the reported warning did not reproduce. Current branch is `main` at `32fbc1d`; history lists that commit and `587abe0`.
9. **Verification:** Status, branch listing, and history were readable. Commit-graph verification exited successfully without diagnostics. This does not establish what produced the earlier warning.
10. **Prevention:** Capture the full command and warning before rebuilding or deleting Git metadata.
11. **Learning takeaway:** Distinguish an optional history acceleration structure from the commits themselves; verify repository state before attempting repairs.

## 2026-11-02 - Copied field markup retains incorrect identifiers

1. **Goal:** Add education and experience sections by reusing the general-information field structure.
2. **Expected:** Every label focuses its own field and each field has a unique identifier.
3. **Actual:** New labels retain `htmlFor="name"`, `"email"`, or `"phone"`, while their inputs have different IDs. Both employment dates use `id="end"` and `name="end"`.
4. **Error message:** None observed; these are HTML association problems found in code review.
5. **Locations:** `src/components/EducationSection.tsx` and `src/components/ExperienceSection.tsx`.
6. **Root cause:** The copied markup was partially renamed; label targets and date identifiers were left unchanged.
7. **Investigation:** Compared each `htmlFor` with its intended input ID and inspected the two date controls.
8. **Solution:** Matched each new label to its input; added distinct start/end IDs, names, and labels. Removed inappropriate education autocomplete tokens and used `organization` and `organization-title` for employment fields.
9. **Verification:** Inspected label/ID pairs and distinct date names; build and lint passed after implementation. Browser interaction still needs manual testing.
10. **Prevention:** When copying a field, review its label, ID, name, autocomplete purpose, and state connection together.
11. **Learning takeaway:** Repeated JSX may compile while carrying incorrect HTML relationships; TypeScript does not check that labels target the intended inputs.

## 2026-11-02 - Form styles lost their matching wrapper

1. **Goal:** Preserve general-information styling after moving submission into one parent form.
2. **Expected:** The remaining fieldset, labels, and inputs retain their styling.
3. **Actual:** Rules depended on a `.general_form` ancestor that no longer existed.
4. **Exact error:** None; unmatched CSS selectors do not produce a compiler error.
5. **Locations:** `src/components/GeneralForm.tsx` and `src/styles/generalForm.css`.
6. **Root cause:** The component was refactored from a form wrapper to a fieldset, but its CSS selectors still described the old structure.
7. **Investigation:** Compared the rendered JSX classes with stylesheet selectors and found no element bearing `.general_form`.
8. **Solution:** After reverting additional visual styling, applied a focused fix: added the existing `general_form` class to the fieldset and changed `.general_form fieldset` to `.general_form`. All existing CSS property values were preserved.
   **Follow-up:** The class was later found on the parent form instead of the fieldset. Moved it back to the fieldset, merged duplicate rules, and restored the original legend padding. This prevents the general-section width limit from constraining the entire CV form.
9. **Verification:** Compared JSX and selectors: the fieldset now matches `.general_form`, and its labels, inputs, and legend match the existing descendant selectors. Browser appearance has not been verified; no build was run for this selector-only fix.
10. **Prevention:** Review selectors when removing or moving wrapper elements. Use browser developer tools to inspect whether a rule matches an element.
11. **Learning takeaway:** CSS depends on the DOM structure and class names, even when the React functionality still works.

## 2026-11-01 — PowerShell could not run npm directly

1. **What I was trying to accomplish:** Remove unused Tailwind packages with `npm uninstall`.
2. **Expected behavior:** npm would update `package.json` and `package-lock.json`.
3. **Actual behavior:** PowerShell prevented `npm.ps1` from running.
4. **Exact error:** `npm.ps1 cannot be loaded because running scripts is disabled on this system.`
5. **Relevant files:** `package.json` and `package-lock.json` were the intended package files.
6. **Root cause:** The Windows PowerShell execution policy blocks PowerShell script files, including npm's `npm.ps1` wrapper.
7. **Investigation:** The error specifically referenced the execution policy and `npm.ps1`.
8. **Solution:** Ran `npm.cmd uninstall tailwindcss @tailwindcss/vite`, which invokes npm through its Windows command wrapper without changing the execution policy.
9. **Verification:** `package.json` no longer lists `tailwindcss` or `@tailwindcss/vite`; `npm.cmd run build` and `npm.cmd run lint` both passed.
10. **Prevention:** In PowerShell environments with this policy, use `npm.cmd` instead of weakening system script-security settings.
11. **Learning takeaway:** A command-line tool can have different wrappers for different shells. The failure was environmental, not caused by React or the project code.

## 2026-11-01 — Tailwind conversion patch limitation

1. **What I was trying to accomplish:** Replace several files with their plain-CSS versions in one patch.
2. **Expected behavior:** All replacements would apply together.
3. **Actual behavior:** The patch tool rejected deleting and adding the same target file in one patch.
4. **Exact error:** `apply_patch verification failed: invalid patch: multiple operations target ...`
5. **Relevant files:** The attempt involved `src/App.tsx` and other source files.
6. **Root cause:** The patch tool allows one operation per target file in a patch.
7. **Investigation:** The error named the duplicated target. The original files were then restored before work resumed.
8. **Solution:** Use focused update patches for existing files and add patches only for new files.
9. **Verification:** The original files were confirmed restored before this milestone continued.
10. **Prevention:** Prefer an `Update File` operation when replacing existing file contents.
11. **Learning takeaway:** Tooling errors often explain the constraint directly; read them carefully and make the smallest valid change.
