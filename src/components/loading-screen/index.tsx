"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/icon";
import {
  Content,
  FooterRow,
  GlowLeft,
  GlowRight,
  Highlight,
  LoadingDots,
  LogoShell,
  Percentage,
  ProgressFill,
  ProgressTrack,
  Screen,
  Subtitle,
  Title,
} from "./styles";

interface LoadingScreenProps {
  isVisible: boolean;
  progress: number;
}

const LoadingScreen = ({ isVisible, progress }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <Screen>
            <GlowLeft />
            <GlowRight />

            <Content
              as={motion.div}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <LogoShell
                as={motion.div}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Icon name="logo" width="84" height="94" />
              </LogoShell>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
              >
                <Title>HardTech</Title>
                <Subtitle>
                  Preparando una experiencia digital con{" "}
                  <Highlight>impacto real</Highlight>.
                </Subtitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.34 }}
              >
                <ProgressTrack>
                  <ProgressFill $progress={progress} />
                </ProgressTrack>

                <FooterRow>
                  <span>
                    Cargando
                    <LoadingDots>
                      <span />
                      <span />
                      <span />
                    </LoadingDots>
                  </span>
                  <Percentage>{Math.round(progress)}%</Percentage>
                </FooterRow>
              </motion.div>
            </Content>
          </Screen>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
