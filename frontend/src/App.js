import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddUser from "./Pages/AddUser";
import Home from "./Pages/Home";
import UpdateUser from "./Pages/UpdateUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes className="px-24 py-10">
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
        </Routes>
      </Router>
    </>
    // <div className="">
    //   <div>
    //     <Navbar />
    //   </div>
    //   <div className="px-24 py-10">
    //     {/* <Home /> */}
    //     <AddUser />
    //   </div>
    // </div>
  );
}

export default App;
