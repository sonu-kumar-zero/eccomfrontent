import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Productpage from './components/Productpage';
import Cartpage from './components/Cartpage';
import Checkoutpage from './components/Checkoutpage';
import Login from './components/Login';
import Signup from "./components/Signup"
// import ForgotPass from './components/ForgotPass';



const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:product/:id' element={<ProductList />} />
                <Route path='/:product/:title' element={<Productpage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/forgotpass' element={<ForgotPass />} /> */}
                <Route path='/cart' element={<Cartpage />} />
                <Route path='/cart/checkout' element={<Checkoutpage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App