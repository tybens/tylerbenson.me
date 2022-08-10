import gsap from "gsap";

const visibleStatus = ['entering', 'entered'];

/**
 * Is the given TransitionStatus visible?
 */
export const isVisible = status => visibleStatus.includes(status);

/**
 * Is the given TransitionStatus hidden?
 */
export const isHidden = status => !visibleStatus.includes(status);

/**
 * Forces a reflow to trigger transitions on enter
 */
export const reflow = node => node && node.offsetHeight;



export const exit = (node) => {
    var timeline = gsap.timeline({ paused: true });
  
    timeline.to(node, { duration: 0.25, autoAlpha: 0, ease: "power1.out" });
    timeline.play();
  };