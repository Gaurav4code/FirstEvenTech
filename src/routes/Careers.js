import React, { useState } from "react";
import { useEffect } from "react";

import Banner from "../components/Banner";
import bg1 from "../assests/circle.jpg";

import { Slider_left, Slider_right } from "../components/Slide";

import Herodom from "../components/Herodom";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import { motion, useAnimation } from "framer-motion";
import Particle from "../components/Particles";
import Navbar from "../components/Navbar";
import gal from "../assests/deep.jpg";
import Footer from "../components/Footer";

import { useInView } from "react-intersection-observer";

const Contacts = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1
      });
      animation_r.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.5
        }
      });
    }
    if (!inView) {
      animation_t.start({
        opacity: 0
      });
      animation_r.start({
        y: 100,
        opacity: 0
      });

      animation_l.start({
        x: 100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="w-screen">
      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <MouseParallaxChild>
          <Particle />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="contianer w-screen">
        <div className="section w-screen ">
          {/* <Navbar /> */}
          {show && <Navbar />}
          <Banner
            title="Research + Process + Experience"
            img={bg1}
            subtitle="We ensure businesses reach their full potential by building solutions around their<br/> business problems using data and intuitive design."
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div className="section  ">
            <div ref={ref} className="h-[400px] pt-[50px] ">
              <div className=" my-[20px] flex grid grid-cols-2 w-screen mx-30 justify-evenly">
                <h1
                  className="text-slate-50  pl-[180px] pt-[40px] text-left text-[30px] tracking-wider"
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>
                  Get Morph’d
                  <br />
                  Join us
                </h1>
                <motion.div>
                  <motion.h5
                    className="text-white font-semibold text-left tracking-wider"
                    animate={animation_r}
                  >
                    If…
                    <br />
                    data
                    <br />
                    you’re an artist and you want to paint the canvas the colour
                    you like...
                    <br />
                    <br />
                    you have an idea and want to reach it to the finger tips...
                    <br />
                    <br />
                    you want to create and transform the orbits from the
                    regular...
                    <br />
                    <br />
                  </motion.h5>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="section h-screen w-screen">
            <div className="h-[600px] bg-[#fff] flex   bg-[#000000] ">
              <div
                ref={ref}
                className=" my-[20px]  mx-20 w-screen   justify-evenly"
              >
                <motion.div
                  className=" pl-[100px] pt-[70px]  text-left "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>

                  <h1 className="text-black  text-bolder text-[30px]">
                    If you would like to team with us and transform ideas,
                    <br />
                    Go ahead and submit your resume below.
                    <br />
                    <br />
                  </h1>
                  <motion.form
                    className="text-black  flex  justify-between font-semibold 
                      mt-[50px]
                      
                      "
                    animate={animation_r}
                  >
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Phone no." />
                  </motion.form>
                  <div className="main-con">
                    <motion.button
                      className=" fill text-black z-3
             
          "
                      whileHover={{
                        backgroundColor: "#000000"
                      }}
                    >
                      SEND
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="section ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
