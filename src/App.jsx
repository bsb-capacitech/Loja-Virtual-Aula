import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import ShoppingCart from "./pages/ShoppingCart"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (produto) => {
    const itemsExistente = cartItems.find(item => item.id === produto.id)

    if (itemsExistente) {
      setCartItems(
        cartItems.map(item =>
          item.id === produto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([ ...cartItems, { ... produto, quantity: 1 } ])
    }
  }

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    )
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
        <Route path="trabalhe-conosco" element={<Jobs />} />
        <Route path="produtos" element={<Products addToCart={addToCart} />} />
        <Route path="produto/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="carrinho" element={
          <ShoppingCart
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
        />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
