import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { ProductDisplay } from './Components/ProductDisplay'
import CartModal from './Components/CartModal'

function App() {
  const [cartItems,setCartItems] = useState([])
  const [modal,setModal] = useState(false)

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      alert("Item already added to the cart")
    } else {
      setCartItems([...cartItems, product])
    }
  }

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    alert("Item has been deleted from the cart")
  }
  // console.log(cartItems)
  return (
    <>
      <Navbar itemsCount={cartItems.length} openModal={()=>setModal(true)}/>
      <ProductDisplay addToCart={addToCart}/>
      {modal && <CartModal cartItems={cartItems} closeModal={()=>setModal(false)} deleteItem={deleteItem}/>}
    </>
  )
}

export default App
