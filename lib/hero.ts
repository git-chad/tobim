export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.65, 0.05, 0.36, 1],
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 200 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 2,
      duration: 0.8,
      ease: [0.65, 0.05, 0.36, 1],
    },
  }),
};
