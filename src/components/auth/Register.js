import {useContext,useState} from 'react'
import ModalContext from '../../context/ModalContext';

const Register = (props) => {
    const {setModal} = useContext(ModalContext);
    const callLoginModal = () => {
        setModal({type : 'OPEN_MODAL',payload: props.current})
    }
    const [registerForm,setRegisterForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const register = (e) => {
        e.preventDefault();
        console.log(registerForm)
    }
   
    return (
        <form onSubmit={register}>
            <div className="modal__heading">
                <h3>Create Account</h3>
            </div>
            <div className="group">
                <input type="text"   className="group__control" placeholder="Enter your name" onChange={(e) => {setRegisterForm({...registerForm,name:e.target.value})}} value= {registerForm.name}/>
            </div>
            <div className="group">
                <input type="text"  className="group__control" placeholder="Enter your email" onChange={(e) => {setRegisterForm({...registerForm,email:e.target.value})}} value= {registerForm.email}/>
            </div>
            <div className="group">
                <input type="password"  className="group__control" placeholder="Create password" onChange={(e) => {setRegisterForm({...registerForm,password:e.target.value})}} value= {registerForm.password}/>
            </div>
            <div className="group flex">
                <input type="submit"  className="btn-dark" value="Register"/>
                <span onClick={callLoginModal}>Already have an account?</span>
            </div>
        </form>
    );
}



export default Register;