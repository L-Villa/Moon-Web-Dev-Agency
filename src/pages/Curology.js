import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import gsap from "gsap";
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
    services: ["Digital Strategy", "eCommerce Design", "eCommerce Development"],
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
    services: [
      "Branding",
      "eCommerce Design",
      "eCommerce Development",
      "Digital Marketing Strategy",
      "3D Imagery",
    ],
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
    services: [
      "Product Development",
      "Brand Strategy",
      "Digital Strategy",
      "eCommerce Design",
      "eCommerce Development",
      "Social Media Marketing",
    ],
  },
];

const tl = gsap.timeline();
const nextPageTransition = gsap.timeline();

const handleNextPageTransition = () => {
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
    .to(".text", {
      duration: 0.7,
      delay: -0.7,
      top: "-100%",
      ease: "power4.easeIn",
    })
    .to(".next-page-landing-image", {
      duration: 0.5,
      delay: -0.7,
      top: "20%",
      ease: "power4.easeIn",
    })
    .from(".next-page-landing-image", {
      duration: 0.5,
      delay: -0.7,
      scale: 1.4,
      ease: "power4.easeIn",
    });
};

function Curology(history) {
  const [hover, setHover] = useState(false);

  const delayRedirect = (e, to) => {
    const {
      history: { push },
    } = history;
    e.preventDefault();
    setTimeout(() => push(to), 0.7 * 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, []);

  const handleWaveEnter = () => {
    setHover(true);
  };
  const handleWaveLeave = () => {
    setHover(false);
  };

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
                      <p>{study.mainCopy}</p>
                      <h2>Mission</h2>
                      <p>{study.mission}</p>
                    </div>
                    <div className="text-container text-container-sm">
                      <h2>Services</h2>
                      <ul>
                        {study.services.map((service, index) => {
                          return <li key={index}>{service}</li>;
                        })}
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
              <footer className="next-case">
                <Link
                  to={{
                    pathname: cases[i >= cases.length - 1 ? 0 : i + 1].pathname,
                    hash: null,
                  }}
                  onClick={(e) =>
                    delayRedirect(
                      e,
                      cases[i >= cases.length - 1 ? 0 : i + 1].pathname
                    )
                  }
                >
                  <div className="next-page-landing-image">
                    <img
                      src={require(`../assets/${
                        cases[i >= cases.length - 1 ? 0 : i + 1].image
                      }.png`)}
                      alt={study.name}
                    />
                  </div>
                  <svg className="wave" id="wave" viewBox="0 0 1440 1160">
                    <path d="M932.3,18.1c175.5,17.3,350.3,60.5,507.7,54.7l0,316.1l0,0l0,141l0,141l0,0l0,316.1 c-155.7-5.7-328.6,36.5-502.4,54.2l-5.3,0.5c-310,43.7-607.6,13.2-860.8-145.9c-24.7-15-48.6-31.6-71.5-49.7l0,0l0-316.2l0-316.2 c22.9-18,46.8-34.6,71.5-49.7C324.8,4.9,622.3-25.6,932.3,18.1z"></path>
                  </svg>
                  <div className="text">
                    <h2 style={{ top: hover ? "-100%" : "0" }}>Next Page</h2>
                    <h2 style={{ top: hover ? "-100%" : "0" }}>Click Me</h2>
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
                      {cases[i >= cases.length - 1 ? 0 : i + 1].span1 +
                        " " +
                        cases[i >= cases.length - 1 ? 0 : i + 1].span2}
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

export default withRouter(Curology);
