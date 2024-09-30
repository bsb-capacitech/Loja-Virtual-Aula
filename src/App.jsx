import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

function App() {

  return (
    <Routes>
      <h1>Loja Virtual</h1>
      <Route path="/" element={<Layout />}>
      
      </Route>
    </Routes>
  )
}

export default App
