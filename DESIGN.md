# Design

The landing page borrows the visual grammar of Libadwaita (GNOME HIG) and gives Quick Lofi its own accent and a working replica of its panel menu. Tokens live in `src/app/globals.css`; components in `src/components/adw`.

## Principles

- Built from GNOME patterns, not decorated with them: header bar, boxed lists, preferences groups, toggle groups, an about dialog, the Shell top bar.
- One accent at a time. Teal (`#2190a4`) by default; visitors can switch to any GNOME 47 accent from the main menu.
- Light and dark follow the system unless the visitor picks a style. Every surface has both values.
- Content is factual. All copy and numbers come from `src/content/site.ts`.

## Color

| Token | Light | Dark |
| --- | --- | --- |
| window | `#fafafb` | `#222226` |
| view / card | `#ffffff` | `#1d1d20` / `rgb(255 255 255 / 8%)` |
| headerbar | `#ffffff` | `#2e2e32` |
| sidebar (alternate sections) | `#ebebed` | `#2e2e32` |
| foreground | `rgb(0 0 6 / 80%)` | `#ffffff` |
| dim text | `rgb(0 0 6 / 62%)` | `rgb(255 255 255 / 66%)` |
| border | `rgb(0 0 6 / 12%)` | `rgb(255 255 255 / 12%)` |

Accent shades derive from `--accent-bg` with relative color syntax, as Libadwaita does: buttons cap lightness at 0.52 (white labels stay above 4.5:1), accent text caps at 0.48 in light and floors at 0.82 in dark. `--desktop-bg` is a dark mix of the accent used behind the Shell preview.

Note: Lightning CSS rewrites `color-mix()` with `var()` arguments inside custom properties, so those tokens sit in `@supports` blocks with hex fallbacks.

## Type

- Display and titles: Cantarell 700 (`title-display`, `title-1`, `title-2`), tracking -0.01 to -0.025em.
- Body and UI: Inter (the base of Adwaita Sans), 16px / 1.6.
- Code: JetBrains Mono 400, commands only.
- Utilities: `heading` (15px bold), `body-lg`, `caption`, `numeric`.

## Space and shape

- Tailwind spacing unit is 6px (`--spacing: 0.375rem`), the Libadwaita grid: `p-1` = 6px, `p-2` = 12px, `p-4` = 24px.
- Radii: buttons 6px, cards and boxed lists 12px, windows and popovers 15px, pills fully rounded (primary CTAs only).
- Elevation is the Libadwaita card shadow; no borders combined with shadows.

## Components

- `Button` / `LinkButton`: raised, flat, suggested; sizes default, pill, icon.
- `PreferencesGroup`, `BoxedList`, `ActionRow` (static or link rows).
- `ToggleGroup` + `TabPanel`: WAI-ARIA tabs.
- `CommandBlock`: copyable shell command with copied and failed states.
- Widget illustrations (switch, slider, dropdown, keycaps, pill), hidden from assistive tech except keycaps.
- `ShellPreview`: interactive model of the top bar indicator and menu.
- `StyleMenu`: popover with style switcher, accent picker, and section links on small screens.

## Icons

Adwaita symbolic icons and the extension's own indicator icons, stored as path data in `src/components/icons/paths.ts`. Only icons in use are kept. GitHub mark from Simple Icons.

## Motion

One moment: popovers scale and fade in (220ms, expo ease-out), disabled under `prefers-reduced-motion`. Smooth anchor scrolling only without reduced motion.
