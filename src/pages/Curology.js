import React, { useEffect } from "react";
import gsap from "gsap";
import curology from "../assets/curology-min.png";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

const tl = gsap.timeline();

export default function Curology() {
  useEffect(() => {
    tl.from(".case-study-text-container", {
      duration: 2,
      delay: 0.2,
      opacity: 0,
    })
      .from(".line span", {
        duration: 2,
        delay: -2,
        y: 125,
        skewY: 7,
        stagger: 0.3,
        ease: "power4.out",
      })
      .to(".scroll-indicator", {
        duration: 2,
        delay: -2,
        opacity: 1,
      });
  });

  return (
    <div>
      <section className="case-study-landing">
        <img src={curology} alt="curology" />
        <div className="container">
          <div className="case-study-text-container">
            <p>Curology</p>
            <h2>
              <div className="line">
                <span>A custom formula for </span>
              </div>
              <div className="line">
                <span>your skin's unique needs</span>
              </div>
            </h2>
          </div>
          <div className="scroll-indicator">
            <p>Scroll Down</p>
            <div className="scroll-arrow">
              <CasesNext />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
