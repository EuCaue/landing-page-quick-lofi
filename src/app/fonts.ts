import { Cantarell, Inter, JetBrains_Mono } from "next/font/google";

/* Inter is the base of Adwaita Sans; Cantarell was GNOME's interface face. */
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const fontVariables = `${inter.variable} ${cantarell.variable} ${mono.variable}`;
