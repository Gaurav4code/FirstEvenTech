import { react } from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import gal from "../assests/ori.jpg";
import "./Hero.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { Component } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import Particle from "./Particles";
const Banner = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();
  const animation_1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.8
        }
      });
      animation_1.start({
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
      animation.start({
        x: -100,
        opacity: 0
      });

      animation_1.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        className="
           bg-black
           h-screen
           
           overflow-hidden
           
      "
      >
        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto"
          }}
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
        >
          <MouseParallaxChild
            factorX={0.25}
            factorY={0.25}
          ></MouseParallaxChild>
          <MouseParallaxChild factorX={0.25} factorY={0.25}>
            <div className="height-30 width-30">{/* <Particle /> */}</div>
            <motion.img className="z-3" animate={animation_1} src={props.img} />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>

      <motion.div
        animate={animation}
        className=" z-70  w-full h-60  mt-[-400px] flex justify-center  items-center align-middle 
          "
      >
        <div className=" w-[1000px] text-left  z-40">
          <h1 className=" text-6xl text-white font-extrabold tracking-wider">
            {props.title}
          </h1>
          <h4 className="text-[18px] text-white mt-3 w-[500px] tracking-wider">
            {}
            <p dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
          </h4>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
