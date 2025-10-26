import { useEffect } from "react";

export const useScrollRestoration = (key) => {
  useEffect(() => {
    // restore scroll
    const savedScroll = sessionStorage.getItem(key);
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [key]);
};
