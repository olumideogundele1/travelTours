import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [state] = useState({
    logo: "/assets/footer/logo.png",
    intro: "Travel Friends is a travelling agency, we arrage tours to the world famous sites",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt="footer logo" />
      </div>
      <p className="footer__intro__msg animation">{state.intro}</p>
    </div>
  );
};

export default FooterIntro;
