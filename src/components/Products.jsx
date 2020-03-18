import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.props.products.map(product => (
          <Product key={product} product={product} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(Products)
