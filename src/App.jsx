import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
        <Route path="trabalhe-conosco" element={<Jobs />} />
        <Route path="produtos" element={<Products />} />
        <Route path="produto/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
