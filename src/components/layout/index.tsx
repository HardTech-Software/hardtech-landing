import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Footer } from "..";
import LoadingScreen from "../loading-screen";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    const totalDuration = 1600;

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setLoading(false);
        }, 120);
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} progress={progress} />
      {!loading ? (
        <>
          <Header />
          <ContentContainer>{children}</ContentContainer>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Layout;
