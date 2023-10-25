
import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import { UserProvider } from './contexts/UserContext'
import './styles/App.css'
import Orderconfirmation from './pages/Orderconfirmation'

function App() {
	return (
    <UserProvider>
		<div className={'fadeIn'}>	
  			<Routes>
          		<Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>}/>
				<Route path="/receipt" element={<Orderconfirmation/>}/>
          		<Route path="*" element={<Layout/>} />
        	</Routes> 
		</div>	
    </UserProvider>
	)
}
export default App