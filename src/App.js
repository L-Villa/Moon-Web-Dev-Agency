import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
