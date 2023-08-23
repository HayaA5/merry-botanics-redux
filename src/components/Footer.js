import { useState,useEffect } from 'react'
import '../styles/Footer.css'
import { useRef } from 'react'
import { contactMessage } from '../datas/emailTemplate'
import api from '../functions/API_Calls/apiCalls'
import validator from 'validator'

function Footer() {
	const [displayTooltip, setDistplayTooltip]=useState(false);
	const emailInput=useRef();
	const [email, setEmail]=useState('');

	  async function handleSubmit(){
	 const data =contactMessage(emailInput.current.value, "contact message")
const url='http://localhost:3001/api/email/sendemail';

	  const result = api.post(url, data).then(data=>{
		console.log('data in then',data);
	  setEmail('');
	  emailInput.current.value=''
	})
	  }
	

	function handleBlur() {
		setDistplayTooltip(emailInput.current.value.length==0 || emailInput.current.value.includes('@') && emailInput.current.value.indexOf('@')<emailInput.current.value.length-1?false:true);
		setTimeout(()=>setDistplayTooltip(false),3000)
	}

   function handleChange(e){
	//debugger;
	setEmail(e.currentTarget.value)
   }

	return (
		<footer className='mb-footer'>
			<div className='mb-footer-elem'>
				Got a passion for plants? 🌿🌱🌵
			</div>
			<label for='mail'  className='mb-footer-elem'>Enter your email :</label>
			{/* <div className='invalidMsg-container'>  */}
			<div className='email'>
			<input className="inputFooter"
				placeholder='enter your email'
				onBlur={handleBlur}
				type='email'
				name='mail'
				id='mail'
				ref={emailInput}
				onChange={handleChange}
			/>	
			{/* <button className={`mb-send-btn ${!validator.isEmail(emailInput.current?.value)? 'btn-disabled' : ''}`}  onClick={handleSubmit} disabled={!validator.isEmail(emailInput.current?.value)}>send</button> */}
			<button className={`mb-send-btn ${!validator.isEmail(email)? 'btn-disabled' : ''}`}  onClick={handleSubmit} disabled={!validator.isEmail(email)}>send</button>

			</div>
				  {displayTooltip ? <div className='invalidMsg'>invalid email</div>:null}
			{/* </div> */}
		</footer>
	)
}

export default Footer