import React from 'react'
import Products from './components/Products'
import Nav from './components/Nav'

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Products />
      </>
    )
  }
}

export default App
