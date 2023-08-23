import '../styles/Header.css'
import { BiLogIn ,BiLogOut,BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {UserContext} from '../contexts/UserContext'
import { useContext } from 'react';

function Header() {
  const [user,setUser] = useContext(UserContext);
  debugger;
	return <div className='mb-header'>
		<img src={logo} alt='Merry Botanics' className='mb-logo' />
				<h1 className='mb-title'>Merry Botanics</h1>

{/* to change with fullName when DB will be updated */}
				
	  <div className='icon'>
{/* {!isLogin ? (
  ) : (
    <BiLogOut className={styles.iconlogout} onClick={()=>setisLogin(false)} />
  )} */}

  <Link to="/login"><BiUserCircle className='iconlogin' title='login'/></Link>
  {/* <BiLogIn/>
  <BiLogOut/> */}
{user.length>0 &&<div>Hello {user.fullName} !!</div> }
  
      </div>
	</div>


}

export default Header
