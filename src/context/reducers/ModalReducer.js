const ModalReducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    return {
      modalStatus: true,
      currentModal: action.payload,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      modalStatus: false,
      currentModal: "",
    };
  } else return state;
};

export default ModalReducer;
