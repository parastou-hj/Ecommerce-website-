import "./App.css";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import HeaderNavbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import banner_women from "./components/assets/banner_women.png";
import banner_mens from "./components/assets/banner_mens.png";
import banner_kids from "./components/assets/banner_kids.png";
import { useState } from "react";
import { Context } from "./Context/Context";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Categories from "./components/Categories/Categories";
import Magazin from "./components/Magazin/Magazin";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Search from "./components/Search/Search";

function App() {

  const [search, setSearch] = useState("");
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  return (
    <Context.Provider
      value={{
       itemsInPage:itemsPerPage,
       indexOfFirstProduct:indexOfFirstProduct,
       indexOfLastProduct:indexOfLastProduct,
       handlePageChange:handlePageChange,
       currentPage:currentPage

      }}
    >
      <div className="App">
        <BrowserRouter>
          <HeaderNavbar setSearch={setSearch} search={search} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/women"
              element={
                <ProductCategory category="women" banner={banner_women} />
              }
            />
            <Route
              path="/men"
              element={<ProductCategory category="men" banner={banner_mens} />}
            />
            <Route
              path="/kid"
              element={<ProductCategory category="kid" banner={banner_kids} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path="/product:productId" element={<Product />} />
            </Route>
            <Route path="/magazin" element={<Magazin />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/search"
              element={<Search setSearch={setSearch} search={search} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
 
}

export default App;
