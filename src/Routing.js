import React from "react";
import './styles/main.scss'
import HomeMain from "./home/HomeMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/animation.scss'
import './styles/responsive.scss'
import Portfolio from "./portfolio/Portfolio";
import About from "./about_me/About";
import Google from "./google31fe965c0743800f.html";
import File from "./app-ads.text";




function Routing() {
  return (
    <Router >
      <Routes>
        <Route exact path="/" Component={HomeMain} />
        <Route exact path="/portfolio" Component={Portfolio} />
        <Route exact path="/about-me" Component={About} />
        <Route exact path="/google31fe965c0743800f.html" Component={Google} />
        <Route exact path="./app-ads.text" Component={File} />
          
          
      </Routes>

    </Router>
  );
}

export default Routing;
