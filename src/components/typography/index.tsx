import { TypographyStyled } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "title" | "description1" | "description2";
}

const Typography = ({
  variant = "description1",
  ...props
}: TypographyProps) => {
  return <TypographyStyled $variant={variant} {...props} />;
};

export default Typography;
