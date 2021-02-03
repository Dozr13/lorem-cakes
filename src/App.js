import React, { Component } from 'react' 
import './App.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  
// ! axios.GET
// * ensures component is mounted before requesting data
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


// ! axios.POST
// * addToCart adds selected item to cart []
  addToCart = ( cake ) => {
    console.log('add')
    axios.post( `/api/cakes`, { cake } )
    .then( res => {
      // console.log(res.data)
      this.setState({
        cart: res.data
      })
    }).catch( err => console.log( err ) )
  }



  
  
  
  
// * Checkout Component
// ! axios.POST
// * Checkout button logs the order and invokes Toast as well as empties the current cart by invoking this.clearCart()
  order = () => {
    axios.post(`/api/addOrder`, this.state.cart)
    .then( res => {
      let results = []
      for (let i = 0; i < res.data.length; i++) {
        results.push( `x${res.data[i].quantity} ${res.data[i].name}, ` )
      }
      // console.log(res.data[0])
      toast(`Your order of ${ results } has been successfully created!`)
    }).catch( err => {
      console.log( err )
    })
    this.clearCart()
  }
  
  clearCart = () => {
    this.setState({
      cart: []
    })
  }

// ! axios.PUT
// * updateCart adds quantity adjustments to each cart object in cart
  updateCart = ( id, quantity ) => {
    axios.put(`/api/cakes/${ id }/${ quantity }`)
    .then( res => {
      this.setState({
      cart: res.data
      })
    }).catch( err => console.log( err ))
  }

// ! axios.DELETE
// * delete removes an item from the cart
  delete = ( id ) => {
    axios.delete(`/api/cakes/${ id }`)
    .then( res => {
      // console.log( res.data )
      this.setState({
        cart: res.data
      })
    }).catch( err => {
      console.log( err )
    })
  }



  
  
  render() {
    // console.log(this.state.cakes)

    return (
// Whole Page div
      <div className="App">
{/* Toast Settings */}
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        <Header />
{/* Separates main sections */}
        <div className="side-by-side">
          <DisplayCakes cakes={ this.state.cakes } 
          addToCart={ this.addToCart } />
          <Checkout cart={ this.state.cart } 
          empty={ this.clearCart } 
          order={ this.order } 
          updateCart={ this.updateCart } 
          delete={ this.delete } />
        </div>

      </div>
    )
  }
}