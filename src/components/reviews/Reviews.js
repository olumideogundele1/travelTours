import { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import reviews from "../../data/reviews";
import ReviewBody from "./ReviewBody";
const Reviews = () => {
  const [heading] = useState("What our customers are saying?");
  const {
    sharedData: { reviewsData },
  } = useContext(SharedContext);
  return (
    <div className="reviews">
      <div className="container">
        <h2 className="heading animation">{heading}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {reviewsData.length > 0 ? reviewsData.map((data, index) => <ReviewBody key={index} review={data} />) : ""}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
