import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Footer } from "..";
import LoadingScreen from "../loading-screen";
import { LoadingContext } from "@/lib/loading-context";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh so the page
    // always starts at the top while the loading overlay is visible.
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const startedAt = performance.now();
    const totalDuration = 1600;

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);
        // Hold at 100% for 600ms so the completed state is visible,
        // then let AnimatePresence fade-out the overlay (≈450ms).
        window.setTimeout(() => {
          setLoading(false);
        }, 720);
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <LoadingContext.Provider value={loading}>
      <LoadingScreen isVisible={loading} progress={progress} />
      {/* Content is always in the DOM for SEO/indexing. While loading, it is
          hidden from assistive tech and made non-interactive via aria-hidden
          and the inert attribute. The LoadingScreen overlay (z-index 999,
          position fixed, inset 0) covers it visually. */}
      <div
        aria-hidden={loading ? "true" : undefined}
        // @ts-expect-error — `inert` is a valid HTML boolean attribute but not yet in React's types
        inert={loading ? true : undefined}
      >
        <Header />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </div>
    </LoadingContext.Provider>
  );
};

export default Layout;
