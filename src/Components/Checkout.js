import React, { Component } from 'react'
import axios from 'axios'


export default class Checkout extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      price: 0
    }
  }

  // componentDidMount = (previousProps) => {
  //   if( previousProps.cart !== this.props.cart ) {

  //     let sum = this.props.cart.reduce(( total, c ) => total += c.price, 0 )
      
  //     this.setState({
  //       price: sum
  //     })
  //   }
  // }

  sum = () => {
    
  }


  order = () => {
    axios.post(`/api/orderCakes`, this.state.price)
    .then( res => {
      this.setState({
        price: 0
      })
    }).catch( err => {
      console.log( err )
    })
  }

  clearCart = () => {
    
  }



  render() {

    let chosenCakes = this.props.cart.map((cakes, i) =>
    <div className="cart-cake" key={ i }>
      <img src={`${ process.env.PUBLIC_URL }${ cakes.imgUrl }`} alt="cake" />
      { cakes.name } <br/>
      { cakes.price }
    </div>)

    return (

      <div className="flex-cart-container">
      
        <h2>Your Cart!</h2>

        <div className="cart">
          { chosenCakes.length === 0 ? <p>Click on cake images to add the cake to your cart!</p> : <ol>{ chosenCakes }</ol> }
          { this.price }
        </div>

          <button className="checkout-btn" onClick={ this.order() }>Checkout</button>


      </div>

    )
  }
}