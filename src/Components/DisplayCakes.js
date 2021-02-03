import React, { Component } from 'react'
import Cake from './Cake'


// display 3 cakes at a time

export default class DisplayCakes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: 3,
      currentPage: 1
    }
  }

  // ! changeDisplay alters the amount of objects (cakes) displayed on each page

  changeDisplay = (val) => {
    this.setState({
      display: val, 
      currentPage: 1
    })
  }

  render() {

  // ! Equation to evaluate which cakes to display on each page based on the display setting chosen and currentPage your on

    let displayedCakes = []

    for(let i = this.state.currentPage * this.state.display - this.state.display; i < this.state.currentPage * this.state.display; i++) {
      if(this.props.cakes[i]) { displayedCakes.push(this.props.cakes[i]) }
    }

  // ! maps displayedCakes to display each individual cakes in the array

    let mappedCakes = () => displayedCakes.map(( c, i ) => <Cake class="cake" cake={ c } key={ i } addToCart={ this.props.addToCart } buttons={ [
      { class:"add-btn-style", name: `Add To Cart`, cb: () => this.props.addToCart( c ), disable: false }
    ] } 
    />
    ) 
    

    return (
      <main className="left">

        <div className="cake-btn-divide">

          <section className="bakery">
            { mappedCakes() } 
          </section>
{/* buttons to provide user with altering page items displayed */}
          <section className="buttons">
{/* Previous / Next button Section */}
            <section className="btn-left">
              <h5 className="text-wrap">Check out more cakes!</h5>
              <button disabled={ this.state.currentPage === 1 } 
              onClick={ () => { this.setState({ currentPage: this.state.currentPage - 1 })}}>Previous Page</button>
              <button disabled={ this.state.currentPage === Math.ceil( this.props.cakes.length / this.state.display ) } 
              onClick={ () => { this.setState({ currentPage: this.state.currentPage + 1 })}}>Next Page</button>
            </section>
            
{/* Cakes per page button Section */}
            <section className="btn-right">
              <h5 className="text-wrap">Select display: Cakes per page</h5>
              <button disabled={ this.state.display === 1 } 
              onClick={ () => { this.changeDisplay(1) } }>1</button>
              <button disabled={ this.state.display === 3 } 
              onClick={ () => { this.changeDisplay(3) } }>3</button>
              <button disabled={ this.state.display === 5 } 
              onClick={ () => { this.changeDisplay(5) } }>5</button>
              <button disabled={ this.state.display === this.props.cakes.length } 
              onClick={ () => { this.changeDisplay( this.props.cakes.length ) } }>All</button>
            </section>       
          </section>
        </div>
      </main>
    )
  }
//   }

}

