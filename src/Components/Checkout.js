import React from 'react'



export default function Checkout(props){

  //! creates total sum of all cakes in checkout
  console.log(props.cart)
    let sum = props.cart.reduce((total, cake) => total += cake.price * cake.quantity, 0)
  
  //! map through cart array after it has been given an object to map through, and displaying values specified
  //! formatted price * quantity to be in USD
  //! added 3 buttons to adjust quantity of item in cart and also on eot remove item from cart

    let chosenCakes = props.cart.map((cakes, i) =>
    <div className="cart-cake" key={ i }>
      <img src={`${ process.env.PUBLIC_URL }${ cakes.imgUrl }`} alt="cake" />
      { cakes.name } <br/>
      { Intl.NumberFormat( 'en-US', { style:'currency', currency:'USD', } ).format( cakes.price * cakes.quantity ) } <br/>
     {/* { console.log(cakes)} */}
      { cakes.quantity }



        <button disabled={ cakes.quantity <= 1 } onClick={ () => { props.updateCart( cakes.id, cakes.quantity - 1 )}}>-</button>

        <button onClick={ () => { props.delete( cakes.id ) } }>Remove</button>

        <button onClick={ () => { props.updateCart( cakes.id, cakes.quantity + 1 )} }>+</button>



    </div>)

return (

      <div className="right">
      
        <h2>Your Cart!</h2>

        <div className="cart">
          { chosenCakes.length === 0 ? <p className="center-cart">Click on cake images to add the cake to your cart!</p> : <ol>{ chosenCakes }</ol> }
          { Intl.NumberFormat( 'en-US', { style:'currency', currency:'USD', } ).format(sum) }
        </div>

          { props.cart.length > 0 && <button className="checkout-btn" onClick={ props.order }>Checkout</button> }


      </div>

    )
}