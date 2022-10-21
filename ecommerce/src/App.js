import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'
import Details from './components/Details'
import Home from './components/Home'
import Pagenotfound from './components/Pagenotfound'
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/cart" element={<Cart />}/>
       <Route path="/details" element={<Details />}/>
       <Route path="*" element={<Pagenotfound />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App