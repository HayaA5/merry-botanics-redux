import { useState, useEffect, useContext } from 'react'
import '../styles/Cart.css'
import { CartContext } from '../contexts/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Payment from './Payment';
import { UserContext } from '../contexts/UserContext';
function Cart(){
	const [user, setUser]=useContext(UserContext);
	const [cart,updateCart]=useContext(CartContext);	
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function removeFromCart(name) {
				
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant
			])
		} 
	

	useEffect(() => {
		document.title = `MB: ${total}$ shopping`
	}, [total])

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
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div className='one-article-in-cart' key={`${name}-${index}`}>
								{name} {price}$ x {amount}
								<button className='cart-btn' onClick={()=>{removeFromCart(name)}}>remove article</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}$</h3>
					<div className='cart-btns-container'>
					<button className='cart-btn' onClick={() => updateCart([])}>Empty cart</button>
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

export default Cart