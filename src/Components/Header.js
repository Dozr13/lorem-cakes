import React from 'react'

export default function Header() {

  return (

  <div className="flex-container">

    <header className="header"> {/* flex-direction: column */}
      <div className="left">
        <img className="logo"
        src="https://bellejoucakery.com/wp-content/uploads/2016/04/333-1-1024x466.jpg" 
        alt="mock logo of a cake" />
      </div>
      
      <div className="mid">
        <h1 className="shop-name">Lorem Ipsum Cake Shop</h1>
        <nav className="nav"></nav>
      </div>

      <div className="right">
      {/* <h2 className="motto"><a href="#">Eat more cake!</a></h2> */}
      </div>

    </header>
  </div>  
  )
}