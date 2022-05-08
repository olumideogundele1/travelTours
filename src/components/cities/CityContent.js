import { LazyLoadImage } from "react-lazy-load-image-component"
import {BsStopwatch} from 'react-icons/bs'
import Facility from "./Facility";

 const CityContent = ({city}) => {
     return (
        <div className="cities__body__contents">
        <div className="cities__body__contents__top">
            <div className="cities__body__contents__top__name">
                {city.name}
            </div>
            <div className="cities__body__contents__top__duration">
                <BsStopwatch size={18} color='#df2189'/>
                <div className="cities__body__contents__top__duration__time">
                    {city.duration}
                </div>
            </div>
        </div>
        <div className="cities__body__contents__price">
            <span className="cities__body__contents__price__dollar">
                $
            </span>
            {`${city.price}.00`}
        </div>
        <Facility name='room' value={city.room} />
        <Facility name='food' value={city.food} />
        <div className="cities__body__contents__button">
            <button className="btn-dark-sm">buy now</button>
        </div>

    </div>
     );
 }

 export default CityContent;