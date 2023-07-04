import Header from './Header'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { CartProvider } from '../contexts/CartContext'


function App() {
	return (
		<div>
			<Header>
				<img src={logo} alt='Merry Botanics' className='mb-logo' />
				<h1 className='mb-title'>Merry Botanics</h1>
			</Header>
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

export default App