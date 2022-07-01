import Product from "components/product/Product";
import Layout from "Layout";
import Blog from "pages/blog/Blog";
import Homepage from "pages/homepage/Homepage";
import Ourstory from "pages/ourstory/Ourstory";
import Shop from "pages/shop/Shop";
import React from "react";
import { Routes, Route } from "react-router-dom";



function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="ourstory" element={<Ourstory />}></Route>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
