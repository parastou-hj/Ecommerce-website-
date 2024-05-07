import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar '>
      <div className="top d-flex justify-content-between ">
        <div className="left d-flex bg-primary">
          <div className="logo text-primary">PariSha</div>
          <div className="search">
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="center bg-danger">
          <ul className='menu'>
            <li><a href="">Home</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Children</a></li>
          </ul>
        </div>
        <div className="right bg-success">
          <div className="login">login/signup</div>
          <div className="cart">Cart</div>
        </div>
      </div>
      <div className="bottom bg-warning">bye</div>
    </nav>
  )
}

export default Navbar
