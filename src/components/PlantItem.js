import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ReactReduxContext } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../contexts/CartStore';

function PlantItem({ cover, name, water, light, price ,barcode, stock, stockReal, addNewItem}) {
	const { store } = useContext(ReactReduxContext);
	const [actualStock, setActualStock]=useState(stockReal);

	useEffect(updateActualStock,[store.getState()])
 
function updateActualStock(){
	const plantInCart = store.getState().find((plant) => plant.barcode === barcode) ;
 	setActualStock( plantInCart?stock-plantInCart.amount:stock);
 }
	
	return (
		<li className='mb-plant-item'>
			<span className='mb-plant-item-price'>{price}$</span>
			<img className='mb-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} key={`water ${water}`} />
				<CareScale careType='light' scaleValue={light} key={`light ${light}`} />
			</div>
			<button onClick={()=>addNewItem (barcode, name, price)} className={`mb-add-btn ${actualStock<=0? 'btn-disabled' : ''}`} disabled={actualStock<=0}>Add</button>
		</li>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantItem)