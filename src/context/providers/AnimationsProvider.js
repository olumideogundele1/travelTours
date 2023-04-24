import { useEffect } from "react";
import AnimationContext from "../AnimationContext";

const AnimationsProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <AnimationContext.Provider value>{children}</AnimationContext.Provider>;
};

export default AnimationsProvider;
