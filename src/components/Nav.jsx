import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <div style={{ marginBottom: '100px', textAlign: 'center' }}>
        You have these items in cart:
        <ul>
          {this.props.cart.map(cartItem => (
            <li key={cartItem.id}>
              {cartItem.name}
              <button onClick={() => this.props.deleteItemHandler(cartItem.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})
const mapDispatchToProps = {
  deleteItemHandler: id => ({ type: 'REMOVE_ITEM', payload: id })
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
