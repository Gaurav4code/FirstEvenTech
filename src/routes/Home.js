import react, { Component, useEffect } from "react";
import Hero from "../components/Hero";
import Particle from "../components/Particles";

import gal from "../assests/ori.jpg";

import { motion } from "framer-motion";

import Herodom from "../components/Herodom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import bg1 from "../assests/ocean.jpg";
import bg2 from "../assests/fluid.png";
import bg3 from "../assests/1080.jpg";
import bg4 from "../assests/smoke.jpg";

export default class Home extends Component {
  render() {
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
        <Navbar />

        <div className="contianer">
          {/* <div className=" snap-mandatory  snap-y  w-full "> */}
          <div className="section">
            <Herodom
              title="Research + Process + Experience"
              img={bg1}
              subtitle="We ensure businesses reach their full potential by building solutions around their<br/> business problems using data and intuitive design."
              btn="VIEW OUR SOLUTIONS"
            />
          </div>

          <div className="section">
            <Herodom
              title="Ideas + Passion + Innovation"
              img={bg2}
              subtitle="We ensure businesses reach their full potential by building solutions around their <br/>business problems using data and intuitive design."
              btn="VIEW OUR SOLUTIONS"
            />
          </div>

          {/* <div className="section">
            <Herodom
              title="Clients+Friends"
              subtitle="Meet some of our regulars."
              btn="VIEW OUR SOLUTIONS"
            />
          </div> */}

          <div className="section">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
