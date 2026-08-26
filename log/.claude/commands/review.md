---
description: Read-only code review — logic errors, refactoring opportunities, spelling, accessibility
allowed-tools: Read, Grep, Glob, Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git show:*)
---

Review the code in this Angular project. This command is **read-only** — do not edit, write, or
delete any file, and do not run any command other than the read-only `git`/search tools available
to you. If you find yourself wanting to fix something, describe the fix instead of applying it.

## Scope

If there are uncommitted changes (`git status`/`git diff`), review those changes plus the files
they touch. If the working tree is clean, review the full `src/app` tree.

## What to check

1. **Logic errors** — incorrect conditionals, off-by-one mistakes, wrong operator precedence,
   unhandled edge cases (empty arrays, null/undefined), Angular-specific bugs (missing `track` in
   `@for`, wrong change-detection assumptions given `ChangeDetectionStrategy.Eager`, stale closures
   in template expressions).
2. **Refactoring opportunities** — duplicated markup or logic across components, overly complex
   templates that could be simplified, non-idiomatic Angular (e.g. logic that belongs in the
   component class instead of the template), dead code, unused imports/variables.
3. **Spelling** — typos in user-facing text (templates), comments, and identifier names. Flag only
   genuine misspellings, not stylistic wording choices.
4. **Accessibility** — missing or non-descriptive `alt` text, interactive elements that aren't real
   `<a>`/`<button>` tags (e.g. a clickable `<div>` with `routerLink` but no `role`/keyboard handling),
   missing `aria-label`/`aria-current` where meaning isn't conveyed visually, heading order, color
   contrast that depends on the `bs-*` design tokens in `src/styles.css`, and whether decorative vs.
   meaningful icons are marked up correctly (FontAwesome `<i>` icons have no accessible name by
   default).

## Output

Report findings grouped under the four headings above. For each finding: file:line, one-sentence
description of the problem, and one-sentence suggested fix. If a category has no findings, say so
explicitly rather than omitting the heading. Do not pad the report with praise or a summary of what
was reviewed — just the findings.
