import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector(state => state.products)
  return (
    <div style={{ display: 'flex' }}>
      {products.map(product => (
        <Product key={product} product={product} />
      ))}
    </div>
  )
}
export default Products
