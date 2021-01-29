let { cakes } = require('../data.js')
let id = 10


console.log(cakes)
module.exports = {
  getCakes: ( req, res ) => {
    res.status( 200 ).send( cakes )
  },
  addCake: ( req, res ) => {
    const { name, flavor, color, allergyInfo, imgUrl } = req.body
    let cake = {
      id,
      name,
      flavor,
      color,
      allergyInfo,
      imgUrl
    };
    cakes.push( cake )
    res.status( 200 ).send( cakes )
  },
  updateCake: ( req, res ) => {
    const index = cakes.findIndex( cake => cake.id === +req.params.id )
    console.log(cakes[index])
    // let index = null
    // console.log(cakes)
    // cakes.forEach(( cake, i ) => {
    //   if( cake.id === Number( req.params.id )){
    //   index = i
    //   }
    // })
    cakes[ index ] = {
      id: cakes[ index ].id,
      name: req.body.name || cakes[ index ].name,
      flavor: req.body.flavor || cakes[ index ].flavor,
      color: req.body.color || cakes[ index ].color,
      allergyInfo: req.body.allergyInfo || cakes[ index ].allergyInfo
    }
    res.status(200).send(cakes)
  },
  deleteCake: ( req, res ) => {
    let index = null
    cakes.forEach(( cake, i ) => {
      if ( cake.id === Number( req.params.id ))
      index = i
    })
    cakes.splice( index, 1 )
    res.status( 200 ).send( cakes )
  }
}