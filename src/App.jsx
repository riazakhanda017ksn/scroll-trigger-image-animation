import React, { useEffect, useRef } from "react";
import gsap, { Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  });

  gsap.registerPlugin(ScrollTrigger);
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      right: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { right: "100%" });
    gsap
      .to(body, 0.3, {
        css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut,
        },
      })
      .delay(2);
    return () => {
      gsap.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });
  return (
    <div>
      <div className="intro">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Hello There !
        </h1>
        <p data-aos="fade-up" data-aos-duration="3000">
          Introduce the scroll trigger pinned image animation with reactJS
        </p>
      </div>
      <div
        ref={(el) => (body = el)}
        className="Headd"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="gallery product-smooth-scroll">
          <div className="Left">
            <div className="details"> SHOOT PHOTO</div>
            <div className="details">WITH DETAILS</div>
            <div className="details">MAKE IT CREATIVE</div>
          </div>
          <div className="rightblock">
            <div className="photos">
              <div className="photo">
                <img
                  src="https://i.ibb.co/QcQsVxN/slider-bg77-13ae4d1d.jpg"
                  alt="img-1"
                />
              </div>
              <div className="photo">
                <img
                  src="https://i.ibb.co/H7yztsn/bg-image-11-1.jpg"
                  alt="img-2"
                />
              </div>
              <div className="photo">
                <img
                  src="https://i.ibb.co/fFKhGt8/testimonial-dark-01.jpg"
                  alt="img-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-part">
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          All right reserved by RIAZ
        </p>
      </div>
    </div>
  );
};

export default App;
