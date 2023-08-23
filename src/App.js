
import { Routes, Route, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
//import Content from './Content'
import { UserProvider } from './contexts/UserContext';
//import '../styles/App.css'
import './styles/App.css'

function App() {
	// const location = useLocation();
  //   const [displayLocation, setDisplayLocation] = useState(location);
  //   const [transitionStage, setTransistionStage] = useState("fadeIn");
  
  //   useEffect(() => {
  //     if (location !== displayLocation) setTransistionStage("fadeOut");
  //   }, [location]);
	return (
    <UserProvider>
    
		 <div className={'fadeIn'}>
  


			<Routes>
                <Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Layout/>} />
          </Routes> 
		{/* <Content/> */}
		</div>	
    </UserProvider>
	)
}

export default App