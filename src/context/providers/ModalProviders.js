import {useReducer} from 'react';
import ModalContext from '../ModalContext';
import ModalReducer from '../reducers/ModalReducer';

const ModalProviders = (props) => {
    // const [state,dispatch] = useState({modalStatus: false});
//   const openModal = () => {
//     console.log('I am called')
//     dispatch({modalStatus: true});
//   }
//   const closeModal = () => {
//     dispatch({modalStatus: false})
//   }
const [modal,setModal] = useReducer(ModalReducer,{modalStatus: false,currentModal: ''});

  return (
    <ModalContext.Provider value={{ modal,setModal}}>
        {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProviders;