import React, { useState, useEffect } from "react";
import Herodom from "../components/Herodom";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import { motion, useAnimation } from "framer-motion";
import Particle from "../components/Particles";
import Navbar from "../components/Navbar";

import circle from "../assests/523.png";
import gal from "../assests/1080.jpg";
import squares from "../assests/524.png";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { useInView } from "react-intersection-observer";

const About = () => {
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
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.8
        }
      });
      animation_l.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.8
        }
      });
    }
    if (!inView) {
      animation_t.start({
        opacity: 0
      });
      animation_r.start({
        x: -100,
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
    <>
      <div className="w-screen ">
        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
        >
          <MouseParallaxChild>
            <Particle />
          </MouseParallaxChild>
        </MouseParallaxContainer>

        {/* <div className=" snap-mandatory  snap-y  w-full "> */}
        <div className=" container">
          <div className="section h-screen ">
            {show && <Navbar />}

            <Banner
              title="Creating what's next +"
              img={gal}
              subtitle="Building content and experiences with an eye on tomorrow."
            />
          </div>

          <div ref={ref} onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
            <div className="section  ">
              <div className="h-[600px]   bg-[#000000]">
                <div
                  ref={ref}
                  className=" my-[20px] flex grid grid-cols-2 w-screen mx-30 border-red-400 justify-evenly"
                >
                  <div className=" pl-[130px] pt-[20px]">
                    <motion.img animate={animation_r} src={circle} />
                  </div>
                  <motion.div
                    className=" text-left px-5 py-10  mr-30"
                    animate={animation_t}
                  >
                    <h1 className="text-slate-50 text-[30px] text-bolder">
                      Cutting-Edge Solutions for Immersive <br />
                      Experiences
                      <br />
                      by Industry <strong>Experts</strong>
                      <br />
                      <br />
                    </h1>
                    <motion.h5
                      className="text-slate-50 font-semibold "
                      animate={animation_l}
                    >
                      Our team is comprised of exceptional members in every
                      department, including <br />
                      design, development, and project management. This allows
                      us to deliver exquisite <br />
                      experiences with cutting-edge solutions to our clients in
                      a timely and efficient manner.
                      <br /> We have expertise in various fields , such as
                      experiential
                      <br /> solutions, 3D & 2D projection mapping, augmented
                      reality, virtual reality, hologram, and robotics.
                      <br /> Our diverse skillset and experience enable us to
                      execute multiple
                      <br /> projects simultaneously, without compromising on
                      quality.
                      <br /> <br />
                      We prioritize fast turnaround times without sacrificing
                      quality, allowing us <br />
                      to meet the tight deadlines of our clients . Our
                      commitment to delivering
                      <br /> top-notch solutions in a timely and efficient
                      manner has earned us a reputation as <br />a reliable and
                      trusted partner for experiential and digital solutions.
                    </motion.h5>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="h-[600px] bg-[#fff] flex bg-[#000000]">
                <div
                  ref={ref}
                  className=" my-[20px]  mx-20 flex grid grid-cols-2 w-screen  
                   justify-evenly"
                >
                  <motion.div
                    className=" pl-[100px]  text-left "
                    animate={animation_t}
                  >
                    <h1 className="text-black text-[30px] text-bolder">
                      Innovating the Future
                      <br />
                      <br />
                    </h1>
                    <motion.h4
                      className="text-black  font-semibold"
                      animate={animation_r}
                    >
                      With offices in Bangalore and Dubai, we've been
                      <br /> innovating the future for more than a decade. Our
                      team has delivered more than 200 projects for over 50
                      clients across multiple industries. From conceptualizing
                      and building cutting-edge applications, to crafting
                      compelling stories through films, we are passionate about
                      using technology to create
                      <br />
                      immersive experiences that captivate audiences.
                      <br />
                      <br />
                      With a team of more than 20 experienced professionals, we
                      bring a wealth of
                      <br /> expertise to every
                      <br />
                      project we undertake. Join us as we continue innovating
                      <br />
                      and shaping the future.
                    </motion.h4>
                  </motion.div>
                  <div>
                    <motion.img animate={animation_l} src={squares} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
