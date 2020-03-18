import React from 'react'
import Button from './Button'
import { random } from 'faker'

const Product = ({ product }) => (
  <div
    style={{
      border: '1px solid black',
      maxWidth: '400px',
      margin: '0 auto'
    }}
  >
    <h2>Take a look at: {product}</h2>
    <div>
      <img
        src={`https://picsum.photos/id/${random.number(200)}/600`}
        style={{ maxWidth: '100%' }}
      />
    </div>
    <Button product={product}>Add to cart: {product}</Button>
  </div>
)

export default Product
