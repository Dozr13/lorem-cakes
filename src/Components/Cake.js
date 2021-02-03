import React from 'react'
import NumberFormat from 'react-number-format';
// const img = require(`../imgs/dark-delicate-cake.jpg`)
// import { images } from '../Utility'
// import img from './IMG_0488.jpg'
// import img from '../imgs/dark-delicate-cake.jpg'




// const image = require('../imgs/IMG_0472.jpg')

  export default function Cake(props) {

// console.log({props})

// img, title, price
// console.log(props.cake)


  //! display current specified values of each object
  //! had to add process.env.PUBLIC_URL because could not figure out how to display img from data with React
let price = props.cake.price * props.cake.quantity
// console.log(props)
let mappedButtons = props.buttons.map(( b, i ) => <button className={ b.class } disabled={ b.disable } key={ i } onClick={ b.cb }>{ b.name }</button>)

    return (
      <div className={ props.class }>
        <img src={`${process.env.PUBLIC_URL}${props.cake.imgUrl}`} alt="cake" />
        <h2>{ props.cake.name }</h2>
        <h3>{ props.cake.flavor }</h3>
        <h4 className="checkout-margin" ><NumberFormat value={ price } displayType={ 'text' } thousandSeparator={true} prefix={ `${ props.cake.quantity }- ${ props.cake.name }:  $` } isNumericString={ true } decimalScale={ 2 } fixedDecimalScale={ true } /></h4>
        <section className="inline-btns">
          { mappedButtons }
        </section>

      </div>
    )
  }








