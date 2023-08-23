import '../styles/Register.css'
import { useState , useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
//import api from "../../Functions/API_Calls/apiCalls";
import api from '../functions/API_Calls/apiCalls';
//import UserContext from '../contexts/UserContext'
import { Link } from 'react-router-dom';

function Register() {
    document.title = 'Register'
    //setInputsObj({ ...inputsObj, [e.target.id]: e.target.value });
   // const { setUser } = useContext(UserContext);
    const [fullName, setFullName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [message, setMessage] = useState(false),
        [passwordVerification, setPasswordVerification] = useState(), //add a verification
        navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "/users/register"
        const data = {
            fullName,
            email,
            password
        }
    
        const result=  api.post(url, data).then(data=>{
            console.log('data in then',data.code);
            if(data.code==200){
                console.log('navigate to login');
                navigate('/login');
        
            }else {
                setMessage("input error")
                setTimeout(() => {
                    setMessage(false)
                }, 1500)
            }
        })

    }
const checkPasswords=()=>{
    debugger;
    if(password && passwordVerification){
        const x= password===passwordVerification?true:false;
       // console.log(x?'identiques':'differents')
        return x;
    }
    
    return true;
}
    return (
        <div className='registration_container'>
            <h2>Register:</h2>
            <form onSubmit={handleSubmit}>
                <div className='form_group'>
                    <label htmlFor="username">your name: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="user name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className='form_group'>
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form_group'>
                    <label htmlFor="password">password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="choose a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={checkPasswords}
                        required
                    />
                </div>
                <div className='form_group'>
                    <label htmlFor="ConfirmPassword">confirm password:</label>
                    <input
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        placeholder="confirm the password"
                        value={passwordVerification}
                        onChange={(e) => setPasswordVerification(e.target.value)}
                        onBlur={checkPasswords}
                        required
                    />
                </div>
                <button type="submit" className='btn_register'>Register</button>
            </form>
            <div>You already have an account?
        <Link className='link' to="/login">Login</Link>
      </div>
            {message}
        </div>
    );
};

export default Register
