import React, { useEffect, useState } from "react";
import useInterval from "../../context/useInterval";

const TypingAnimation = ({ areas, loop = false, speed = 100 }) => {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [goBackwards, setGoBackwards] = useState(false);

  useEffect(() => {
    setCurrentAreaIndex(0);
    setIndex(0);
    setGoBackwards(false);
  }, [areas]);

  useInterval(() => {
    const currentArea = areas[currentAreaIndex];
    if (index < currentArea.length && !goBackwards) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (loop && index > 0 && goBackwards) {
      setIndex((prevIndex) => prevIndex - 1);
    }
    if (index === currentArea.length) {
      setTimeout(() => {
        setGoBackwards(true);
      }, 1000);
    } else if (index === 0) {
      setGoBackwards(false);
      setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % areas.length);
    }
  }, speed);

  return <>{areas[currentAreaIndex].slice(0, index)}</>;
};

export default TypingAnimation;
