// argments: orderContext, array of furniture images 
// creator: Haya
//This function returns a string containing HTML and CSS code about the order 
// (selections & details about the client)

//TO DO: 
//not harded code with Michael function.
//need to be changed using real data
//need to be check when we send the email: text and CSS and images.
//import CurrentSelections from "../Components/CurrentSelections";
export function messageTemplate(email, title) { //userContext
    const msg =
        ` <head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email</title>
<style>
   
    .receipt {
        font-weight: 600;
        font-size: 20px;
    }

    .em {
        font-weight: 900;
    }

    .orderDetails {
        padding: 3px;
    }

    p {
        padding: 3px;
        margin: 0px;
    }
    img{
        width=150px;
        height=150px;
    }
    .underlined{
        border-bottom:black 2px black;
    }
</style>
</head>

<body style="direction:rtl;margin:5px; color:black">
<div>
    <p style="font-weight: 600; font-size: 20px;">
        איזה כיף!
        <br>
        ההזמנה שלך התקבלה אצלנו בנגריה
    </p>

    <h2>הארון שלך </h2>
    <hr width="70%" align="right">
    blabla blabla
       
</div>
</body>

</html>`

    return { email: email, title: title, html: msg };
}

// argments: orderContext, array of furniture images 
// creator: Haya
//This function returns a string containing HTML and CSS code about the order 
// (selections & details about the client)

//TO DO: 
//not harded code with Michael function.
//need to be changed using real data
//need to be check when we send the email: text and CSS and images.
//import CurrentSelections from "../Components/CurrentSelections";
function contactMessage(email, title) { //userContext
    console.log('contactmessage', email, title)
    const msg =
        ` 
<div>
    <h1 style="font-weight: 600; font-size: 20px;">
        Welcome to Merry Botanics!!
    </h1>
    <p>
        We will be in touch with you in the future and send you offers
    </p>
    <p style="color:red">
        Merry botanics team 
        Follow us on: <a href="http://localhost:3000/">our website</a>
    </p>
       
</div>

`

    return { email: email, title: title, html: msg };
}

function orderConfirmation(email, title, cart){
    console.log(cart);
    const msg =
    ` 
<div>
<h1 style="font-weight: 600; font-size: 20px;">
   Order corfirmation
</h1>
<p>
    Your order has been saved and you will get it in one week
    details:${cart[0].qty} : ${cart[0].barcode}
}
</p>
   
</div>

`

    return { email: email, title: title, html: msg };
}

export {contactMessage, orderConfirmation}