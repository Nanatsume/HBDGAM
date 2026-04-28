import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Scene4Proposal = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-100 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {!accepted ? (
        <motion.div 
          className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm w-full mx-4 border border-white"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-7xl mb-6"
          >
            💍
          </motion.div>
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            GAM
          </h1>
          <h2 className="text-xl font-semibold text-pink-500 mb-8">
            Will you be my girlfriend? <br/> (เป็นแฟนกันนะ)
          </h2>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setAccepted(true)}
              className="py-3 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              YES! ❤️
            </button>
            <button 
              onClick={() => setAccepted(true)}
              className="py-3 px-6 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              แน่นอนอยู่แล้ว! 💕
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4 drop-shadow-md">
            I Love You! 💖
          </h1>
          <p className="text-xl text-pink-800 font-medium">
            ดีใจที่สุดเลยยย รักเค้าให้มากๆ น้าา
          </p>
          <div className="mt-8">
             <span className="text-8xl">🥰</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Scene4Proposal;
