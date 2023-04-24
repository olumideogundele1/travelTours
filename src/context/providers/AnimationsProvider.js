import { useEffect } from "react";
import AnimationContext from "../AnimationContext";

const AnimationsProvider = ({ children }) => {
  const scrollAnimations = () => {
    const elements = document.querySelectorAll(".animation");
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const viewPortHeight = window.innerHeight - 150;
      if (position < viewPortHeight) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);

  return <AnimationContext.Provider value>{children}</AnimationContext.Provider>;
};

export default AnimationsProvider;
