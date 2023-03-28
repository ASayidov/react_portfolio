import React from "react";
import './styles/main.scss'
import HomeMain from "./home/HomeMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function Routing() {
  return (
    <Router >
      <Routes>
        <Route exact path="/" Component={HomeMain} />
      </Routes>

    </Router>
  );
}

export default Routing;
