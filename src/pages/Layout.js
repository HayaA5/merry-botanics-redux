import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import { CartProvider } from '../contexts/CartContext'
//import { useLocation } from "react-router-dom";

function Layout() {
	
//const location = useLocation();
// let cartFromLocalStorage = location.state?.cart;
// let logout = location.state?.logout;


	return (
		<div>
			<Header/>
			 <CartProvider> 
			<div className='mb-layout-inner'>
				{/* <Cart cartLS={cartFromLocalStorage} logout={logout}/> */}
				<Cart />
				<ShoppingList/>
			</div>
			</CartProvider>
			<Footer />
		</div>
	)
}
export default Layout