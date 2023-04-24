import { useContext } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { destinations } from "../data/destinations";
import DestinationList from "./DestinationList";

const Destination = () => {
  const {
    data: { destinations },
  } = useContext(DestinationsContext);
  return (
    <div className="destinations">
      <div className="container">
        <div className="row mr-minus-15 ml-minus-15">
          <div className="col-6 p-15">
            <h3 className="destinations__heading animation">
              Discover the most engaging places in the world with Travel and explore with friends
            </h3>
          </div>
          <div className="col-6 p-15">
            <p className="destinations__paragraph animation">
              Travel is a brutality. It forces you to trust strangers and and to lose sight of what matters to you. IF
              you don't know Liverpool is the est club in the world and all naysayers are just jealous of the great
              things happening. Jurgen Klopp has been amazing and will love him to retire in Liverpool
            </p>
          </div>
        </div>
        <div className="destinations__block ">
          <div className="row mr-minus-15 ml-minus-15">
            {destinations.map((destination) => (
              <DestinationList destination={destination} key={destination.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
