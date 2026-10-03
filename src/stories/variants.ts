/* Shared story settings for theme and viewport variants. */
export const dark = { globals: { theme: "dark" } } as const;
export const mobile = { globals: { viewport: { value: "mobile", isRotated: false } } } as const;
export const tablet = { globals: { viewport: { value: "tablet", isRotated: false } } } as const;
export const mobileDark = {
  globals: { theme: "dark", viewport: { value: "mobile", isRotated: false } },
} as const;
export const padded = { parameters: { layout: "padded" } } as const;
