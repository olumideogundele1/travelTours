

const NavReducer = (state,action) => {
    if(action.type === 'NAV_TOGGLE'){
       return !state;
    }
    return state;
}

export default NavReducer;