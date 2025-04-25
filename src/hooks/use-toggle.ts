import { useEffect, useState } from "react";

const useToggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);
  return { isSidebarOpen, OpenSidebar, CloseSidebar };
};

export default useToggle;
