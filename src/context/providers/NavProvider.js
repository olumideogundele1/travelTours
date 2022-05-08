import {useReducer} from 'react';
import NavContext from '../NavContext';
import NavReducer from '../reducers/NavReducer';


const NavProvider = (props) => {
    const [nav,setNav] = useReducer(NavReducer,false);

    return (
        <NavContext.Provider value = {{nav,setNav}}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavProvider;
