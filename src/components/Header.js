import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ heading, paragraph, children, img }) => {
  const [video] = useState({
    url: "/assets/video/header.mp4",
    img_tag: "/assests/video/screen.png",
    logo: "/assets/images/logo.png",
  });
  const { push } = useHistory();
  const goToHome = () => {
    push("/");
  };
  return (
    <div className="header">
      <div className="container pr">
        <div className="header__logo">
          <LazyLoadImage src={video.logo} alt="logo" onClick={goToHome} />
        </div>
      </div>
      <div className="header__video">
        {img ? (
          <LazyLoadImage src={img} alt={img} />
        ) : (
          <video src={video.url} autoPlay loop muted poster={video.img_tag}></video>
        )}
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">{heading}</h1>
              <p className="header__contents__text__child__p">{paragraph}</p>
              <div className="header__contents__text__child__link">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
