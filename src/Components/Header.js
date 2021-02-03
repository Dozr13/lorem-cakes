import React from 'react'

export default function Header() {

  return (
    <header className="header">
      <section className="left-header">
        <bg className="logo-bg">
          <img className="logo"
          src={process.env.PUBLIC_URL + '/imgs/loremCakeLogo.png'}
          alt="mock logo of a cake" />
        </bg>
      </section>
      
      <span className="mid-header">
        <h1 className="shop-name">Lorem Ipsum Cake Shop</h1>
      </span>

      <span className="right-header">
      <h2 className="motto"><a href="/#">Eat more cake!</a></h2>
      </span>

    </header>

  )
}


