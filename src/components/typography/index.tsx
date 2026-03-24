import { TypographyStyled } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
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
}

const Typography = ({
  variant = "description1",
  color = "#1D1D1D",
  fontWeight,
  ...props
}: TypographyProps) => {
  return (
    <TypographyStyled
      color={color}
      $variant={variant}
      $fontWeight={fontWeight}
      {...props}
    />
  );
};

export default Typography;
