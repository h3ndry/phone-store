import React, { Component } from 'react'
import Product from './Product'
import Tittle from './Tittle'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Tittle name="our" tittle="product" />
          </div>

          <div className="row">
            <ProductConsumer>
              {(values) => {
                return values.products.map(product => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>

    )
  }
}