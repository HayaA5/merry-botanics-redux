import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classic',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classic',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},

	{
		name: 'pothos argente',
		category: 'classic',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classic',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,

		price: 20,
		isSpecialOffer:true
	},
	{
		name: 'olive tree',
		category: 'outdoor',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},

	{
		name: 'cactus',
		category: 'perennial plant',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilica',
		category: 'outdoor',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'succulent',
		category: 'perennial plant',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		isSpecialOffer:true
	},

	{
		name: 'mint',
		category: 'outdoor',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	}
]