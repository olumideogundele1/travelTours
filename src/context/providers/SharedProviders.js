import { useReducer } from "react"
import SharedReducer from "../reducers/SharedReducer"
import services from "../../data/services"
import SharedContext from "../SharedContext"

const SharedProviders = (props) => {

    const [sharedData,dispatch] = useReducer(SharedReducer,{
        servicesData: services
    })

    return (
        <SharedContext.Provider value={{sharedData,dispatch}}>
            {props.children}
        </SharedContext.Provider>
    )
}

export default SharedProviders;