import { useState , useContext,useEffect } from 'react'
//import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { CartContext } from '../contexts/CartContext'
import Loader from './Loader'
//function ShoppingList({ cart, updateCart }) {
function ShoppingList(){
	// const [cart,updateCart]=useContext(CartContext);	
	const [activeCategory, setActiveCategory] = useState('')
	const [plantList, setPlantList]=useState([]);
	

  function getPlantList(){
        fetch('http://localhost:3001/api/items/allitems').then(res=>res.json())
        .then(res=>{setPlantList(res); console.log(res)})
    }
    useEffect(getPlantList,[]);
	//setPlantList(plantList.map(plant=>))

	if( plantList.length==0) {
		console.log('plantlist',plantList)
		return   <Loader/>
	}
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
	const xx=plantList.reduce( (acc, plant)=>acc.concat({...plant, stockReal:plant['stock']}),[])
	//const yy=plantList.reduce((acc,plant)=>[...acc,{...plant, stockReal:0}])
console.log('xx',xx)
//console.log('yy',yy)
//setPlantList(xx)
// 	function addToCart(barcode,name, price) {
// 		debugger;
// 		//const currentPlantAdded = cart.find((plant) => plant.name === name)
// 		const currentPlantAdded = cart.find((plant) => plant.barcode === barcode)
// 		//const currentPlant = plantList.find((plant) => plant.name === name)
// 		//plantListFilteredCurrentPlant()
// 		if (currentPlantAdded) {
// 			const cartFilteredCurrentPlant = cart.filter(
// 				(plant) => plant.name !== name
// 			)
// 			updateCart([
// 				...cartFilteredCurrentPlant,
// 				{barcode, name, price, amount: currentPlantAdded.amount + 1 }
// 			])
// 		} else {
// 			updateCart([...cart, { barcode,name, price, amount: 1 }])
// 		}
// 		//setPlantList([...xx,{}])
// 	}
//  function inStock(barcode, stock){
// 	if (cart.length>0){
// 	const currentPlantAdded = cart.find((plant) => plant.barcode === barcode);
	
// 	console.log('curr',currentPlantAdded);
// 	return (stock-currentPlantAdded.amount)>0
// 	}else{
// 		return stock>0
// 	}
// 	//console.log('bla',currentPlantAdded)
//  }
	return (
		<div className='mb-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='mb-plant-list'>
				{plantList.map(({ barcode, cover, name, water, light, price, category, stock, stockReal=stock }) =>
					!activeCategory || activeCategory === category ? (
						<div key={barcode}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								barcode={barcode}
								stock={stock}
							/>
							{/* <button onClick={() =>{ addToCart(barcode,name, price);}} className={`md-add-btn ${stock==0 ? 'btn-disabled' : ''}`} disabled={inStock(barcode, stock)}>Add</button> */}
							{/* <button onClick={() =>{ addToCart(barcode,name, price); }} className={`md-add-btn ${stock==0 ? 'btn-disabled' : ''}`} disabled={stock==0}>Add</button> */}

						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList