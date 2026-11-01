# Error Log

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
