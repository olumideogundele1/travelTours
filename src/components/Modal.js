import {useContext} from 'react'
import ModalContext from '../context/ModalContext';
const Modal =  (props) => {
    const {modal,setModal} = useContext(ModalContext);
    const close = (e) => {
        // console.log(e.target.getAttribute('class'))
        if(e.target.getAttribute('class') === 'modal'){
            // closeModal()
            setModal({type: 'CLOSE_MODAL'})
            
        }
    }
    return modal.modalStatus && modal.currentModal === props.current ? (
        <div className="modal" onClick={close}>
            <div className="modal__body">
                 {props.children}
            </div>
        </div>
    ) : ''
}

export default Modal;