import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/routes/Home";
import ProductDetail from "./components/routes/ProductDetail";
import Login from "./components/routes/Login";
import Purchases from "./components/routes/Purchases";
import Header from "./components/shared/Header";
import axios from "axios";
import Cart from "./components/shared/Cart";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/purchase" element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//USO POSTMAN. YO HARE MI PROPIO USUARIO QUE ACEDERA AL CARRITO DE COMPRAS
// //1-CREAR ROUTAS.
/*

*/
