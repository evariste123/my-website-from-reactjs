import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Service from "./component/service";
import Product from "./component/product";
import Blogs from "./component/blogs";
import Join from "./component/join";
import Footer from "./component/footer";
import Login from "./component/login";
function App(){
return(
  <div className="home">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}>home</Route>
  <Route path="/about" element={<About/>}>about</Route>
  <Route path="/contact" element={<Contact/>}>conatct</Route>
  <Route path="/service" element={<Service/>}>service</Route>
  <Route path="/product" element={<Product/>}>product</Route>
  <Route path="/blogs" element={<Blogs/>}>blogs</Route>
  <Route path="/login" element={<Login/>}>login</Route>
  <Route path="/join" element={<Join/>}>join</Route>
  <Route path="/footer" element={<Footer/>}>footer</Route>
</Routes>
</BrowserRouter>
  </div>
)
}
export default App