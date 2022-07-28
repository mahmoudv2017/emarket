import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";

import Navbar from "./components/Navbar";
import Home from './Pages/home/home'
import About from './Pages/about'
import Product from './Pages/product/product'
import Store from './Pages/store/store'
import Login from './Pages/login/login'
import { Routes , Route } from 'react-router-dom'
import CartProvider from './context/cartContext';
import reduxStore from './context/reduxContext';

import { Provider } from 'react-redux';


function App() {
  return (
    <CartProvider>
      <Provider store={reduxStore}>

        <Navbar />

        <div className='mx-5 mb-3' style={{height : '85%'}}>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/product/:id' element={<Product />} />

          </Routes>
        </div>
      </Provider>
      
     
    </CartProvider>
      

      
  
    
  );
}

export default App;
