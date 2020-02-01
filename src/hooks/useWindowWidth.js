import { useState, useEffect } from "react";

const getWindowWidth = () => {
  return window.innerWidth;
};

export default () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
