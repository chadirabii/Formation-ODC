import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddUser from "./Pages/AddUser";
import Home from "./Pages/Home";
import UpdateUser from "./Pages/UpdateUser";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes className="px-24 py-10">
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
