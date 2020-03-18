import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cart-reducer'
import productsReducer from './reducers/products-reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
