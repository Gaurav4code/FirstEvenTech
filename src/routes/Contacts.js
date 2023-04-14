import React, { useState } from "react";
import { useEffect } from "react";

import Banner from "../components/Banner";
import bg1 from "../assests/marbel.jpg";

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
            title="Connect to Discover"
            img={bg1}
            subtitle="Lets discuss, the next possibility."
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div className="section h-screen w-screen bg-[#fff]">
            <div className="grid grid-cols-2 pt-[40px] h-screen mt-[500px] mx-[80px] w-screen  ">
              <div ref={ref} className="  justify-evenly">
                <motion.div
                  className=" pl-[100px] pt-[70px]  text-left "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>

                  <motion.h1
                    className="text-black  text-bolder text-[30px]"
                    animate={animation_t}
                  >
                    VISIT US
                  </motion.h1>
                  <motion.h5
                    className="text-black  flex  flex-col font-semibold 
                      justify-between
                      mt-[80px]
                      
                      "
                    animate={animation_r}
                  >
                    {" "}
                    <strong>United Arab Emirates</strong>
                    <div>
                      <i className="fa-solid fa-house"></i>
                      Door no 43, Warehouse no 2, 18B Street, Ras al khor,
                      Industrial area 2. Dubai United Arab Emirates. Q Search
                    </div>
                  </motion.h5>
                  <motion.h5
                    className="text-black  flex  flex-col font-semibold 
                      justify-between
                      mt-[50px]
                      
                      "
                    animate={animation_r}
                  >
                    {" "}
                    <div>
                      <strong>ak@firsteventech.com</strong>
                      <br />
                      <strong>+971 55 145 4572</strong>
                    </div>
                    <div>
                      <strong>info@firsteventech.com</strong>
                      <br />
                      <strong>+971 52 112 2046</strong>
                    </div>
                  </motion.h5>
                </motion.div>
              </div>
              <div>
                <motion.div
                  className=" pl-[100px] pt-[70px] text-left "
                  animate={animation_t}
                >
                  <i class="fa-sharp fa-solid fa-plus " id="super"></i>
                  <motion.h1
                    className="text-black  text-bolder text-[30px]"
                    animate={animation_t}
                  >
                    WRITE TO US
                  </motion.h1>
                  <motion.h5
                    className="text-black  flex  flex-col  font-semibold 
                      mt-[50px]
                      
                      "
                    animate={animation_r}
                  >
                    <input
                      className="mt-[28px]"
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className="mt-[25px]"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="mt-[25px]"
                      type="number"
                      placeholder="Phone no."
                    />
                  </motion.h5>

                  <div className="main-con">
                    <motion.button
                      className=" fill text-black z-3"
                      whileHover={{
                        backgroundColor: "#000000"
                      }}
                      animate={animation_r}
                    >
                      SEND
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="section h-screen w-screen"></div>

          <div className="section ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
