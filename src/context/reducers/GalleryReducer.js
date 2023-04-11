const GalleryReducer = (state, action) => {
  if (action.type === "OPEN_LIGHTBOX") {
    return {
      ...state,
      lightBoxstatus: true,
      currentLightBox: action.payload,
    };
  }
  return state;
};

export default GalleryReducer;
