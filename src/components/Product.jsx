import React, { Component } from 'react'
import Button from './Button'
import { random } from 'faker'

export default class Product extends Component {
  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <h2>Take a look at: {this.props.product}</h2>
        <div>
          <img
            src={`https://picsum.photos/id/${random.number(200)}/600`}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <Button product={this.props.product}>
          Add to cart: {this.props.product}
        </Button>
      </div>
    )
  }
}
