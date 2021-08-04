import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", {
    duration: 1.8,
    y: 125,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: 0.3,
  })
    .to(".overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", {
      duration: 1.6,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: 0.4,
    })
    .to(".intro-overlay", { duration: 0, css: { display: "none" } })
    .from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: 0.4,
      onComplete: completeAnimation,
    });
};

export default function Home(props) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    homeAnimation(completeAnimation);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases dimensions={props.dimensions} />
    </div>
  );
}
