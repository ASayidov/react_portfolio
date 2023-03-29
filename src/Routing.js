import React from "react";
import './styles/main.scss'
import HomeMain from "./home/HomeMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/animation.scss'
import Portfolio from "./portfolio/Portfolio";




function Routing() {
  return (
    <Router >
      <Routes>
        <Route exact path="/" Component={HomeMain} />
        <Route exact path="/portfolio" Component={Portfolio} />
      </Routes>

    </Router>
  );
}

export default Routing;
