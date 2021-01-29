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

  render() {


  // export default function DisplayCakes(props) {


    let mappedCakes = () => this.props.cakes.map(( c, i ) => <Cake cake={ c } key={ i } add={ this.props.addToCart }/>) 
    
    
    
    // let mappedCakes = () => { 
    //   return this.props.cakes.map(( c, i ) => <Cake cake={ c } key={ i } /> )
    // }



    // console.log({props})
    return (

      <div className="flex-cake-container">
        
        <div className="cake-show" >
          
          { mappedCakes() } 

        </div>
        

      </div>
      
    )
  }
//   }

}

