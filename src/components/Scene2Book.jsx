import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene2Book = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleBookClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      if (currentPage < 2) {
        setCurrentPage(p => p + 1);
      } else {
        onComplete();
      }
    }
  };

  const pages = [
    { left: "รูปที่ 1 (รอใส่รูป)", right: "รูปที่ 2 (รอใส่รูป)", color: "bg-pink-200" },
    { left: "รูปที่ 3 (รอใส่รูป)", right: "รูปที่ 4 (รอใส่รูป)", color: "bg-purple-200" },
    { left: "รูปที่ 5 (รอใส่รูป)", right: "รูปที่ 6 (รอใส่รูป)", color: "bg-rose-200" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
      style={{ backgroundImage: "url('/assets/space.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={handleBookClick}
    >
      <div className="relative w-80 h-96 md:w-96 md:h-[30rem] perspective-1000">
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="cover"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center rounded-r-2xl shadow-[10px_0_20px_rgba(0,0,0,0.5)] border-l-8 border-pink-600"
              style={{ backgroundImage: "url('/assets/cover.png')" }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-r-2xl flex items-end justify-center pb-8">
                <p className="text-white text-xl font-bold drop-shadow-md animate-pulse">
                  แตะเพื่อเปิดหนังสือ
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="book"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex"
            >
              {/* Left Page */}
              <div className="w-1/2 h-full bg-[#fdfbf7] rounded-l-md shadow-inner border-r border-gray-300 flex items-center justify-center p-2 relative">
                 <div className={`w-full h-full ${pages[currentPage].color} rounded flex flex-col items-center justify-center text-center p-2 border-4 border-dashed border-white shadow-md`}>
                    <span className="text-pink-600 font-semibold">{pages[currentPage].left}</span>
                 </div>
              </div>
              {/* Right Page */}
              <div className="w-1/2 h-full bg-[#fdfbf7] rounded-r-md shadow-inner flex items-center justify-center p-2 relative">
                 <div className={`w-full h-full ${pages[currentPage].color} rounded flex flex-col items-center justify-center text-center p-2 border-4 border-dashed border-white shadow-md`}>
                    <span className="text-pink-600 font-semibold">{pages[currentPage].right}</span>
                 </div>
                 <div className="absolute bottom-2 right-2 text-xs text-gray-500 font-bold">แตะเพื่อเปลี่ยนหน้า</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Scene2Book;
