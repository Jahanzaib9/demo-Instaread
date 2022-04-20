import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavigationBar } from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Homepage } from "./Components/Homepage/index";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
