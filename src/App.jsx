import { Route, Routes } from "react-router-dom"
import Home from "./Screens/Home";
import './App.css'
import Product from "./Screens/Product";
import About from "./Screens/About";


function App() {


  return (
    <>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path="product/:id" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
