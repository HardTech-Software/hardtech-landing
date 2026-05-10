import { TypographyStyled } from "./styles";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "description1"
    | "description2"
    | "description3"
    | "price"
    | "button";
  color?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  /** Override the rendered HTML element while keeping visual styles. */
  as?: React.ElementType;
}

const SEMANTIC_TAGS: Partial<
  Record<NonNullable<TypographyProps["variant"]>, React.ElementType>
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const Typography = ({
  variant = "description1",
  color = "#1D1D1D",
  fontWeight,
  as: asProp,
  ...props
}: TypographyProps) => {
  const semanticTag = variant ? (SEMANTIC_TAGS[variant] ?? "p") : "p";
  const tag = asProp ?? semanticTag;
  return (
    <TypographyStyled
      as={tag}
      color={color}
      $variant={variant}
      $fontWeight={fontWeight}
      {...props}
    />
  );
};

export default Typography;
