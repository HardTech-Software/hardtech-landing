import React from "react";
import { Container } from "./styles";
import Typography from "../typography";
import { motion } from "framer-motion";

interface TitleProps {
  title: React.ReactNode;
}

const Title = ({ title }: TitleProps) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={titleVariants} initial="hidden" animate="visible">
      <Container>
        <Typography variant="h2">{title}</Typography>
      </Container>
    </motion.div>
  );
};

export default Title;
