# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A personal portfolio/CV site (Angular 22, standalone components, no NgModules). Static content,
no backend, no i18n. Routes: `/home`, `/about`, `/work` (CSS/JS animation demos embedded via
CodePen iframes), `/links`, `/tech-stack`. This directory (`log` relative to the git root) is the
actual app — the git repository root is one level above this folder.

## Commands

```bash
npm start        # ng serve
npm run build    # ng build
npm test         # jest (NOT `ng test` — there is no karma/jasmine here)
```

## Non-obvious things

- **Styling is Tailwind v4**, migrated from Bootstrap 5. `src/styles.css` overrides Tailwind's
  `@theme` breakpoints (`--breakpoint-sm/md/lg`) to Bootstrap's original values (576/768/992px),
  and defines `--color-bs-*` custom tokens (muted text, success green, card border colors) that
  match Bootstrap 5.3's exact computed colors. This exists purely for visual parity with the
  pre-migration design — don't "simplify" it back to Tailwind's defaults, that would change how
  the site looks.
- **`.menu-grid` is a deliberately non-standard class name.** The homepage's 4-tile CSS grid layout
  (`menu-block.component.css`) is NOT called `.grid` — Tailwind ships its own `.grid { display:
  grid }` utility, and since Tailwind scans templates for any class token, naming a custom class
  `.grid` would make Tailwind generate a conflicting global rule. Keep custom CSS class names that
  might collide with a Tailwind utility name distinct.
- **Tests use Jest + `@testing-library/angular`**, not the Angular-CLI-default Karma/Jasmine setup.
  `jest-preset-angular` v17's setup API is `jest-preset-angular/setup-env/zone`, exporting a
  `setupZoneTestEnv()` function that must be called explicitly (older versions auto-ran this as a
  side-effecting import named `setup-jest` — that path no longer exists).
- **Don't set `moduleResolution`/`module` overrides in `tsconfig.spec.json`.** It must inherit
  `bundler` resolution from the root `tsconfig.json`. Switching it to classic `"node"` resolution
  (a plausible-looking fix for a "cannot find module" error from a test-only package) silently
  breaks resolution of Angular's own subpath exports (`@angular/core/testing`,
  `@angular/router/testing`, etc.) under full type-checking — Jest's transpile-only run won't show
  it, but `tsc --noEmit` and IDE type-checking will.
- **Root `tsconfig.json` has `"files": []`.** This exists so IDEs can unambiguously route
  `*.spec.ts` files to `tsconfig.spec.json` instead of matching the root config too (which, with no
  include/files of its own, would otherwise implicitly match every `.ts` file, spec files
  included).
- Node must satisfy `^22.22.3 || ^24.15.0 || >=26.0.0` (Angular 22 CLI requirement) — older Node
  fails inside `ng update`/`ng build` with a version-gate error, not a clear dependency error.
- Test spec style: `describe(ComponentName.name, ...)`, a local `async function renderComponent()`
  helper per file wrapping `@testing-library/angular`'s `render()`, and `screen`/jest-dom matchers
  over `fixture.debugElement` queries wherever the markup exposes an accessible role/text.
