import { useReducer } from "react";
import SharedReducer from "../reducers/SharedReducer";
import services from "../../data/services";
import SharedContext from "../SharedContext";
import reviews from "../../data/reviews";

const SharedProviders = (props) => {
  const [sharedData, dispatch] = useReducer(SharedReducer, {
    servicesData: services,
    reviewsData: reviews,
  });

  return <SharedContext.Provider value={{ sharedData, dispatch }}>{props.children}</SharedContext.Provider>;
};

export default SharedProviders;
