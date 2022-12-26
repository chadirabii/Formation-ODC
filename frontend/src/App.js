import React from "react";
import Navbar from "./Components/Navbar";
// import AddUser from "./Pages/AddUser";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="px-24 py-10">
        <Home />
        {/* <AddUser /> */}
      </div>
    </div>
  );
}

export default App;
