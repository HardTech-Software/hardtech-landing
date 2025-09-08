import { TypographyStyled } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "description1"
    | "description2"
    | "description3";
  color?: string;
}

const Typography = ({
  variant = "description1",
  color = "#1D1D1D",
  ...props
}: TypographyProps) => {
  return <TypographyStyled color={color} $variant={variant} {...props} />;
};

export default Typography;
