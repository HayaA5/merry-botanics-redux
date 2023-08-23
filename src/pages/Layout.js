import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import { CartProvider } from '../contexts/CartContext'





function Layout() {
	return (
		<div>
			
			
			<Header/>
		
			<CartProvider>
			<div className='mb-layout-inner'>
				<Cart/>
				<ShoppingList/>
			</div>
			</CartProvider>
			<Footer />
			
		</div>
	)
}

export default Layout