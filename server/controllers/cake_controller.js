let cakes = require('../data')
let id = 10
console.log(cakes)
module.exports = {
  read: ( req, res ) => {
    res.status( 200 ).send( cakes )
  },
  create: ( req, res ) => {
    const { name, flavor, color, allergyInfo, imgUrl } = req.body
    let cake = {
      id: id++,
      name: name,
      flavor: flavor,
      color: color,
      allergyInfo: allergyInfo,
      imgUrl: imgUrl
    }
    cakes.push(cake)
    res.status(200).send(cakes)
  },
  update: ( req, res ) => {
    let index = null
    cakes.forEach(( cake, i ) => {
      if( cake.id === Number( req.params.id ))
      index = i
    })
    cakes[ index ] = {
      id: cakes[ index ].id,
      name: req.body.name || cakes[ index ].name,
      flavor: req.body.flavor || cakes[ index ].flavor,
      color: req.body.color || cakes[ index ].color,
      allergyInfo: req.body.allergyInfo || cakes[ index ].allergyInfo
    }
    res.status(200).send(cakes)
  },
  delete: ( req, res ) => {
    let index = null
    cakes.forEach(( cake, i ) => {
      if ( cake.id === Number( req.params.id ))
      index = i
    })
    cakes.splice( index, 1 )
    res.status( 200 ).send( cakes )
  }
}