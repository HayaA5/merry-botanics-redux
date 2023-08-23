import { Navigate, useNavigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
import api from '../functions/API_Calls/apiCalls'
 import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import '../styles/Payment.css'
import { orderConfirmation } from '../datas/emailTemplate'
import {CartContext} from '../contexts/CartContext'
const Payment=()=>{
    const [user, setUser]=useContext(UserContext)
    const [bla, setBla]=useState()
    const [cart, setCart]=useContext(CartContext)
console.log('cart', cart)
    const navigate=useNavigate();
    function handleClick(){
        console.log('user payment',user)
        //debugger;
        const url='http://localhost:3001/api/orders/addorder';
        debugger;
        const cartElmts= cart.reduce((acc,article)=>[...acc,{qty:article.amount,barcode:article.barcode}],[])
        const total=cart.reduce((acc, article)=>acc+article.amount*article.price,0)
    

        const data={
            receiptNumber:"33362", //create a random unique number!
            total:total,
                    
            email:user.email,
                    
            cart:cartElmts
            
            }
      

        if (user.length==0){
          
            navigate('/login');
        }else{
            const result=  api.post(url, data).then((data)=>setBla(data));
            

        
            
              
                     const data2 =orderConfirmation("aminovhaya@gmail.com", "order confirmation", data.cart)
                const url2='http://localhost:3001/api/email/sendemail';
                
                      const result2 = api.post(url2, data2).then(data2=>{
                        console.log('data in then',data2);
                     // setEmail('');
                     // emailInput.current.value=''
                    })
                      
                    
        }
    }
    
   /// console.log('payment function', setUser);
    //check user is connected==> context
    //send email with order

    //post order in DB
    return(
        <div>
        <button className='payment-btn' onClick={handleClick}>Payment</button>
        {/* {bla} */}
        </div>
    )
  
}
export default Payment