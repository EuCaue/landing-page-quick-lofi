export const ACCENTS = [
  { id: "blue", label: "Blue", color: "#3584e4" },
  { id: "teal", label: "Teal", color: "#2190a4" },
  { id: "green", label: "Green", color: "#3a944a" },
  { id: "yellow", label: "Yellow", color: "#c88800" },
  { id: "orange", label: "Orange", color: "#ed5b00" },
  { id: "red", label: "Red", color: "#e62d42" },
  { id: "pink", label: "Pink", color: "#d56199" },
  { id: "purple", label: "Purple", color: "#9141ac" },
  { id: "slate", label: "Slate", color: "#6f8396" },
] as const;

export type AccentId = (typeof ACCENTS)[number]["id"];

export const DEFAULT_ACCENT: AccentId = "teal";
export const ACCENT_STORAGE_KEY = "ql-accent";

/* Runs before paint so a saved accent never flashes the default. */
export const ACCENT_INIT_SCRIPT = `try{var a=localStorage.getItem("${ACCENT_STORAGE_KEY}");if(a&&/^[a-z]+$/.test(a))document.documentElement.dataset.accent=a}catch(e){}`;

export function isAccent(value: string | null | undefined): value is AccentId {
  return ACCENTS.some((a) => a.id === value);
}
