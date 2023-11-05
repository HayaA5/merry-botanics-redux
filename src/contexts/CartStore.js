import {createStore} from "redux"

const cart = (state = [], action) => {	
	const name=action.payload?.name;
	const barcode=action.payload?.barcode;
	const price=action.payload?.price;
  
	function removeFromCart() {		
	  const cartFilteredCurrentPlant = state.filter(
		(plant) => plant.name !== name
	  )
	  return([
		...cartFilteredCurrentPlant
	  ])
	} 

	function addToCart() {
		  const currentPlantAdded = state.find((plant) => plant.barcode === barcode)
		  if (currentPlantAdded) {
			  const cartFilteredCurrentPlant = state.filter(
				  (plant) => plant.name !== name
			  )
			  return([
				  ...cartFilteredCurrentPlant,
				  {barcode, name, price, amount: currentPlantAdded.amount + 1 }
			  ])
		  } else {
			  return([...state, { barcode,name, price, amount: 1 }])
		  }
	  }
  

	switch (action.type) {
		case "ADD-ITEM":
			return addToCart(barcode,name, price);
		case "RESET":
			return [];
		case "REMOVE-ITEM":
			return removeFromCart(name);
		//case "UPDATE-STOCK":
		default:
		return state;
		}
   };
   const store = createStore(cart);

   const mapStateToProps = (state /*, ownProps*/) => {
	return {
	cart: state
	}
   }
   
   const mapDispatchToProps = (dispatch) => {
	   return {
	   addNewItem: (barcode, name,price) => dispatch({ type: "ADD-ITEM" , payload:{barcode,name, price}}),
	   removeItem: (name) => dispatch({ type: "REMOVE-ITEM" , payload:{name}}),
	   reset: () => dispatch({ type: "RESET" }),
	   };
	  };
   export { store, mapStateToProps, mapDispatchToProps}