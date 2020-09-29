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
    mainCopy: `Forget “custom” algorithms. You’re matched with a
    Curology provider who gets to know your skin. They’ll
    ask questions, check your progress, and stick by you.
    Forget “custom” algorithms. You’re matched with a
    Curology provider who gets to know your skin. They’ll
    ask questions, check your progress, and stick by you.`,
    mission:
      "The Curology team called upon our services to help them carry out the creation of their eCommerce store.",
  },
  {
    pathname: "/case-study/yourspace",
    image: "yourspace-min",
    name: "Yourspace",
    span1: "Open space floor plans",
    span2: "for your next venture",
    mainCopy:
      "An interior design company based in Switzerland with designers from around the world. Experts who know how to make your house feel like home. Designers who can make your office as productive as possible. An interior design company based in Switzerland with designers from around the world. Experts who know how to make your house feel like home. Designers who can make your office as productive as possible.",
    mission:
      "The Yourspace team called upon our services to help them carry out the creation of their eCommerce store.",
  },
  {
    pathname: "/case-study/lumin",
    image: "lumin-min",
    name: "Lumin",
    span1: "For your best",
    span2: "look ever",
    mainCopy:
      "Hand back your partner/mom/sister’s eye cream, cause it just ain’t gonna cut it. Men’s skin is a whole other ball game—it’s thicker, tougher, and structured differently than women’s. We craft products tailored to your skin type and formulate regimens that actually take your skin issues head-on.",
    mission:
      "The Lumin team called upon our services to help them carry out the creation of their eCommerce store.",
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

    return () => {};
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
                    <div className="text-container text-container-lg">
                      <p>
                        Forget “custom” algorithms. You’re matched with a
                        Curology provider who gets to know your skin. They’ll
                        ask questions, check your progress, and stick by you.
                        Forget “custom” algorithms. You’re matched with a
                        Curology provider who gets to know your skin. They’ll
                        ask questions, check your progress, and stick by you.
                      </p>
                      <h2>Mission</h2>
                      <p>
                        The Curology team called upon our services to help them
                        carry out the creation of their eCommerce store.
                      </p>
                    </div>
                    <div className="text-container text-container-sm">
                      <h2>Services</h2>
                      <ul>
                        <li>Digital Strategy</li>
                        <li>eCommerce Design</li>
                        <li>eCommerce Development</li>
                      </ul>
                      <div className="btn-row">
                        <a href="/">
                          Website <CasesNext />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="case-study-images">
                <img
                  src={require(`../assets/${study.image}.png`)}
                  alt={study.name}
                />
                <img
                  src={require(`../assets/${study.image}.png`)}
                  alt={study.name}
                />
                <img
                  src={require(`../assets/${study.image}.png`)}
                  alt={study.name}
                />
                <img
                  src={require(`../assets/${study.image}.png`)}
                  alt={study.name}
                />
              </section>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default withRouter(Curology);
