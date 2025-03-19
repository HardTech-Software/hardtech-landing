import { StylesProps } from "../../utils/styles-props";
import { Inter, Exo_2 } from "next/font/google";
import { theme } from "@/helpers/theme";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "700"] });

export const styles: StylesProps = {
  h1: {
    fontSize: 55,
    fontWeight: 700,
    fontFamily: exo2.style.fontFamily,
    color: theme.white,
  },
  h2: {
    fontSize: 55,
    fontWeight: 700,
    color: "#262626",
    backgroundColor: theme.primary,
    fontFamily: exo2.style.fontFamily,
    display: "inline-block",
  },
  title: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: inter.style.fontFamily,
    color: theme.white,
  },

  description: {
    fontSize: 21,
    fontWeight: 400,
    fontFamily: inter.style.fontFamily,
    color: theme.white,
  },
};

export type Variant = "h1" | "h2" | "title" | "description";
