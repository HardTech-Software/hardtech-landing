import { StylesProps } from "../../utils/styles-props";
import { Inter, Exo_2 } from "next/font/google";
import { theme } from "@/helpers/theme";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "700"] });

export const styles: StylesProps = {
  h1: {
    fontSize: "3rem",
    fontWeight: 700,
    fontFamily: exo2.style.fontFamily,
    color: theme.white,
    paddingBottom: "0.6rem",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#262626",
    backgroundColor: theme.primary,
    fontFamily: exo2.style.fontFamily,
    display: "inline-block",
    paddingBottom: "0.6rem",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: inter.style.fontFamily,
    color: theme.white,
  },

  description: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: inter.style.fontFamily,
    color: theme.white,
  },
};

export type Variant = "h1" | "h2" | "title" | "description";
