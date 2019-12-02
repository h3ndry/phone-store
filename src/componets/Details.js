import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {values => {
          // console.log(values.detailProducts)
          const { id, company, img, info, price, title, inCart } = values.detailProducts

          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-tittle textblue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="image product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitilize">
                  <h2>Model : {title}</h2>
                  <h4 className="text-tittle text-uppercase text-muted mt-3 mb-3">Made by: <span className="text-uppercase">{company}</span></h4>
                  <h4 className="text-blue"><strong>Price : <span>$</span> {price}</strong></h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>

                  <div>
                    <Link to='/'>
                      <button >
                        Back to product
                  </button>
                    </Link>
                    <Link to='/cart'>
                      <button style={btnStyle} disabled={inCart ? true : false} onClick={(value) => {
                        values.addToCart(id)
                      }}>
                        {inCart ? "Add To Cart" : "Added To Cart"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

const btnStyle = {
  textTransform: 'capitilize',
  backgroundColor: 'transparent',
  fontSize: '1.4rem',
  border: '0.5px solid var(--mainYellow)',
  color: 'var(--mainYellow)',
  borderRadius: '.5rem',
  padding: '0.2rem 0.5rem',
  transision: 'all .5s ease-in-out',
  marginLeft: '1rem'
}
