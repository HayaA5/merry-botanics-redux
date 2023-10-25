import logo from '../assets/logo.png'

function contactMessage(email, title) {
    const msg =
`<div>
    <h1 style="font-weight: 600; font-size: 20px;">
        Welcome to Merry Botanics!!
    </h1>
    <p>
        We will be in touch with you in the future and send you offers
    </p>
    <p style="color:red">
        Merry botanics team
        <br>
        Follow us on: <a href="http://localhost:3000/">our website</a>
    </p>
</div>`

    return { email: email, title: title, html: msg };
}

function orderConfirmationMsg(email, title, cart){
    debugger
    if (!email|| !title || !cart) {
        return false
    }
    const total=cart.reduce((acc, article)=>acc+article.amount*article.price,0)
    const cartItems = () => {
        let str = "";
        cart.map((item) => {
          str += `${item.name} - ${item.amount} piece${item.amount>1 ? 's':''} at  ${item.price} $ = ${item.price*item.amount} $ <br>`;
        });
        return str;
      };

    const msg= 
`<div>
<h1 style="font-weight: 600; font-size: 20px; color: rgba(49,181,114,1);">
   Order corfirmation
</h1>

<p style="color:black; font-size:15px; padding-top:10px">
    Your order has been saved and you will get it in one week
    details:<br>
   ${cartItems()}
   <div style="color:black; font-size:20px; padding-top:8px;">
   TOTAL: ${total} $
   </div>
</p>
</div>`

//<img src=${logo} alt="Merry Botanics Logo"  style="height: 45px; width: 45px;" />
    return { email: email, title: title, html: msg };
}

export {contactMessage, orderConfirmationMsg}