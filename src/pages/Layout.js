import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'

function Layout() {
	return (
		<div>
			<Header/>
			<div className='mb-layout-inner'>
				{/* <Cart cartLS={cartFromLocalStorage} logout={logout}/> */}
				<Cart />
				<ShoppingList/>
			</div>
			<Footer />
		</div>
	)
}
export default Layout