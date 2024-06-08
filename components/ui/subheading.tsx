import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
};

const SubHeading = ({ text, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const subheading = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.65, 0.05, 0.36, 1],
      },
    },
  };

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.h2
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={subheading}
      >
        {text}
      </motion.h2>
    </div>
  );
};

export default SubHeading;
