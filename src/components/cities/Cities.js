
import CityContent from "./CityContent";
import CityImage from "./CityImage";

const Cities = ({cities,name}) => {
    
    return (
        <div className="cities">
            <div className="container">
                <div className="cities__container">
                    <div className="heading">
                        Cities in {name}
                    </div>
                    <div className="row">
                        {cities.length > 0 ? cities.map((city) => (
                            <div className="col-3 p-15" key={city.id}>
                                <div className="cities__body">
                                   <CityImage image={city.image} status={city.status} />
                                    <CityContent city={city} />
                                </div>
                            </div>
                        )) : 'No Cities'}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cities;