import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

const Gallery = () => {
  const {
    galleryData: { gallery, lightBoxStatus },
    dispatch,
  } = useContext(GalleryContext);
  const [heading] = useState("Travelers captured images");
  return (
    <>
      {lightBoxStatus ? <LightBox /> : ""}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55 animation">{heading}</h2>
          <div className="row">
            {gallery.length > 0 ? gallery.map((data, index) => <GalleryImage key={index} gallery={data} />) : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
