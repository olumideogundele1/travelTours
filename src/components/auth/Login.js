import {useContext,useState} from 'react'
import ModalContext from '../../context/ModalContext';

const Login = (props) => {
    const {setModal} = useContext(ModalContext);
    const callRegisterModal = () => {
        setModal({type : 'OPEN_MODAL',payload: props.current})
    }
    const [loginForm,setLoginForm] = useState({
       
        email: '',
        password: ''
    })

    const login = (e) => {
        e.preventDefault();
        console.log(loginForm)
    }
        return(
            <form onSubmit = {login}>
            <div className="modal__heading">
                <h3>Login </h3>
            </div>
           
            <div className="group">
                <input type="text"  className="group__control" placeholder="Enter your email"  onChange = {(e) => {setLoginForm({...loginForm,email: e.target.value})}} value = {loginForm.email}/>
            </div>
            <div className="group">
                <input type="password"  className="group__control" placeholder="Enter password" onChange = {(e) => {setLoginForm({...loginForm,password: e.target.value})}} value = {loginForm.password}/>
            </div>
            <div className="group flex">
                <input type="submit"  className="btn-dark" value="Login"/>
                <span onClick={callRegisterModal}>Create new account?</span>
            </div>
        </form>
        );
}

export default Login;