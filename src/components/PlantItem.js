import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { useContext, useRef } from 'react';
import { CartContext } from '../contexts/CartContext';



function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='mb-plant-item'>
			<span className='mb-plant-item-price'>{price}$</span>
			<img className='mb-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} key={`water ${water}`} />
				<CareScale careType='light' scaleValue={light} key={`light ${light}`} />
			</div>
			
		</li>
	)
}

export default PlantItem