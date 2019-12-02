import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {

  render() {
    const { id, title, img, price, inCart } = this.props.product

    return (

      <div className="col-9 col-md-6 col-md-6 col-lg-3 mx-auto my-3">
        <div className="card" style={cardStyle}>
          <ProductConsumer>
            {values => {
              return (
                <div>
                  <div className="img-container p-5" onClick={() => { values.handleDetails(id) }}>
                    <Link to="/details" >
                      <img src={img} alt="product img" className="card-img-top" />
                    </Link>
                  </div>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => { values.addToCart(id) }}>
                    {inCart ? (<p>In Cart</p>) : (<i className="fas fa-cart-plus" />)}
                  </button>
                </div>
              )
            }}


          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between" style={footerStyle}>
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div >
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const footerStyle = {
  backgroundColor: 'transparent',
  transition: "all 5s easy-in-out",
  zIndex: '99',
  border: "none"
}

const cardStyle = {
  backgroundColor: 'transparent',
}