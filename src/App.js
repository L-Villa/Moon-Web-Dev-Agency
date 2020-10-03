import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
// import Approach from "./pages/Approach";
// import Services from "./pages/Services";

import CaseStudy from "./pages/CaseStudy";

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
    Component: About,
  },
  {
    path: "/services",
    name: "Services",
    Component: About,
  },
  {
    path: "/case-study/curology",
    name: "Curology",
    Component: CaseStudy,
  },
  {
    path: "/case-study/yourspace",
    name: "Yourspace",
    Component: CaseStudy,
  },
  {
    path: "/case-study/lumin",
    name: "Lumin",
    Component: CaseStudy,
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
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
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
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component dimensions={dimensions} />
            </Route>
          ))}
          <Route exact path="/404">
            <Home dimensions={dimensions} />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </div>
      <Navigation />
    </>
  );
}

export default App;
