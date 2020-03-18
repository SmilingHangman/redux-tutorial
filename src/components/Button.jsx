import React from 'react'
import { random } from 'faker'
import { useDispatch } from 'react-redux'
const Button = ({ product, children }) => {
  const dispatch = useDispatch()

  const addToCartHandler = () =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id: random.uuid(), name: product }
    })

  return <button onClick={addToCartHandler}>{children}</button>
}

export default Button
