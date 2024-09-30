import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Loja Virtual</h1>} />
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
        <Route path="trabalhe-conosco" element={<Jobs />} />
      </Route>
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App
