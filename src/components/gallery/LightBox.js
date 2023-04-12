import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
const LightBox = () => {
  const {
    galleryData: { currentLightBox },
    dispatch,
  } = useContext(GalleryContext);
  const closeLightBox = (e) => {
    const eventClass = e.target.getAttribute("class");
    if (eventClass === "gallery__lightbox") {
      dispatch({ type: "CLOSE_LIGHTBOX" });
    }
  };
  return (
    <div className="gallery__lightbox" onClick={closeLightBox}>
      <h4>{currentLightBox.name}</h4>
      <div className="gallery__lightbox__card">
        <div className="gallery__lightbox__card__image">
          <LazyLoadImage src={currentLightBox.image} alt={currentLightBox.name} />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
