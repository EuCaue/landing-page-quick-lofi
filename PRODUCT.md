# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

GNOME desktop users who want background sound (lofi radio, ambient noise, their own audio) while they work or study, without keeping a browser tab or a full music player open. They arrive from extensions.gnome.org, GitHub, or a link, and want to know quickly what the extension does, whether it runs on their GNOME version, and how to install it.

## Product Purpose

Quick Lofi is a GNOME Shell extension that adds a top bar indicator for playing lofi radios and other sounds, online or from local files. This landing page explains the extension and sends people to install it from extensions.gnome.org. Success is a visitor who installs the extension with mpv already set up.

## Positioning

It lives in the GNOME top bar and uses mpv as its playback engine, so any source mpv plays can become a station. Preferences are a native Libadwaita window.

## Capabilities and Constraints

Confirmed from the extension repository (v1.8.0, May 2026) and extensions.gnome.org (version 22):

- One click play/pause from the top bar indicator; stations listed in a popup menu.
- Stations have a name and a source (stream URL or local file path). Default stations: Lofi Radio, Lofi Hunter, Lofi Hip-hop.
- Add, remove, and drag-and-drop reorder stations in preferences.
- Volume slider in the popup menu; default volume setting.
- Mini player in the menu with playback controls, progress, and optional track title (v1.8).
- Global keyboard shortcuts: play/pause, stop, volume up/down, next/previous (playlist aware), next/previous radio. Unset by default; user configures them.
- Configurable left, middle, and right click actions on the indicator.
- MPRIS integration (media keys, system media controls) since v1.7.
- Adjustable popup max height.
- Advanced: custom mpv arguments, cookies from a browser for restricted streams.
- Debug logging for troubleshooting.
- Requires `mpv` (dnf / apt / pacman / zypper).
- Supports GNOME Shell 46, 47, 48, 49, 50.
- Install via extensions.gnome.org (browser integration or Extension Manager), release zip with `gnome-extensions install`, or from source with Node/npm.
- License: GPL-3.0. Repository: github.com/EuCaue/gnome-shell-extension-quick-lofi. Author: Cauê Souza (EuCaue). Donations: ko-fi.com/eucaue.

## Brand Commitments

- Name "Quick Lofi". Logo: headphones glyph in a rounded square (`logo.svg`).
- Page language: English.

## Evidence on Hand

- Screenshots (pre v1.8, light and dark): `public/shortcuts-*.png` (Player preferences with shortcuts), `public/actions-*.png` (Interface preferences, click actions), `public/volume-*.png` (popup menu with stations and volume).
- Reviews on extensions.gnome.org by himozzza, CaptainSensible, M4TiX (quoted on the current page).
- 10,103 downloads on extensions.gnome.org (Oct 2026 snapshot). Do not invent other numbers.
- Missing: screenshots of the mini player, MPRIS controls, the radios page, and the top bar indicator. Page must accept these later without layout changes.

## Product Principles

- Say what it does in GNOME terms; no marketing inflation.
- Installation path and the mpv requirement are never hidden.
- Only claim features that ship in the current release.
- The page should feel like part of the GNOME ecosystem.

## Accessibility & Inclusion

WCAG AA contrast in light and dark, full keyboard navigation, respects `prefers-reduced-motion` and `prefers-color-scheme`.
