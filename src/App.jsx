import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Service from "./component/service";
import Product from "./component/product";
import Blogs from "./component/blogs";
import Join from "./component/join";
import Login from "./component/login";
import Agent from "./page/agent";
import Developer from "./page/developer";
import Document from "./page/document";
import Status from "./page/status";
import Support from "./page/support";
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
  <Route path="/agent" element={<Agent/>}>agents</Route>
  <Route path="/developer" element={<Developer/>}>developer</Route>
  <Route path="/document" element={<Document/>}>document</Route>
  <Route path="/status" element={<Status/>}>status</Route>
  <Route path="/support" element={<Support/>}>support</Route>
</Routes>
</BrowserRouter>
  </div>
)
}
export default App