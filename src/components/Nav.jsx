import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Nav = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const deleteItemHandler = id => dispatch({ type: 'REMOVE_ITEM', payload: id })

  return (
    <div style={{ marginBottom: '100px', textAlign: 'center' }}>
      You have these items in cart:
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            {cartItem.name}
            <button onClick={() => deleteItemHandler(cartItem.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
