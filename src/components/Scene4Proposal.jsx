import React from 'react';
import { motion } from 'framer-motion';

const Scene4Proposal = () => {
  const handleRedirect = () => {
    window.location.href = "https://will-you-be-my-valentine-peach.vercel.app/";
  };

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-100 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm w-full mx-4 border border-white"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-8xl mb-6 cursor-pointer drop-shadow-lg"
          onClick={handleRedirect}
        >
          💌
        </motion.div>
        <h1 className="text-3xl font-bold text-pink-600 mb-2">
          GAM
        </h1>
        <h2 className="text-xl font-semibold text-pink-500 mb-8">
          ยังมีเซอร์ไพรส์สุดท้ายรออยู่นะ...
        </h2>
        <div className="flex flex-col gap-4">
          <button 
            onClick={handleRedirect}
            className="py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-pulse"
          >
            เปิดดูเลย! ✨
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Scene4Proposal;
