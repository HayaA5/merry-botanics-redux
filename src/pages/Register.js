import '../styles/Register.css'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../functions/API_Calls/apiCalls';
import { Link } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai'

function Register() {
    document.title = 'Register'
      const  [password, setPassword] = useState(''),
        [message, setMessage] = useState(false),
        [passwordVerification, setPasswordVerification] = useState(), //add a verification
        [passwordSame, setPasswordSame]=useState(true),
        [displayPassword, setDisplayPassword] = useState(false),
        [displayPasswordVer, setDisplayPasswordVer] = useState(false),
        navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.currentTarget.password.value!== e.currentTarget.confirmPassword.value){
            setMessage("passwords are different")
            setTimeout(() => {
                setMessage(false)
            }, 1500)
            return;
        }
        
        const url = "/users/register"

        const data = {
            fullName:e.currentTarget.username.value,
            email:e.currentTarget.email.value,
            password:e.currentTarget.password.value
        }

        api.post(url, data).then(data=>{
      
            if(data.code==200){
                navigate('/login');
            }else {
                setMessage(data.message)
                setTimeout(() => {
                    setMessage(false)
                }, 1500)
            }
        })

    }

const checkPasswords=()=>{
   setPasswordSame(!password  || !passwordVerification || password==passwordVerification? true:false);
}

    return (
        <div className='registration_container fadeIn'>
            <h2>Register:</h2>
            <form onSubmit={handleSubmit}>
                <div className='form_group'>
                    <label htmlFor="username">your name: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="user name"
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
                        required
                    />
                </div>
                <div className='form_group'>
                    <label htmlFor="password">password:</label>
                    <div className='passwordContainer'>
                    <input
                        type={displayPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="choose a password"
                        className={` ${passwordSame? '' : 'notValid'}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={checkPasswords}
                        required
                    />
                    <AiOutlineEye onClick={()=>{setDisplayPassword(!displayPassword);}} />
                    </div>
                </div>

                <div className='form_group'>
                    <label htmlFor="ConfirmPassword">confirm password:</label>
                    <div className='passwordContainer'>
                    <input
                       type={displayPasswordVer ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm the password"
                        className={` ${passwordSame? '' : 'notValid'}`}
                        value={passwordVerification}
                        onChange={(e) => setPasswordVerification(e.target.value)}
                        onBlur={checkPasswords}
                        required
                    />
                     <AiOutlineEye onClick={()=>{setDisplayPasswordVer(!displayPasswordVer)}} />
                     </div>
                </div>
                {/* <button type="submit" className={`btn_register ${password!==passwordVerification? 'btn-disabled':''}`} disabled={password!==passwordVerification}>Register</button> */}
                <button type="submit" className='btn_register'>Register</button>

            </form>
            <div>You already have an account?
        <Link className='link' to="/login">Login</Link>
      </div>
      <div className='errorMessage'>{message}</div>
        </div>
    );
};

export default Register
