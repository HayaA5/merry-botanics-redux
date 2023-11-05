import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import Payment from './Payment';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../styles/Cart.css'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../contexts/CartStore';


//function Cart({cartLS,logout}){
function Cart({ cart,  removeItem, reset }){
	const location = useLocation();
	const logout = location.state?.logout;
	const [user,]=useContext(UserContext);
	const [isOpen, setIsOpen] = useState(true)
	const [messageLogIn, setMessageLogIn]=useState('');
	
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	useEffect(() => {
		document.title = `MB: ${total}$ shopping`
	}, [total])

useEffect( ()=>{
	//localStorage.setItem('cart', JSON.stringify(cart));
	setMessageLogIn('Aware! You are not logged in- data will be lost!'); 
} ,[cart]
	
)
// useEffect( ()=>{
// 	 logout &&  reset},[logout])

	return isOpen ? (
		<div className='mb-cart'>
			<button
				className='mb-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				close
			</button>
			<AiOutlineShoppingCart/>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					{!user.email &&<div className='message-login'>{messageLogIn}</div>}

					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div className='one-article-in-cart' key={`${name}-${index}`}>
								{name} {price}$ x {amount}
								<button className='cart-btn' onClick={()=>removeItem(name)}>remove article</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}$</h3>
					<div className='cart-btns-container'>
					<button className='cart-btn' onClick={reset}>Empty cart</button>
					<Payment cart={cart}/>
				</div>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}	
		</div>
	) : (
		<div className='mb-cart-closed'>
			<button
				className='mb-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open cart
			</button>	
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)