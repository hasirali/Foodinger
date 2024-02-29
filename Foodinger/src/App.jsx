import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* dynamic Routing */}
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        {/* This Route with 'path="*"' will act as a catch-all for 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
