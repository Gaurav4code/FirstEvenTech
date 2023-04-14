import "../styles.css";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Line(props) {
  return (
    <motion.svg
      className="absolute w-screen z-10"
      width="100vw"
      height="100vh"
      viewBox="0 0 100vh 100wv"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1={props.x1}
        y1={props.y1}
        x2={props.x2}
        y2={props.y2}
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
}
