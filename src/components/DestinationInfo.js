const DestinationInfo = ({ details }) => {
  return (
    <div className="destinationInfo">
      <div className="container">
        <div className="heading hedingAnimation">Overview</div>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p animation">{details.details}</p>
          </div>
        </div>
        <div className="heading hedingAnimation">Good To Know</div>
        <div className="row">
          <div className="col-8">
            <div className="destinationInfo__details">
              <div className="destinationInfo__details__head">Language</div>
              <div className="destinationInfo__details__text">{details.language}</div>
            </div>
            <div className="destinationInfo__details">
              <div className="destinationInfo__details__head animation">Currency</div>
              <div className="destinationInfo__details__text animation">{details.currency}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
