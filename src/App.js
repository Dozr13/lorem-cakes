import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header";
import DisplayCakes from "./Components/DisplayCakes";
import Checkout from "./Components/Checkout";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cakes: [],
      cart: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/cakes`)
      .then((res) => {
        this.setState({
          cakes: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  addToCart = (cake) => {
    axios
      .post(`/api/cakes`, { cake })
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  order = () => {
    axios
      .post(`/api/addOrder`, this.state.cart)
      .then((res) => {
        let results = [];
        for (let i = 0; i < res.data.length; i++) {
          results.push(`x${res.data[i].quantity} ${res.data[i].name}, `);
        }
        toast(`Your order of ${results} has been successfully created!`);
      })
      .catch((err) => {
        console.log(err);
      });
    this.clearCart();
  };

  clearCart = () => {
    this.setState({
      cart: [],
    });
  };

  updateCart = (id, quantity) => {
    axios
      .put(`/api/cakes/${id}/${quantity}`)
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  delete = (id) => {
    axios
      .delete(`/api/cakes/${id}`)
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <ToastContainer
          position='top-right'
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
        <div className='side-by-side'>
          <DisplayCakes cakes={this.state.cakes} addToCart={this.addToCart} />
          <Checkout
            cart={this.state.cart}
            empty={this.clearCart}
            order={this.order}
            updateCart={this.updateCart}
            delete={this.delete}
          />
        </div>
      </div>
    );
  }
}
