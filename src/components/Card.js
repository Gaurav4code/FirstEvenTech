import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
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

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          // type: "spring",
          duration: 1,
          bounce: 0.6,
          delay: 0.2
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 35,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <motion.div
        ref={ref}
        className="color-white "
        style={{
          display: "flex",
          // placeItems: "center",
          //placeContent: "center",

          backgroundColor: "rgba(255, 255, 255, 0.05)",
          perspective: 7600
        }}
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          animate(x, 200);
          animate(y, 200);
        }}
      >
        <motion.div className=" relative  place-items-end ">
          <motion.h1
            style={{ rotateX: rotateX, rotateY: rotateY }}
            className=" absolute  text-left text-bold ml-[1.2pc] w-[50px] z-30 color-white text-white mt-[8pc]"
          >
            {props.title}
          </motion.h1>
          <motion.img
            className="z-20"
            style={{
              height: 350,
              rotateX: rotateX,
              rotateY: rotateY
            }}
            src={props.img}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

const Card_1 = (props) => {
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

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
          delay: 0.6,

          stiffness: 20
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 60,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <motion.div
        ref={ref}
        className="color-white  border-[0.001px] border-gray-500"
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
        <motion.div className=" relative  place-items-end " animate={animation}>
          <motion.h1
            style={{ rotateX: rotateX, rotateY: rotateY }}
            className="absolute text-xl w-[120px] text-left z-30 color-white text-white mt-[175px] "
          >
            {props.title}
          </motion.h1>
          <motion.img
            style={{
              height: 350,
              rotateX: rotateX,
              rotateY: rotateY
            }}
            src={props.img}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

const Card_2 = (props) => {
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

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.2,
          delay: 1.0,
          stiffness: 20
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 60,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <motion.div
        ref={ref}
        className="color-white border-[0.001px] border-gray-500"
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
        <motion.div className=" relative  place-items-end " animate={animation}>
          <motion.h1
            style={{ rotateX: rotateX, rotateY: rotateY }}
            className="absolute z-30 color-white text-white top-60 "
          >
            {props.title}
          </motion.h1>
          <motion.img
            style={{
              height: 350,
              rotateX: rotateX,
              rotateY: rotateY
            }}
            src={props.img}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

const Card_3 = (props) => {
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

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.6,
          delay: 1.4,
          stiffness: 20
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 60,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <motion.div
        ref={ref}
        className="color-white border-[0.001px] border-gray-500"
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
        <motion.div className=" relative  place-items-end " animate={animation}>
          <motion.h1
            style={{ rotateX: rotateX, rotateY: rotateY }}
            className="absolute text-xl z-30 color-white text-white top-60 "
          >
            {props.title}
          </motion.h1>
          <motion.img
            style={{
              height: 350,
              rotateX: rotateX,
              rotateY: rotateY
            }}
            src={props.img}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

const Card_4 = (props) => {
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

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.6,
          delay: 1.8,
          stiffness: 20
        }
      });
    }
    if (!inView) {
      animation.start({
        y: 60,
        opacity: 0
      });
    }

    console.log("use effect hook, inView =", inView);
  }, [inView]);
  return (
    <>
      <motion.div
        ref={ref}
        className="color-white border-[0.02px] border-gray-500"
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
        <motion.div className=" relative  place-items-end " animate={animation}>
          <motion.h1
            style={{ rotateX: rotateX, rotateY: rotateY }}
            className="absolute text-xl z-30 color-white text-white top-60 "
          >
            {props.title}
          </motion.h1>
          <motion.img
            style={{
              height: 350,
              rotateX: rotateY,
              rotateY: rotateX
            }}
            src={props.img}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export { Card, Card_1, Card_2, Card_3, Card_4 };
