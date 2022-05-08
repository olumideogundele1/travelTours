const DestinationsReducer = (state,action) => {
    const {type,payload} = action;
    if(type === 'DETAILS'){
        const destination = state.destinations.find(
            (destination) => destination.id === parseInt(payload)
        );
        return {
            ...state,
            details: destination
        };
    }else if(type === 'CITIES'){
       const filteredCity = state.cities.filter(
           (city) => city.destinationId === parseInt(payload) 
        );
        return {
            ...state,
            filteredCities: filteredCity
        }
    }
    else{
        return state;
    }
   
}

export default DestinationsReducer;