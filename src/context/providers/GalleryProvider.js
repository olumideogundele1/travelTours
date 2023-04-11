import { useReducer } from "react";
import GalleryContext from "../GalleryContext";
import GalleryReducer from "../reducers/GalleryReducer";
import gallery from "../../data/gallery";

const GalleryProvider = (props) => {
  const [galleryData, dispatch] = useReducer(GalleryReducer, {
    gallery,
    lightBoxStatus: false,
    currentLightBox: {},
  });

  return <GalleryContext.Provider value={{ galleryData, dispatch }}>{props.children}</GalleryContext.Provider>;
};

export default GalleryProvider;
