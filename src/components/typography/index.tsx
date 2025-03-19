import { styles, Variant } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
}

const Typography = ({
  variant = "description",
  style,
  ...props
}: TypographyProps) => {
  const rootStyles = {
    ...styles[variant],
    ...style,
  };

  return <p style={rootStyles} {...props} />;
};

export default Typography;
