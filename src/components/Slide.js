import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const Slider_left = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();
  const animation_bt = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1,
        transition: {
          delay: 0.4
        }
      });
      animation_r.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_bt.start({
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
        x: 100,
        opacity: 0
      });
      animation_bt.start({
        y: 30,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  return (
    <>
      <div>
        <div className="h-screen flex justify-center align-middle" ref={ref}>
          <div className=" mx-[100px] my-[100px]  flex grid grid-cols-2   ">
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              resetOnLeave
            >
              <MouseParallaxChild>
                <motion.div
                  animate={animation_l}
                  className="w-[490px] h-[490px] ml-[110px] "
                >
                  <img src={props.img} />
                </motion.div>
              </MouseParallaxChild>
            </MouseParallaxContainer>
            <motion.div
              className="p-[30px] font-black text-white align-middle  text-left px-5 py-10 "
              animate={animation_t}
            >
              <h1 className="text-slate-50 text-[30px]">
                {/* <span id="super">+</span> */}
                {/* <FontAwesomeIcon icon={faPlus} /> */}
                <i class="fa-sharp fa-solid fa-plus " id="super">
                  {" "}
                </i>

                <h1
                  className=" tracking-wider"
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></h1>
              </h1>

              <motion.h5
                className="text-slate-50 font-semibold
                 pr-[60px]
                "
                animate={animation_bt}
              >
                <p
                  className="tracking-wider"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></p>
              </motion.h5>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const Slider_right = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const animation_r = useAnimation();
  const animation_l = useAnimation();
  const animation_t = useAnimation();
  const animation_bt = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_t.start({
        opacity: 1,
        transition: {
          delay: 0.4
        }
      });
      animation_r.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_bt.start({
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
        x: 100,
        opacity: 0
      });
      animation_bt.start({
        y: 30,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          delay: 0.3
        }
      });
      animation_l.start({
        x: -100,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);

  return (
    <>
      <div>
        <div className="h-screen flex justify-center align-middle" ref={ref}>
          <div className=" mx-[100px] my-[100px]  flex grid grid-cols-2   ">
            <motion.div
              className="pl-[50px]  w-[720px] font-black text-white align-middle  text-left px-5 py-10 "
              animate={animation_t}
            >
              <h1 className="text-slate-50 text-[30px]">
                {/* <span id="super">+</span> */}
                {/* <FontAwesomeIcon icon={faPlus} /> */}
                <i class="fa-sharp fa-solid fa-plus " id="super">
                  {" "}
                </i>

                <h1
                  className=" tracking-wider"
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></h1>
              </h1>
              <motion.h5
                className="text-slate-50 font-semibold
                 
                "
                animate={animation_bt}
              >
                <p
                  className="tracking-wider"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                ></p>
              </motion.h5>
            </motion.div>
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              resetOnLeave
            >
              <MouseParallaxChild>
                <motion.div
                  animate={animation_r}
                  className=" w-[490px] h-[490px] ml-[60px]"
                >
                  <img src={props.img} />
                </motion.div>
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export { Slider_left, Slider_right };
