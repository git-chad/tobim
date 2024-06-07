export const slideOut = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100svh",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const tAnimation = {
  initial: {
    y: "100%",
    x: "0%",
    opacity: 0.9,
  },
  animate: {
    y: ["100%", "0%", "0%"],
    opacity: 1,
    x: ["0px", "0px", "-8px"],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
  exit: {
    y: "-100%",
    opacity: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const obiAnimation = {
  initial: {
    opacity: 0,
    y: "100%",
    display: "none",
  },
  animate: {
    opacity: [0, 0, 1],
    y: ["100%", "100%", "0%"],
    display: ["none", "block", "block"],
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
      times: [0, 0.01, 1],
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const mAnimation = {
  initial: {
    y: "100%",
    x: "0%",
    opacity: 0.9,
  },
  animate: {
    y: ["100%", "0%", "0%"],
    opacity: 1,
    x: ["0px", "0px", "200px"],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100%",
    opacity: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
