import React from 'react'
import Cake from './Cake.js'
import NumberFormat from 'react-number-format';



export default function Checkout(props){

  //! creates total sum of all cakes in checkout
  // console.log(props.cart)
    let sum = props.cart.reduce((total, cake) => total += cake.price * cake.quantity, 0)
  
  //! map through cart array after it has been given an object to map through, and displaying values specified
  //! formatted price * quantity to be in USD
  //! added 3 buttons to adjust quantity of item in cart and also on eot remove item from cart

    let chosenCakes = props.cart.map((cakes, i) => <div key={ i }>
      <span class="cart-quantity">
      { cakes.quantity }
      </span>

      <Cake class="cart-cake" cake={ cakes } buttons={ [
      { class:"cart-btns", name: '-', cb: () => props.updateCart( cakes.id, cakes.quantity - 1 ), disable: cakes.quantity <= 1 }, 
      { class:"cart-btns", name: 'Remove', cb: () => props.delete( cakes.id ), disable: false },
      { class:"cart-btns", name: '+', cb: () => props.updateCart( cakes.id, cakes.quantity + 1 ), disable: false }
      ] }
      />


        </div>
    )

return (

      <div className="right">
{/* Cart Title */}
        <h2>Your Cart!</h2>
{/* Cart Contents */}
        <section className="cart">
          { chosenCakes.length === 0 ? <p>Click on the Add button to add cakes to your cart!</p> : <ol>{ chosenCakes }</ol> }
          
        </section>
{/* Total purchase Information */}
          <span id="total">
          { chosenCakes.length === 0 ? null : <NumberFormat value={ sum } displayType={ 'text' } thousandSeparator={true} prefix={ 'Total: $' } isNumericString={ true } decimalScale={ 2 } fixedDecimalScale={ true } /> }
          </span>
{/* Checkout Button */}
          { props.cart.length > 0 && <button className="checkout-btn" onClick={ props.order }>Checkout</button> }

      </div>

    )
}