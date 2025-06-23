import { useState } from 'react'
import Homepage from './components/Homepage'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cartItems, setCartItems] = useState([])

  function addToCart(pizza) {
    let found = false
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === pizza.id) {
        found = true
        break
      }
    }

    if (found) {
      const newCartItems = []
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === pizza.id) {
          const updatedItem = cartItems[i]
          updatedItem.quantity = updatedItem.quantity + 1
          newCartItems.push(updatedItem)
        } else {
          newCartItems.push(cartItems[i])
        }
      }
      setCartItems(newCartItems)
    } else {
      pizza.quantity = 1
      const newCartItems = [...cartItems, pizza]
      setCartItems(newCartItems)
    }
  }

  function removeFromCart(itemId) {
    const newCartItems = []
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id !== itemId) {
        newCartItems.push(cartItems[i])
      }
    }
    setCartItems(newCartItems)
  }

  function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
      return
    }
    
    const newCartItems = []
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === itemId) {
        const updatedItem = cartItems[i]
        updatedItem.quantity = newQuantity
        newCartItems.push(updatedItem)
      } else {
        newCartItems.push(cartItems[i])
      }
    }
    setCartItems(newCartItems)
  }

  function getCartCount() {
    let totalCount = 0
    for (let i = 0; i < cartItems.length; i++) {
      totalCount = totalCount + cartItems[i].quantity
    }
    return totalCount
  }

  function showPage() {
    if (currentPage === 'home') {
      return <Homepage setCurrentPage={setCurrentPage} />
    } else if (currentPage === 'menu') {
      return <Menu addToCart={addToCart} />
    } else if (currentPage === 'cart') {
      return <Cart 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    } else {
      return <Homepage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartCount={getCartCount()}
      />
      {showPage()}
      <Footer />
    </div>
  )
}

export default App