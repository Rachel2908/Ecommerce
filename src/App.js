import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { ProductDetail } from './Pages/ProductDetail';
import { ShippingInfo } from './Pages/ShippingInfo';
import { Footer } from './Components/Footer/Footer';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
           <Route path='/products/:productId' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/shippinginfo' element={<ShippingInfo/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
