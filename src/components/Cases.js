import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
    active: false,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
    active: false,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
    active: false,
  },
  {
    id: 4,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
    active: false,
  },
  {
    id: 5,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
    active: false,
  },
  {
    id: 6,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
    active: false,
  },
  {
    id: 7,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
    active: false,
  },
  {
    id: 8,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
    active: false,
  },
  {
    id: 9,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
    active: false,
  },
];

const tl = gsap.timeline();

//? use useEffect to monitor the case active? If active === true then run gsap

export default function Cases() {
  const [width, setWidth] = useState(853);
  const [counter, setCounter] = useState(0);
  const [scroll, setScroll] = useState(0);

  const productAnimation = (e, index) => {
    console.log("hello");

    // const toolbar = window.outerHeight - window.innerHeight;
    // const scrollbar = window.outerWidth - window.innerWidth;
    const scrollTop = window.pageYOffset;
    const scrollLeft = window.pageXOffset;

    // console.log(scrollTop, scrollLeft);

    // const clientTop = document.body.clientTop || 0;

    // console.log(clientTop);

    const windowOffsets = window.screen;
    const windowTop = windowOffsets.top;
    // const windowLeft = windowOffsets.left;
    // const windowHeight = windowOffsets.height;
    // const windowWidth = windowOffsets.width;
    console.log("window: ", windowOffsets);

    const offsets = e.target.getBoundingClientRect();
    const top = offsets.y;
    const left = offsets.x;
    const bottom = offsets.bottom;
    const height = offsets.height;
    const width = offsets.width;
    console.log("target: ", offsets);

    //! remove scrolling until affect is done?
    for (let i = 0; i < caseStudies.length; i++) {
      if (index === i) {
        tl.to(`.case-details-${i + 1}`, {
          duration: 1,
          opacity: 0,
        })
          .to(".bruh", {
            duration: 0,
            delay: -1,
            top: scrollTop,
          })
          .fromTo(
            `.case-image-zoom:nth-of-type(${i + 1})`,
            {
              visibility: "hidden",
              y: top,
              x: left,
              width: width,
              height: height,
            },
            {
              duration: 2,
              delay: 0.2,
              visibility: "visible",
              y: windowTop,
              x: scrollLeft,
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
              ease: "expo.inOut",
            }
          );
      }
    }
  };

  //? change width so that it's not static
  const handleNext = (e) => {
    e.stopPropagation();
    if (counter < caseStudies.length - 3) {
      setCounter(counter + 3);
    }
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    if (counter > 2 || scroll > width * 3) {
      setCounter(counter - 3);
    }
  };

  const newHandleScroll = (e) => {
    const dY = e.deltaY * 20;
    if (scroll >= (caseStudies.length - 3) * -width + dY && scroll <= 0 + dY) {
      setScroll(scroll - dY);
    }
  };

  useEffect(() => {
    document.body.addEventListener("wheel", newHandleScroll);

    return () => {
      document.body.removeEventListener("wheel", newHandleScroll);
    };
  });

  return (
    <section className="cases">
      <div className="cases-wrapper">
        <div className="container-fluid">
          <div className="cases-navigation">
            <div
              className={"cases-arrow prev" + (counter < 2 ? " disabled" : "")}
              onClick={handlePrev}
            >
              <CasesPrev />
            </div>
            <div
              className={
                "cases-arrow next" +
                (counter >= caseStudies.length - 3 ? " disabled" : "")
              }
              onClick={handleNext}
            >
              <CasesNext />
            </div>
          </div>
          <div className="row">
            {caseStudies.map((caseItem, index) => (
              <div
                className="case"
                key={caseItem.id}
                onClick={(e) => productAnimation(e, index)}
                style={{
                  transform: `translateX(${scroll - width * counter}px)`,
                }}
              >
                <div className={`case-details case-details-${index + 1}`}>
                  <span>{caseItem.subtitle}</span>
                  <h2> {caseItem.title} </h2>
                </div>
                <div className="case-image">
                  <img
                    src={require(`../assets/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bruh">
          {caseStudies.map((caseItem, index) => (
            <div
              className={
                // "case-image-zoom" + (active[index].active ? "active" : "")
                "case-image-zoom"
              }
              key={caseItem.id}
            >
              <img
                src={require(`../assets/${caseItem.img}.png`)}
                alt={caseItem.title}
              />
            </div>
          ))}
        </div>
        <div className="fullscreen"></div>
      </div>
    </section>
  );
}

// useEffect(() => {
//   var root = document.documentElement;
//   var body = document.body;
//   var pages = document.querySelectorAll(".page");
//   var tiles = document.querySelectorAll(".tile");

//   const firstTile = document.querySelector(".tile");
//   const rect2 = firstTile.getBoundingClientRect;
//   console.log(rect2);

//   for (var i = 0; i < tiles.length; i++) {
//     addListeners(tiles[i], pages[i]);
//   }

//   function addListeners(tile, page) {
//     tile.addEventListener("click", function () {
//       animateHero(tile, page);
//     });

//     page.addEventListener("click", function () {
//       animateHero(page, tile);
//     });
//   }

//   function animateHero(fromHero, toHero) {
//     var clone = fromHero.cloneNode(true);

//     var from = calculatePosition(fromHero);
//     var to = calculatePosition(toHero);

//     tl.set([fromHero, toHero], { visibility: "hidden" });
//     tl.set(clone, { position: "absolute", margin: 0 });

//     body.appendChild(clone);

//     var style = {
//       x: to.left - from.left,
//       y: to.top - from.top,
//       width: to.width,
//       height: to.height,
//       autoRound: false,
//       ease: "Power1.easeOut",
//       onComplete: onComplete,
//     };

//     tl.set(clone, from);
//     tl.to(clone, 0.3, style);

//     function onComplete() {
//       tl.set(toHero, { visibility: "visible" });
//       body.removeChild(clone);
//     }
//   }

//   function calculatePosition(element) {
//     var rect = element.getBoundingClientRect();

//     var scrollTop =
//       window.pageYOffset || root.scrollTop || body.scrollTop || 0;
//     var scrollLeft =
//       window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

//     var clientTop = root.clientTop || body.clientTop || 0;
//     var clientLeft = root.clientLeft || body.clientLeft || 0;

//     return {
//       top: Math.round(rect.top + scrollTop - clientTop),
//       left: Math.round(rect.left + scrollLeft - clientLeft),
//       height: rect.height,
//       width: rect.width,
//     };
//   }
// });
