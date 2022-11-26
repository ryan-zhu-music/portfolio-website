import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const hasWindow = typeof window !== "undefined";

  function getWindowScrollPosition() {
    const x = hasWindow ? window.pageXOffset : null;
    const y = hasWindow ? window.pageYOffset : null;
    return { x, y };
  }

  const [scrollPosition, setScrollPosition] = useState(
    getWindowScrollPosition()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleScroll = () => {
        setScrollPosition(getWindowScrollPosition());
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);

  return scrollPosition;
}
