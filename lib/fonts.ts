import {
  JetBrains_Mono as FontMono,
  Manrope as FontSans,
  Hedvig_Letters_Serif as Serif,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
