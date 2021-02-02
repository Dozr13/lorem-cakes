import React from 'react'

export default function Header() {

  return (

    <header className="header"> {/* flex-direction: column */}
      <div className="left-header">
        <img className="logo"
        src={process.env.PUBLIC_URL + '/imgs/loremCakeLogo.png'}
        alt="mock logo of a cake" />
      </div>
      
      <div className="mid-header">
        <h1 className="shop-name">Lorem Ipsum Cake Shop</h1>
        <nav className="nav"></nav>
      </div>

      <div className="right-header">
      <h2 className="motto"><a href="/#">Eat more cake!</a></h2>
      </div>

    </header>

  )
}


