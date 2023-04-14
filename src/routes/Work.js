import React, { Component, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";
import { useState } from "react";
import gal from "../assests/ori.jpg";
import bit from "../assests/bitcoin.jpg";

import { useInView } from "react-intersection-observer";
import { Card, Card_1, Card_2, Card_3, Card_4 } from "../components/Card";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import Footer from "../components/Footer";

import Particle from "../components/Particles";

import WorkItems from "../components/WorkItems";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation
} from "framer-motion";
// import "./styles.css";

import Line from "../components/Lines";

const Work = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  const animation_1 = useAnimation();
  const animation_2 = useAnimation();
  const animation_3 = useAnimation();

  const animation_4 = useAnimation();

  return (
    <div className="w-screen h-[3000px] ">
      {/* <Navbar /> */}
      {/* <div className=" z-30 absolute h-screen w-screen overflow-hidden  border-2  border-red-400">
        
        <Line x1="25vw" x2="25vw" y1="0" y2="100vh" />
        <Line x1="50vw" x2="50vw" y1="0" y2="100vh" />
        <Line x1="75vw" x2="75vw" y1="0" y2="100vh" />
        <Line x1="0" x2="96vw" y1="50vh" y2="50vh" />
      </div> */}
      {/* <Line x1="140" x2="140" y1="0" y2="500" /> */}
      <Line x1="25vw" x2="25vw" y1="0" y2="100vh" />
      <Line x1="50vw" x2="50vw" y1="0" y2="100vh" />
      <Line x1="75vw" x2="75vw" y1="0" y2="100vh" />
      <Line x1="0" x2="100vw" y1="45vh" y2="45vh" />
      <div className="section grid grid-cols-4 absolute  overflow-hidden ">
        <motion.div
          style={{
            display: "flex",
            // placeItems: "center",
            //placeContent: "center",

            backgroundColor: "rgba(255, 255, 255, 0.05)",
            perspective: 1800
          }}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            animate(x, 200);
            animate(y, 200);
          }}
        >
          {" "}
          <motion.div
            style={{
              height: 350,
              rotateX: rotateX,
              rotateY: rotateY
            }}
          >
            <img src={gal} />
          </motion.div>
        </motion.div>

        <Card_1 title="Hello" />

        <Card_1 title="Our Works Take a look at some of our favourite projects." />

        <Card title="" />

        <Card title="" />

        <Card title="" />
        <Card_1 title="" img={gal} />
        <Card_1 title="" img={gal} />
        <Card_1 title="" img={gal} />
        <div className=" grid grid-cols-4 relative w-screen">
          <Card_1 title="sjks" img={gal} />

          <Card_2 title="One" img={gal} />

          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />

          <Card_1 title="One" img={gal} />

          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />

          <Card_1 title="One" img={gal} />

          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />

          <Card_1 title="sjks" img={gal} />
          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />

          <Card_1 title="sjks" img={gal} />
          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />
          <Card_1 title="sjks" img={gal} />
          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />
          <Card_1 title="sjks" img={gal} />
          <Card_2 title="sjks" img={gal} />
          <Card_3 title="sjks" img={gal} />
          <Card_4 title="sjks" img={gal} />
        </div>
      </div>
      <div className="section"></div>
    </div>
  );
};

export default Work;
