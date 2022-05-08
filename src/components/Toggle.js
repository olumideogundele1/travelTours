import {useContext} from 'react';
import NavContext from '../context/NavContext';

const Toggle = () => {
    const {nav,setNav} = useContext(NavContext);
    const openNav = () => { 
        setNav({type: 'NAV_TOGGLE'})
    }
    return (
        <div className={nav ? "toggle__close" : "toggle__open"} onClick={openNav}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}


export default Toggle;