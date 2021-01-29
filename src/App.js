import React, { Component } from 'react' 
import './App.css';
import axios from 'axios'

import Header from './Components/Header'
import DisplayCakes from './Components/DisplayCakes'
import Checkout from './Components/Checkout'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      cakes: [],
      cart: []
    }
  }

  
  //!  Uses HTTP request .get
  componentDidMount() {
    axios.get(`/api/cakes`)
    .then(res => {
      // console.log({res})
      this.setState({
      cakes: res.data
    }) 
    // console.log(this.state)
  }).catch( err => console.log( err ))
  }



  //! Hopefully add works
  addToCart = ( cake ) => {
    if( this.state.cart.includes( cake )) {
      let i = this.state.cart.findIndex( c => cake.name === c.name )
      let item = this.state.cart[i]
      let cartCopy = this.state.cart.slice()
      item.quantity++
      cartCopy.splice( i, 1, item )
      this.setState({
        cart: cartCopy
      })
    } else {
      this.setState({
        cart: [ ...this.state.cart, cake ]
      })
    }
  }



  render() {
    // console.log(this.state.cakes)

    return (
      <div className="App">

        <Header />

      <div className="side-by-side">

        <DisplayCakes cakes={ this.state.cakes } addToCart={ this.addToCart } />

          <Checkout cart={ this.state.cart } />

      </div>

      </div>
    )
  }
}