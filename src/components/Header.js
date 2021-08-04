import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import gsap from "gsap";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

const tl = gsap.timeline();

function Header({ history, dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      tl.to("nav", { duration: 0, css: { display: "block" } })
        .to("body", { duration: 0, css: { overflow: "hidden" } })
        .to(".App", {
          duration: 1,
          y: dimensions.width <= 654 ? "60vh" : dimensions.height / 2,
          ease: "expo.inOut",
        })
        .to("nav", {
          duration: 1,
          delay: -1,
          height: dimensions.width <= 654 ? "60vh" : dimensions.height / 2,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("nav", {
          duration: 1,
          delay: -1,
          height: 0,
          ease: "expo.inOut",
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu-close", {
          css: {
            display: "none",
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("nav", { duration: 0, css: { display: "hidden" } })
        .to("body", { duration: 0, css: { overflow: "auto" } });
    }
  }, [menuState.menuOpened, dimensions, history]);

  const [mix, setMix] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMix(true);
    }, 7000);
  }, []);

  return (
    <div className={`header ${mix && "mix-blend"}`}>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo" style={{ color: mix ? "white" : "black" }}>
            <NavLink to="/">AGENCY.</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span style={{ background: mix ? "white" : "black" }}></span>
              <span style={{ background: mix ? "white" : "black" }}></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
