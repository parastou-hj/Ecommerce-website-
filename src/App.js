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
  const [cartItems, setCartItem] = useState([]);
  const [cartItemsNumber, setItemNumer] = useState(0);
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
        cartItems: cartItems,
        inCart: addToCart,
        cartItemsNumber: cartItemsNumber,
        decCart: decFromCart,
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
  function addToCart(item) {
    const existInCart = cartItems.find((i) => i.id === item.id);
    if (existInCart) {
      setCartItem(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItem([...cartItems, { ...item, quantity: 1 }]);
    }
    if (setCartItem.length === 0) {
      setItemNumer(0);
    } else {
      setItemNumer((prev) => prev + 1);
    }
  }
  function decFromCart(item) {
    const existInCart = cartItems.find((i) => i.id === item.id);
    const removeFromCart = cartItems.filter((i) => i.id !== item.id);
    if (existInCart.quantity > 1) {
      setCartItem(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItem([...removeFromCart]);
    }
    if (setCartItem.length === 0) {
      setItemNumer(0);
    } else {
      setItemNumer((prev) => prev - 1);
    }
  }
}

export default App;
