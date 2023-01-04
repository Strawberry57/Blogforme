import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";
function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 16,
    },
  };
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  return (
    <>
      <motion.div
        className="cursor-dot-outline"
        variants={variants}
        animate="default"
      >
        <div className="cursor-dot"></div>
      </motion.div>
    </>
  );
}

export default Cursor;
