import { useContext, useState } from "react";
import SharedContext from "../context/SharedContext";
import ServicesList from "./ServicesList";

const Services = () => {
    const {sharedData: {servicesData}} = useContext(SharedContext)
    const [state] = useState({
        heading: 'Why customers love travel friends? because we provide unique services',
        subHeading: ''
    })
    return (
        <div className="services">
            <div className="services__contents">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services__content__container">
                        <div className="col-6 p-15">
                            <div className="services__left">
                                <h1 className="services__left__heading">{state.heading}</h1>
                                <p className="services__left__paragraph">
                                Our aim is to provide professional and unique services to customers, 
                                and we have provided high quality services to our customers thats why
                                they love travel and friends!!!
                                </p>
                            </div>
                        </div>
                        <div className="col-6 p-15">
                            <ServicesList services={servicesData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;