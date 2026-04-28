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
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1, type: "spring" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 pointer-events-none"
      >
        <h1 className="font-bold text-pink-400 text-center leading-[1.1] drop-shadow-xl text-[20vw]" style={{ textShadow: '0 0 15px white, 0 0 30px white' }}>
          Are you <br/> ready?
        </h1>
        <p className="text-white mt-8 opacity-90 text-xl font-bold px-6 py-2 bg-black/40 rounded-full backdrop-blur-sm shadow-xl">
          (แตะที่หน้าจอเพื่อไปต่อ)
        </p>
      </motion.div>

      {/* Characters walking in */}
      <div className="absolute bottom-[10%] left-0 w-full flex flex-wrap justify-center px-2 gap-2">
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 + index * 0.2, duration: 1.2, type: "spring", bounce: 0.2 }}
            className="w-16 h-20 md:w-24 md:h-28 relative overflow-hidden drop-shadow-2xl"
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
