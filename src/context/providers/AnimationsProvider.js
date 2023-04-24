import { useEffect } from "react";
import AnimationContext from "../AnimationContext";

const AnimationsProvider = ({ children }) => {
  const scrollAnimations = () => {
    const animation = (elements, clasName) => {
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 150;
        if (position < viewPortHeight) {
          element.classList.add(clasName);
        } else {
          element.classList.remove(clasName);
        }
      });
    };
    const elements = document.querySelectorAll(".animation");
    animation(elements, "animate");
    const headingElements = document.querySelectorAll(".headingAnimation");
    animation(headingElements, "headingAnimate");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);

  return <AnimationContext.Provider value>{children}</AnimationContext.Provider>;
};

export default AnimationsProvider;
