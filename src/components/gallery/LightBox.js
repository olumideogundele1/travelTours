import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
const LightBox = () => {
  const {
    galleryData: { currentLightBox },
  } = useContext(GalleryContext);
  return (
    <div className="gallery__lightbox">
      <h4>Nigeria</h4>
      <div className="gallery__lightbox__card">
        <div className="gallery__lightbox__card__image">
          <LazyLoadImage src="/assets/gallery/france.jpg" alt="image name" />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
