import { Routes, Route } from "react-router-dom"
import { CartProviver } from "./context/CartContext"
import { AuthProviver } from "./context/AuthContext"
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
  return (
    <AuthProviver>
      <CartProviver>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="contato" element={<Contact />} />
            <Route path="trabalhe-conosco" element={<Jobs />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produto/:id" element={<ProductDetails />} />
            <Route path="carrinho" element={<ShoppingCart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProviver>
    </AuthProviver>
  );
}

export default App
