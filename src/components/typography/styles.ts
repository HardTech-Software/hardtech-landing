import { StylesProps } from "../../utils/styles-props";

export const styles: StylesProps = {
  h1: {
    fontSize: 55,
    fontWeight: 700,
    color: "#fff",
  },
  h2: {
    fontSize: 55,
    fontWeight: 700,
    color: "#262626",
    backgroundColor: "#FE71F4",
    fontFamily: "inter",
    display: "inline-block",
  },
  title: {
    fontSize: 18,
    fontWeight: 400,
    color: "#fff",
  },

  description: {
    fontSize: 21,
    fontWeight: 400,
    color: "#fff",
  },
};

export type Variant = "h1" | "h2" | "title" | "description";
