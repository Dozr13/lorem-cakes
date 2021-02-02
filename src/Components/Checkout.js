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

    let chosenCakes = props.cart.map((cakes, i) => <div className="cart-cake" key={ i }>

      <Cake cake={ cakes } buttons={ [
      { name: '-', cb: () => props.updateCart( cakes.id, cakes.quantity - 1 ), disable: cakes.quantity <= 1 }, 
      { name: 'Remove', cb: () => props.delete( cakes.id ), disable: false },
      { name: '+', cb: () => props.updateCart( cakes.id, cakes.quantity + 1 ), disable: false }
      ] }
      />
      
      { cakes.quantity }

        {/* <button disabled={ cakes.quantity <= 1 } onClick={ () => { props.updateCart( cakes.id, cakes.quantity - 1 )}}>-</button>

        <button onClick={ () => { props.delete( cakes.id ) } }>Remove</button>

        <button onClick={ () => { props.updateCart( cakes.id, cakes.quantity + 1 )} }>+</button> */}

        </div>
    )

return (

      <div className="right">
      
        <h2>Your Cart!</h2>

        <div className="cart">
          { chosenCakes.length === 0 ? <p className="center-cart">Click on cake images to add the cake to your cart!</p> : <ol>{ chosenCakes }</ol> }
          
        </div>
{/* can also use Intl.NumberFormat */}
          {/* { Intl.NumberFormat( 'en-US', { style:'currency', currency:'USD', } ).format(sum) } */}

          <div id="total">
          { chosenCakes.length === 0 ? null : <NumberFormat value={ sum } displayType={ 'text' } thousandSeparator={true} prefix={ 'Total: $' } isNumericString={ true } decimalScale={ 2 } fixedDecimalScale={ true } />
          }
          </div>

          { props.cart.length > 0 && <button className="checkout-btn" onClick={ props.order }>Checkout</button> }

      </div>

    )
}