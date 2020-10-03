import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import gsap from "gsap";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import data from "../data/data.json";

const caseStudies = data.pages;

const initialAnimation = gsap.timeline();
const nextPageTransition = gsap.timeline();
const servicesTransition = gsap.timeline();

const handleInitialAnimation = () => {
  initialAnimation
    .from(".about-text-container", {
      duration: 2,
      delay: 0.2,
      opacity: 0,
    })
    .from(".line span", {
      duration: 2,
      delay: -2.2,
      y: 225,
      skewY: 7,
      stagger: 0.3,
      ease: "power4.out",
    })
    .to(".scroll-indicator", {
      duration: 2,
      delay: -2.2,
      opacity: 1,
    });
};

const handleNextPageTransition = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
  nextPageTransition
    .to(".wave", {
      duration: 0.7,
      top: "-105%",
      ease: "power4.easeIn",
    })
    .to(".scroll-indicator", {
      duration: 0.7,
      delay: -0.7,
      top: "-100%",
      ease: "power4.easeIn",
    })
    .to(".scrolling-text", {
      duration: 0.7,
      delay: -0.7,
      top: "-100%",
      ease: "power4.easeIn",
    })
    .to(".next-page-landing-image", {
      duration: 0.4,
      delay: -0.7,
      top: "20%",
      ease: "power4.easeIn",
    })
    .from(".next-page-landing-image", {
      duration: 0.4,
      delay: -0.7,
      scale: 1.4,
      ease: "power4.easeIn",
    });
};
// const handleContentHide = () => {
//   servicesTransition.to(".services-content", {
//     duration: 0.7,
//     height: 0,
//     padding: 0,
//     ease: "power4.easeIn",
//   });
// };
// const handleContentShow = () => {
//   servicesTransition.to(".services-content", {
//     duration: 0.7,
//     height: "initial",
//     padding: "initial",
//     ease: "power4.easeIn",
//   });
// };

// const handleScrollIndicator = () => {
//   document
//     .getElementById("case-details")
//     .scrollIntoView({ behavior: "smooth" });
// };

function About(history) {
  const [hover, setHover] = useState(false);

  const delayRedirect = (e, to) => {
    const {
      history: { push },
    } = history;
    e.preventDefault();
    setTimeout(() => push(to), 0.7 * 1000);
  };
  const handleWaveEnter = () => {
    setHover(true);
  };
  const handleWaveLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleInitialAnimation();
    return () => {};
  }, []);

  return (
    <div>
      {caseStudies.map((study, index) => {
        if (history.location.pathname === study.pathname) {
          return (
            <div key={index}>
              <section className="about-landing">
                <div className="container">
                  <div className="about-text-container">
                    <p>{study.text.title}</p>
                    <h2>
                      <div className="line">
                        <span>{study.text.subtitle.split[0]}</span>
                      </div>
                      <div className="line">
                        <span>{study.text.subtitle.split[1]}</span>
                      </div>
                      <div className="line">
                        <span>{study.text.subtitle.split[2]}</span>
                      </div>
                    </h2>
                  </div>
                  <div
                    className="scroll-indicator"
                    // onClick={handleScrollIndicator}
                  >
                    <p>Scroll Down</p>
                    <div className="scroll-arrow">
                      <CasesNext />
                    </div>
                  </div>
                </div>
              </section>
              {/* <section className="services">
                <div className="services-category">
                  <h2>Services</h2>
                  <div className="services-service">
                    <div className="services-title" onClick={handleContentShow}>
                      <h3>Ideation & Conception</h3>
                    </div>
                    <div
                      className="services-content"
                      onClick={handleContentHide}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum fugit ratione explicabo nemo debitis beatae
                        eos cum, fugiat suscipit et!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum fugit ratione explicabo nemo debitis beatae
                        eos cum, fugiat suscipit et!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum fugit ratione explicabo nemo debitis beatae
                        eos cum, fugiat suscipit et!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum fugit ratione explicabo nemo debitis beatae
                        eos cum, fugiat suscipit et!
                      </p>
                    </div>
                  </div>
                </div>
              </section> */}

              {/* <section className="case-details" id="case-details">
                <div className="container">
                  <div className="row">
                    <div className="text-container text-container-lg">
                      <p>{study.text.copy}</p>
                      <h2>Mission</h2>
                      <p>{study.text.mission}</p>
                    </div>
                    <div className="text-container text-container-sm">
                      <h2>Services</h2>
                      <ul>
                        {study.text.services.map((service, index) => {
                          return <li key={index}>{service}</li>;
                        })}
                      </ul>
                      <div className="btn-row">
                        Website <CasesNext />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="case-study-images">
                {study.images.secondary.map((secondaryImage, index) => {
                  return (
                    <img
                      key={index}
                      src={require(`../assets/secondary/${secondaryImage.image}.png`)}
                      alt={secondaryImage.alt}
                    ></img>
                  );
                })}
              </section> */}
              <footer className="next-case">
                <div className="next-page-landing-image"></div>
                <Link
                  to={{
                    pathname:
                      caseStudies[
                        index >= caseStudies.length - 1 ? 0 : index + 1
                      ].pathname,
                    hash: null,
                  }}
                  onClick={(e) =>
                    delayRedirect(
                      e,
                      caseStudies[
                        index >= caseStudies.length - 1 ? 0 : index + 1
                      ].pathname
                    )
                  }
                >
                  <svg className="wave" id="wave" viewBox="0 0 1440 1160">
                    <path d="M932.3,18.1c175.5,17.3,350.3,60.5,507.7,54.7l0,316.1l0,0l0,141l0,141l0,0l0,316.1 c-155.7-5.7-328.6,36.5-502.4,54.2l-5.3,0.5c-310,43.7-607.6,13.2-860.8-145.9c-24.7-15-48.6-31.6-71.5-49.7l0,0l0-316.2l0-316.2 c22.9-18,46.8-34.6,71.5-49.7C324.8,4.9,622.3-25.6,932.3,18.1z"></path>
                  </svg>
                  <div className="scrolling-text">
                    <h2 style={{ top: hover ? "-105%" : "0" }}>Next Page</h2>
                    <h2 style={{ top: hover ? "-105%" : "0" }}>Click Me</h2>
                  </div>
                  <svg
                    onClick={handleNextPageTransition}
                    onMouseEnter={handleWaveEnter}
                    onMouseLeave={handleWaveLeave}
                    className="wave"
                    id="wave"
                    viewBox="0 0 1440 1160"
                  >
                    <path d="M0,2.9c239.7-18.1,477.8,48.7,707.6,165.8c229.3,105.1,440.1,259.7,657,241.2 c28.5-2.7,53.5-8.5,75.4-16.7l0,763.9c-239.7,18.1-477.8-48.7-707.6-165.8C496.9,886.1,286.1,731.5,81.6,750 c-31.1,2.8-58.2,8.6-81.6,17L0,2.9z"></path>
                  </svg>
                  <div className="scroll-indicator">
                    <p>
                      {
                        caseStudies[
                          index >= caseStudies.length - 1 ? 0 : index + 1
                        ].text.title
                      }
                    </p>
                    <div
                      style={{ background: hover ? "black" : "" }}
                      className="scroll-arrow"
                    >
                      <CasesNext style={{ color: hover ? "white" : "black" }} />
                    </div>
                  </div>
                </Link>
              </footer>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default withRouter(About);

// import React from 'react'

// export default function About() {
//   return (
//     // <div className="page">
//     //   <div className="container">
//     //     <div className="row">
//     //       <h3>This is the about page</h3>
//     //     </div>
//     //   </div>
//     // </div>

//   )
// }
