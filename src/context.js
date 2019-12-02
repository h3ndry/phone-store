import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detailProducts: detailProduct
  }
  componentDidMount() {
    this.setProducts()
  }

  setProducts = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }


  // getItem = id => {
  //   return this.state.products.find(item => item.id === id)
  // }

  handleDetails = id => {
    const product = this.state.products.find(item => item.id === id)
    this.setState(() => {
      return { detailProducts: product }
    })


  }

  addToCart = id => {
    console.log(`Hello from add to cart ${id}`)
  }


  render() {
    console.log(this.state.detailProducts)
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetails: this.handleDetails,
        addToCart: this.addToCart,
        getItem: this.getItem
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }