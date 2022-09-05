
import React from "react";
import Dashboard from "./Component/Dashboard";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
          <Dashboard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
