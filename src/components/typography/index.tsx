import { TypographyStyled } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "title" | "description1" | "description2";
  color?: string;
}

const Typography = ({
  variant = "description1",
  color = "white",
  ...props
}: TypographyProps) => {
  return <TypographyStyled color={color} $variant={variant} {...props} />;
};

export default Typography;
