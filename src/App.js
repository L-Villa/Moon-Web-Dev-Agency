import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/approach",
    name: "Approach",
    Component: Approach,
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    Component: CaseStudies,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
];

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
