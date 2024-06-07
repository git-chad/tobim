
export const slideOut = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100svh",
    transition: {
      duration: 0.6,
      ease: [0.77,0,0.18,1],
    },
  },
};

export const tobiA = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.3,
      ease: [0.77,0,0.18,1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: [0.77,0,0.18,1],
    },
  },
};

export const mA = {
  initial: {
    y: "100%",
    x: "-76%",
  },
  animate: {
    y: ["100%", "0%", "0%"],
    x: ["-76%", "-76%", "0%"],
    transition: {
      duration: 0.6,
      ease: [0.77,0,0.18,1],
      times: [0, 0.5, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: [0.77,0,0.18,1],
    },
  },
};