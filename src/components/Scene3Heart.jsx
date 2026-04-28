import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Scene3Heart = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  // A simple grid array representing a heart shape
  const heartPoints = [
    {x: -40, y: -40}, {x: -20, y: -60}, {x: 0, y: -40}, {x: 20, y: -60}, {x: 40, y: -40},
    {x: -60, y: -20}, {x: -40, y: -20}, {x: -20, y: -20}, {x: 0, y: -20}, {x: 20, y: -20}, {x: 40, y: -20}, {x: 60, y: -20},
    {x: -40, y: 0}, {x: -20, y: 0}, {x: 0, y: 0}, {x: 20, y: 0}, {x: 40, y: 0},
    {x: -20, y: 20}, {x: 0, y: 20}, {x: 20, y: 20},
    {x: 0, y: 40}
  ];

  useEffect(() => {
    if (visibleCount < heartPoints.length) {
      const timer = setTimeout(() => {
        setVisibleCount(c => c + 1);
      }, 300); // 300ms between each photo
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 3500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, heartPoints.length, onComplete]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-pink-50 overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full max-w-lg max-h-lg flex items-center justify-center">
        {heartPoints.map((point, i) => (
          i < visibleCount && (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute w-14 h-14 md:w-20 md:h-20 bg-pink-300 rounded-lg shadow-lg flex items-center justify-center overflow-hidden border-2 border-white"
              style={{
                transform: `translate(${point.x * 2.5}px, ${point.y * 2.5}px)`,
                zIndex: i
              }}
            >
               <span className="text-[10px] md:text-xs text-pink-600 text-center font-bold">รูป {i+1}</span>
            </motion.div>
          )
        ))}
      </div>
      
      {visibleCount === heartPoints.length && (
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-20 text-2xl md:text-4xl font-bold text-pink-500 drop-shadow-md text-center"
         >
            You have my whole heart ❤️
         </motion.div>
      )}
    </motion.div>
  );
};

export default Scene3Heart;
