import React from 'react';
import { motion } from 'framer-motion';

const Scene1Park = ({ onComplete }) => {
  // We simulate 12 characters by using the sanrio-sprite class and changing background position
  const characters = Array.from({ length: 12 }).map((_, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    return { id: i, x: col * 33.33, y: row * 50 };
  });

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden cursor-pointer"
      style={{ backgroundImage: "url('/assets/park.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={onComplete}
    >
      {/* Overlay text */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-20 w-full text-center z-20 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          Are you ready?
        </h1>
        <p className="text-white mt-4 opacity-90 drop-shadow-md text-lg">
          (แตะที่หน้าจอเพื่อไปต่อ)
        </p>
      </motion.div>

      {/* Characters walking in */}
      <div className="absolute bottom-[20%] left-0 w-full flex flex-wrap justify-center px-2 gap-2">
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 + index * 0.2, duration: 1.2, type: "spring", bounce: 0.2 }}
            className="w-16 h-20 md:w-24 md:h-28 relative rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl"
          >
            <div 
              className="absolute inset-0 sanrio-sprite bg-no-repeat w-full h-full"
              style={{ backgroundPosition: `${char.x}% ${char.y}%` }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Scene1Park;
