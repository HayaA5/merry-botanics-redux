import React, { useState , useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../functions/API_Calls/apiCalls';
import '../styles/Login.css'
import {UserContext} from '../contexts/UserContext'
import {AiOutlineEye} from 'react-icons/ai'
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../contexts/CartStore';

function Login({reset}) {
  document.title = 'Login'
  const [,setUser] = useContext(UserContext);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "/users/login"
    const data={
      email:e.currentTarget.email.value,
      password:e.currentTarget.password.value
    }
   
    api.post(url, data).then(result=>{
      if (result.message.token) {//change in backend not so much "nested"
        localStorage.setItem('token', result.message.token);
        setUser(result.message.userDetails);
        //setCart(JSON.parse(localStorage.getItem('cart')))
        reset();
        navigate('/') 
       
      } else {
        setMessage('email or password is not valid')
        setTimeout(() => {
            setMessage('')
        }, 1500)
      }
    });
    
  }
 
  return (
    <div className='login_container fadeIn'>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
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
            placeholder="password"
            required
          />
          <AiOutlineEye onClick={()=>{setDisplayPassword(!displayPassword)}} />
          </div>
        </div>
        <button type="submit" className='btn_login'>Login</button>
      </form>

      <div>You still don't have any account?
        <Link className='link' to="/Register">Register</Link>
      </div>
      <div className='errorMessage'>{message}</div>
    </div>
   
  );

}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

