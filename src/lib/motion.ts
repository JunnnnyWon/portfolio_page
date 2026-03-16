import type { Transition, Variants } from "motion/react";

export const smoothTransition: Transition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

export const quickTransition: Transition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
};

export function fadeUp(distance = 24, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...smoothTransition, delay },
    },
  };
}

export function staggerChildren(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}
