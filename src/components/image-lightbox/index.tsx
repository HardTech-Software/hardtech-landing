"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Icon from "@/components/icon";
import {
  CloseButton,
  CounterText,
  Figure,
  Layer,
  NavRoundButton,
  PortalRoot,
} from "./styles";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

const ImageLightbox = ({
  isOpen,
  onClose,
  images,
  activeIndex,
  onActiveIndexChange,
}: ImageLightboxProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeIndex =
    images.length > 0 ? Math.min(Math.max(activeIndex, 0), images.length - 1) : 0;
  const src = images[safeIndex];
  const canPrev = safeIndex > 0;
  const canNext = safeIndex < images.length - 1;

  const goPrev = useCallback(() => {
    if (canPrev) onActiveIndexChange(safeIndex - 1);
  }, [canPrev, onActiveIndexChange, safeIndex]);

  const goNext = useCallback(() => {
    if (canNext) onActiveIndexChange(safeIndex + 1);
  }, [canNext, onActiveIndexChange, safeIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!mounted || !isOpen || typeof document === "undefined" || !src) {
    return null;
  }

  const node = (
    <PortalRoot
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de capturas del proyecto"
      onClick={onClose}
    >
      <Layer>
        <CloseButton
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar vista ampliada"
        >
          ×
        </CloseButton>

        {canPrev && (
          <NavRoundButton
            type="button"
            $side="left"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Imagen anterior"
          >
            <Icon name="chevron-left" width="22" height="22" color="#ffffff" />
          </NavRoundButton>
        )}

        {canNext && (
          <NavRoundButton
            type="button"
            $side="right"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Imagen siguiente"
          >
            <Icon name="chevron-right" width="22" height="22" color="#ffffff" />
          </NavRoundButton>
        )}

        <Figure onClick={(e) => e.stopPropagation()}>
          <Image
            src={src}
            alt={`Captura ampliada ${safeIndex + 1} del proyecto`}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "contain" }}
          />
        </Figure>

        <CounterText
          aria-live="polite"
          onClick={(e) => e.stopPropagation()}
        >
          {safeIndex + 1} / {images.length}
        </CounterText>
      </Layer>
    </PortalRoot>
  );

  return createPortal(node, document.body);
};

export default ImageLightbox;
