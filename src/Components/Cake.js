import React from 'react'
// const img = require(`../imgs/dark-delicate-cake.jpg`)
// import { images } from '../Utility'
// import img from './IMG_0488.jpg'
// import img from '../imgs/dark-delicate-cake.jpg'




// const image = require('../imgs/IMG_0472.jpg')

  export default function Cake(props) {

// console.log({props})

// img, title, price
// console.log(props.cake)

    return (
      <div className="cake">
        <img src={`${process.env.PUBLIC_URL}${props.cake.imgUrl}`} alt="cake" />
          {/* <img src={ images[0] } alt="cake" /> */}
        {/* <img src={image} /> */}
        {/* <img src={ img } alt={ props.cake.name } /> */}
        {/* <Image source={ require(`../imgs/IMG_0472.jpg`) } /> */}
        <h2>{ props.cake.name }</h2>
        <h3>{ props.cake.flavor }</h3>
        <h3>{ props.cake.price }</h3>



        <button className="add-btn-style" onClick={ e => props.addToCart( props.cake ) }>Add to Cart</button>



      </div>
    )
  }








