import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

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

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  gsap.to("body", 0, { css: { visibility: "visible" } });
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
