import React from 'react';
import { useSpring, animated } from 'react-spring';

function Star() {
  const props = useSpring({ x: 100, from: { x: 0 } });
  return (
    <animated.svg strokeDashoffset={props.x}>
      <path d="..." />
    </animated.svg>
  );
}

export default Star;
