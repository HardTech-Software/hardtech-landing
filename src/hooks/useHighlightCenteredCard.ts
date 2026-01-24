import { useEffect } from 'react';

type UseHighlightCenteredCardOptions = {
  cardSelector?: string;
  activeClass?: string;
  threshold?: number;
  mobileBreakpoint?: number;
};

export function useHighlightCenteredCard({
  cardSelector = '.info-card',
  activeClass = 'active',
  threshold = 0.5,
  mobileBreakpoint = 728,
}: UseHighlightCenteredCardOptions = {}) {
  useEffect(() => {
    const shouldEnable = () => {
      const isSmallScreen = window.innerWidth <= mobileBreakpoint;
      const isTouchLike =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      return isSmallScreen || isTouchLike;
    };

    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let resizeTimeout: NodeJS.Timeout | null = null;

    const clearActiveClasses = () => {
      document.querySelectorAll<HTMLElement>(cardSelector).forEach((el) => {
        el.classList.remove(activeClass);
      });
    };

    const updateClosestCard = () => {
      if (!shouldEnable()) {
        clearActiveClasses();
        return;
      }

      const cards = document.querySelectorAll<HTMLElement>(cardSelector);
      if (cards.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closest: HTMLElement | null = null;
      let minDistance = Infinity;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = card;
        }
      }

      clearActiveClasses();

      if (closest && minDistance < window.innerHeight * threshold) {
        closest.classList.add(activeClass);
      }
    };

    const handleScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateClosestCard);
    };

    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateClosestCard();
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    timeoutId = setTimeout(updateClosestCard, 400);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timeoutId !== null) clearTimeout(timeoutId);
      if (resizeTimeout !== null) clearTimeout(resizeTimeout);
      clearActiveClasses();
    };
  }, [cardSelector, activeClass, threshold, mobileBreakpoint]);
}