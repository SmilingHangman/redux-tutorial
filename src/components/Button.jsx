import React, { Component } from 'react'
import { connect } from 'react-redux'
import { random } from 'faker'

class Button extends Component {
  render() {
    return (
      <button
        onClick={() =>
          this.props.changeTestValue({
            id: random.uuid(),
            name: this.props.product
          })
        }
      >
        {this.props.children}
      </button>
    )
  }
}

const mapDispatchToProps = {
  changeTestValue: payload => ({ type: 'ADD_TO_CART', payload })
}

export default connect(null, mapDispatchToProps)(Button)
