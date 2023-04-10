import { LazyLoadImage } from "react-lazy-load-image-component";
const GalleryImage = ({ gallery }) => {
  return (
    <div className="col-3">
      <div className="gallery__image">
        <LazyLoadImage src={gallery.image} />
      </div>
    </div>
  );
};

export default GalleryImage;
