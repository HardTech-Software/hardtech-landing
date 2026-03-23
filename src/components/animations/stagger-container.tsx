"use client";
import { motion, Variants } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

// Contenedor que añade stagger (retraso escalonado) a sus hijos
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface CardAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Variante para cards individuales
export const CardAnimation = ({
  children,
  delay = 0,
  className,
}: CardAnimationProps) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
