import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './sections/Cart';
import Slider from './sections/Slider';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './components/Product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductInfo />} />
        </Routes>
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
