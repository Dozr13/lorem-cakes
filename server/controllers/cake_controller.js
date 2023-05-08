let { cakes } = require("../data.js");

let cart = [];
let orders = [];

module.exports = {
  getCakes: (req, res) => {
    res.status(200).send(cakes);
  },

  addCake: (req, res) => {
    const { id, name, flavor, color, allergyInfo, price, imgUrl } =
      req.body.cake;
    let cake = {
      id,
      name,
      flavor,
      color,
      allergyInfo,
      price,
      imgUrl,
      quantity: 1,
    };
    let index = cart.findIndex((cake) => cake.id === id);
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push(cake);
    }
    res.status(200).send(cart);
  },

  updateCake: (req, res) => {
    const index = cart.findIndex((cake) => cake.id === +req.params.id);
    if (+req.params.quantity === 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = +req.params.quantity;
    }
    res.status(200).send(cart);
  },

  deleteCake: (req, res) => {
    cart.splice(
      cart.findIndex((cake) => cake.id === +req.params.id),
      1
    );
    res.status(200).send(cart);
  },

  addOrder: (req, res) => {
    orders.push(req.body);
    cart = [];
    res.status(200).send(req.body);
  },
};
