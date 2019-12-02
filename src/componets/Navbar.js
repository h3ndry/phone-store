import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

export default class Navbar extends Component {
  render() {
    return (
      <nav style={navStyle} className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" >
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center" >
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto" >
          <button style={btnStyle}>
            <i className="fas fa-cart-plus" />
            My cart
          </button>
        </Link>
      </nav>
    )
  }
}

const btnStyle = {
  textTransform: 'capitilize',
  backgroundColor: 'transparent',
  fontSize: '1.4rem',
  border: '0.5px solid var(--lightBlue)',
  color: 'var(--lightBlue)',
  borderRadius: '.5rem',
  padding: '0.2rem 0.5rem',
  transision: 'all .5s ease-in-out'
}

const navStyle = {
  backgroundColor: 'var(--mainBlue)'
}