import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const {
    galleryData: { gallery },
    dispatch,
  } = useContext(GalleryContext);
  const [heading] = useState("Travelers captured images");
  return (
    <div className="gallery">
      <div className="container">
        <h2 className="heading">{heading}</h2>
        <div className="row">
          {gallery.length > 0 ? gallery.map((data, index) => <GalleryImage key={index} gallery={data} />) : ""}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
