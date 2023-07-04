import { useState } from 'react'
import '../styles/Footer.css'
import { Tooltip } from 'react-tooltip'
import { useRef } from 'react'

function Footer() {
	const [displayTooltip, setDistplayTooltip]=useState(false);
	const emailInput=useRef();

	function handleBlur() {
		setDistplayTooltip(emailInput.current.value.length==0 || emailInput.current.value.includes('@') && emailInput.current.value.indexOf('@')<emailInput.current.value.length-1?false:true);
		setTimeout(()=>setDistplayTooltip(false),3000)
	}

	return (
		<footer className='mb-footer'>
			<div className='mb-footer-elem'>
				Got a passion for plants? 🌿🌱🌵
			</div>
			<label for='mail'  className='mb-footer-elem'>Enter your email :</label>
			{/* <div className='invalidMsg-container'>  */}
			<input className="aa"
				placeholder='enter your email'
				onBlur={handleBlur}
				type='email'
				name='mail'
				id='mail'
				ref={emailInput}
			/>	
				  {displayTooltip ? <div className='invalidMsg'>invalid email</div>:null}
			{/* </div> */}
		</footer>
	)
}

export default Footer