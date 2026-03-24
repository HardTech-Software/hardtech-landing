"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SVGContainer } from "./styles";

// Typedef para un circuito individual
type CircuitItem = {
  id: string;
  paths: string[];
  circle?: {
    cx: number;
    cy: number;
    r: number;
  };
  circles?: Array<{
    cx: number;
    cy: number;
    r: number;
  }>;
  delay: number;
};

interface AnimatedCircuitsProps {
  className?: string;
  animateOnView?: boolean;
  repeatOnView?: boolean;
  strokeColor?: string;
  glowColor?: string;
  glow?: boolean;
  duration?: number;
  staggerDelay?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  circuits?: CircuitItem[];
}

// Datos de circuitos por defecto basados en trazos de Figma.
// Dejamos 1 activo para iterar circuito por circuito con precision.
const DEFAULT_CIRCUITS: CircuitItem[] = [
  {
    id: "circuit-1",
    paths: ["M0 14 L125 14"],
    circles: [{ cx: 125, cy: 14, r: 5.3333 }],
    delay: 0,
  },
  {
    id: "circuit-2",
    // Igual al primero (linea recta + nodo), pero mas corto.
    paths: ["M0 56 L34 56"],
    circles: [{ cx: 34, cy: 56, r: 5.3333 }],
    delay: 0.08,
  },
  {
    id: "circuit-3",
    // Path con escalon del Figma, proporciones escaladas a largo total = 95px.
    // Original: M0 26 -> sube -> doble escalon -> extremo en x=51.
    // Factor escala horizontal: 95/51 ≈ 1.863
    // x: 0, 47.5, 47.5, 68.5, 68.5, 95
    // y local (normalizado): tope=0, base=48.4
    paths: ["M0 48.4 L47.5 48.4 L47.5 0 L68.5 0 L68.5 25.7 L95 25.7"],
    circles: [{ cx: 95, cy: 25.7, r: 5.3333 }],
    delay: 0.16,
  },
];

const AnimatedCircuits = ({
  className = "",
  animateOnView = true,
  repeatOnView = true,
  strokeColor = "#2441FF",
  glowColor = "#FE71F4",
  glow = false,
  duration = 1.8,
  staggerDelay = 0.12,
  width = 100,
  height = 300,
  viewBox = "0 0 100 300",
  circuits = DEFAULT_CIRCUITS,
}: AnimatedCircuitsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: !repeatOnView,
    margin: "-100px",
  });

  const shouldAnimate = animateOnView ? isInView : true;

  return (
    <SVGContainer ref={ref} className={className}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <defs>
          {glow && (
            <filter
              id="circuit-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>

        {/* Renderizar cada circuito */}
        {circuits.map((circuit) => (
          <g key={circuit.id}>
            {/* Capas de trazos (base + brillante) */}
            {[false, true].map((isGlow) => (
              <g key={`${circuit.id}-${isGlow ? "glow" : "base"}`}>
                {circuit.paths.map((pathD, pathIndex) => (
                  <motion.path
                    key={`${circuit.id}-path-${pathIndex}-${isGlow ? "glow" : "base"}`}
                    d={pathD}
                    stroke={isGlow ? glowColor : strokeColor}
                    strokeWidth={isGlow ? 1.2 : 1.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={isGlow ? 0.5 : 1}
                    filter={isGlow && glow ? "url(#circuit-glow)" : "none"}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    variants={{
                      hidden: {
                        pathLength: 0,
                        opacity: 0,
                      },
                      visible: {
                        pathLength: 1,
                        opacity: isGlow ? 0.5 : 1,
                        transition: {
                          pathLength: {
                            duration,
                            delay:
                              circuit.delay +
                              (staggerDelay * (pathIndex + 1)) / 2,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            delay:
                              circuit.delay +
                              (staggerDelay * (pathIndex + 1)) / 2,
                          },
                        },
                      },
                    }}
                  />
                ))}
              </g>
            ))}

            {/* Nodos terminales */}
            {(circuit.circles ?? (circuit.circle ? [circuit.circle] : [])).map(
              (node, nodeIndex) => (
                <motion.circle
                  key={`${circuit.id}-node-${nodeIndex}`}
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill={strokeColor}
                  initial="hidden"
                  animate={shouldAnimate ? "visible" : "hidden"}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay:
                          circuit.delay +
                          (staggerDelay * circuit.paths.length) / 2 +
                          duration * 0.5 +
                          nodeIndex * 0.06,
                        duration: 0.35,
                        ease: "backOut",
                      },
                    },
                  }}
                />
              ),
            )}
          </g>
        ))}
      </svg>
    </SVGContainer>
  );
};

export default AnimatedCircuits;
