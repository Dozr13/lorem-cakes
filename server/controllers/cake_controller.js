let { cakes } = require('../data.js')
// let id = 10

let cart = []
let orders = []


// console.log(cakes)
module.exports = {
  getCakes: ( req, res ) => {
    res.status( 200 ).send( cakes )
  },

  addCake: ( req, res ) => {
    // console.log(req.body)
    const { id, name, flavor, color, allergyInfo, price, imgUrl } = req.body.cake
    // console.log(id)
    let cake = {
      id,
      name,
      flavor,
      color,
      allergyInfo,
      price,
      imgUrl,
      quantity: 1
    }
    let index = cart.findIndex( cake => cake.id === id )
    if ( index > -1 ) {
      cart[index].quantity += 1
    } else {
      cart.push( cake )
    }
    // console.log(cart)
    res.status( 200 ).send( cart )
  },


// * if statement is there for alt use; for if I want to make it so the - quantity button can simply remove an item if it's val is already 1
  updateCake: ( req, res ) => {
    const index = cart.findIndex( cake => cake.id === +req.params.id )
    // console.log('something')
    if ( +req.params.quantity === 0 ) {
      cart.splice( index, 1 )
    } else {
      cart[index].quantity = +req.params.quantity
    }
    res.status(200).send(cart)
  },

  deleteCake: ( req, res ) => {
    cart.splice( cart.findIndex( cake => cake.id === +req.params.id ), 1 )
    res.status( 200 ).send( cart )
  },

  addOrder: ( req, res ) => {
    orders.push( req.body )
    cart = []
    // console.log(orders)
    res.status(200).send( req.body )
  }
}