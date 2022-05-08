import { useContext,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import DestinationsContext from '../context/DestinationsContext';
import Header from '../components/Header';
import DestinationInfo from './DestinationInfo';
import Cities from './cities/Cities';

const Details = () => {
    const {data,dispatch} = useContext(DestinationsContext)
    const {details,filteredCities} = data;
    const {id} = useParams();
    
    useEffect(() => {
        dispatch({type: "DETAILS",payload:id});
        dispatch({type: "CITIES",payload: id});
        window.scroll(0,0)
    },[id])
    return (
        <>
           <Header heading={details.name} img={details.bigImage}></Header>
           <DestinationInfo details={details} />
           <Cities cities={filteredCities} name={details.name}/>
        </>
    )
}

export default Details;