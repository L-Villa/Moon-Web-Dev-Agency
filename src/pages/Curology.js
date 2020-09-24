import React from "react";
import curology from "../assets/curology-min.png";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

export default function Curology() {
  return (
    <div>
      <section className="case-study-landing">
        <img src={curology} alt="curology" />
        <div className="container">
          <div className="case-study-text-container">
            <p>Curology</p>
            <h2>A custom formula for your skin's unique needs</h2>
          </div>
          <div className="scroll-indicator">
            <p>Scroll Down</p>
            <div className="cases-arrow next">
              <CasesNext />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
