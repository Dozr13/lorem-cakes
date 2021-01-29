import React from 'react'

export default function Header() {

  return (

  <div className="flex-container">

    <header className="header"> {/* flex-direction: column */}
      <div className="left">
        <img className="logo"
        src="https://img.pngio.com/cupcake-illustration-ice-cream-cake-logo-ice-cream-transparent-cake-logo-png-800_800.png" 
        alt="mock logo of a cake" />
      </div>
      
      <div className="mid">
        <h1 className="shop-name">Lorem Ipsum Cake Shop</h1>
        <nav className="nav"></nav>
      </div>

      <div className="right">
      <h2 className="motto"><a href="#">Eat more cake!</a></h2>
      </div>

    </header>
  </div>  
  )
}