import './App.css';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import HeaderNavbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import ProductCategory from './components/ProductCategory/ProductCategory';
import banner_women from './components/assets/banner_women.png'
import banner_mens from './components/assets/banner_mens.png'
import banner_kids from './components/assets/banner_kids.png'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
      <HeaderNavbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/women' element={<ProductCategory category='women' banner={banner_women} />} />
        <Route path='/men' element={<ProductCategory category='men'  banner={banner_mens} />} />
        <Route path='/kid' element={<ProductCategory category='kid'  banner={banner_kids} />} />
        <Route path="/product" element={<Product/>}>
        <Route path="/product:productId" element={<Product/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
