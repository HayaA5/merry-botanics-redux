import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import api from '../functions/API_Calls/apiCalls'
import { orderConfirmationMsg } from '../datas/emailTemplate'
import process from "process"; 
import {v4} from 'uuid';
import '../styles/Payment.css'
import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../contexts/CartStore';

const Payment=({reset})=>{
    const navigate=useNavigate();
    const [user, ]=useContext(UserContext)
    const { store } = useContext(ReactReduxContext)

    function handleClick(){
        const url= `${process.env.REACT_APP_BASE_PATH}/api/orders/addorder`
        const cartElmts= store.getState().reduce((acc,article)=>[...acc,{qty:article.amount,barcode:article.barcode}],[])
        const total=store.getState().reduce((acc, article)=>acc+article.amount*article.price,0)
        const data={
            receiptNumber:v4(), //create a random unique id (string)
            total:total,     
            email:user.email,
            cart:cartElmts
            }

        if (!user.email){
            navigate('/login');
        }else{
            //save in DB the order, update stock in DB and send a confirmation email
           const data2 =orderConfirmationMsg(user.email, "order confirmation", store.getState())
           const url2= `${process.env.REACT_APP_BASE_PATH}/api/email/sendemail`
           if(data2){
            api.post(url, data).then(()=>api.post(url2, data2)).then(reset()).then( setTimeout(()=>navigate('/receipt'),1000));
           }
                        
        }
    }

    return(
        <div>
        <button className='payment-btn' onClick={handleClick}>Payment</button>
        </div>
    )
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)