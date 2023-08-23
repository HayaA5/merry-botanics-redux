import styles from './style.module.css'
import { useState } from 'react'
import api from '../../Functions/API_Calls/apiCalls'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function ChangePassword() {
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")
    const [isEqual, setIsEqual] = useState(false);
    const navigate = useNavigate()

    const handlePasswordChange = (e) => {
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        else {
            setPasswordVerification(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        if (password === passwordVerification && api.post("/users/detectingpasswordchange", { password, passwordVerification, token: localStorage.token }) !== "Password changed successfully") {
            setIsEqual(true);
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        localStorage.setItem('token', useParams.token);
    }, []);

    return (
        <div className='changePassword_container'>
            <div className='title'>
            <p>.איפוס סיסמא</p>
            <p>!קורה לכולנו </p>
            </div>
            <form>
       <label htmlFor="password">סיסמא חדשה</label>
       <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          placeholder="הזן סיסמא"
        />
        <label htmlFor="passwordVerification">אימות סיסמא</label>
        <input
          type="password"
          value={passwordVerification}
          onChange={handlePasswordChange}
          name="passwordVerification"
          placeholder="הזן סיסמא שוב"
        />
        <button className='btn_changePassword' type="button" onClick={handelSubmit}>
          המשך
        </button>
        {isEqual && <span className='error_message'>הסיסמא אינה זהה</span>}
      </form>
        </div>
    )
}

