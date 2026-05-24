"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll-spy activation line: fixed header + upper viewport band. */
function getActivationOffset(): number {
  if (typeof window === "undefined") return 0;

  const header = document.getElementById("site-header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;

  return headerHeight + Math.round(window.innerHeight * 0.2);
}

function getSectionTop(sectionId: string): number | null {
  const element = document.getElementById(sectionId);
  if (!element) return null;

  return element.getBoundingClientRect().top + window.scrollY;
}

/**
 * Returns the last section (in nav order) whose top has crossed the activation line.
 * Stable during smooth scroll and avoids ratio conflicts between overlapping sections.
 */
export function resolveActiveSection(sectionIds: readonly string[]): string {
  if (sectionIds.length === 0) return "";

  const activationPoint = window.scrollY + getActivationOffset();
  let activeSection = sectionIds[0];

  for (const sectionId of sectionIds) {
    const sectionTop = getSectionTop(sectionId);
    if (sectionTop === null) continue;

    if (sectionTop <= activationPoint + 1) {
      activeSection = sectionId;
    }
  }

  return activeSection;
}

function resolveInitialSection(sectionIds: readonly string[]): string {
  if (typeof window === "undefined" || sectionIds.length === 0) {
    return sectionIds[0] ?? "";
  }

  const hashId = window.location.hash.slice(1);
  if (hashId && sectionIds.includes(hashId)) {
    return hashId;
  }

  return resolveActiveSection(sectionIds);
}

export const useActiveSection = (sectionIds: readonly string[]) => {
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;
  const sectionIdsKey = sectionIds.join("|");

  const [activeSection, setActiveSection] = useState(() =>
    resolveInitialSection(sectionIds)
  );

  useEffect(() => {
    const syncActiveSection = () => {
      const next = resolveActiveSection(sectionIdsRef.current);
      setActiveSection((current) => (current === next ? current : next));
    };

    syncActiveSection();

    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;

    const queueSync = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        syncActiveSection();
      });
    };

    const onScroll = () => {
      queueSync();

      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(syncActiveSection, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", syncActiveSection);
    window.addEventListener("resize", syncActiveSection);

    if ("onscrollend" in window) {
      window.addEventListener("scrollend", syncActiveSection, { passive: true });
    }

    const postLoadSync = window.setTimeout(syncActiveSection, 100);
    const postHashSync = window.setTimeout(syncActiveSection, 350);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);

      if ("onscrollend" in window) {
        window.removeEventListener("scrollend", syncActiveSection);
      }

      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.clearTimeout(postLoadSync);
      window.clearTimeout(postHashSync);
    };
  }, [sectionIdsKey]);

  return activeSection;
};
