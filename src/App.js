import './App.css';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import HeaderNavbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
      <HeaderNavbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path="/product:productId" element={<Product/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
