import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import gsap from "gsap";
// import curology from "../assets/curology-min.png";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

const cases = [
  {
    pathname: "/case-study/curology",
    image: "curology-min",
    name: "Curology",
    span1: "A custom formula for",
    span2: "your skin's unique needs",
  },
  {
    pathname: "/case-study/yourspace",
    image: "yourspace-min",
    name: "Yourspace",
    span1: "Open space floor plans",
    span2: "for your next venture",
  },
  {
    pathname: "/case-study/lumin",
    image: "lumin-min",
    name: "Lumin",
    span1: "For your best",
    span2: "look ever",
  },
];

const tl = gsap.timeline();

function Curology(history, props) {
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

      return () => {
        
      };
  });

  return (
    <div>
      {cases.map((study, i) => {
        if (history.location.pathname === study.pathname) {
          return (
            <div key={i}>
              <section className="case-study-landing">
                <img
                  src={require(`../assets/${study.image}.png`)}
                  alt={study.name}
                />
                <div className="container">
                  <div className="case-study-text-container">
                    <p>{study.name}</p>
                    <h2>
                      <div className="line">
                        <span>{study.span1}</span>
                      </div>
                      <div className="line">
                        <span>{study.span2}</span>
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

              <section className="case-details">
                <div className="container">
                  <div className="row">
                    <div className="text-container">
                      <h2>Blah</h2>
                      <p>Blah Blah</p>
                    </div>
                    <div className="text-container">
                      <h2>Blah</h2>
                      <p>Blah Blah</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        } else {
          return null
        }
      })}

      {/* <section className="case-study-landing">
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

      <section className="case-details">
        <div className="container">
          <div className="row">
            <div className="text-container">
              <h2>Blah</h2>
              <p>Blah Blah</p>
            </div>
            <div className="text-container">
              <h2>Blah</h2>
              <p>Blah Blah</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default withRouter(Curology);
