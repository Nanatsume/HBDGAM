import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene0Matrix = ({ onComplete }) => {
  const canvasRef = useRef(null);
  
  const words = ["3", "2", "1", "HAPPY", "BIRTH", "DAY", "TO", "GAM", "💖"];
  const [wordIndex, setWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ใช้เฉพาะตัวอักษร HAPPYBIRTHDAY สำหรับฉากหลัง
    const chars = [..."HAPPYBIRTHDAY"];
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#f472b6'; // Tailwind pink-400
      ctx.font = fontSize + 'px "Courier New"';
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // ปรับเวลาให้ตกลงมาช้าลง (จากเดิม 33ms เปลี่ยนเป็น 80ms)
    const interval = setInterval(draw, 80);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (wordIndex < words.length) {
      const timer = setTimeout(() => {
        setWordIndex(i => i + 1);
      }, 1000); // ความเร็วในการเปลี่ยน (1 วินาทีต่อคำ)
      return () => clearTimeout(timer);
    } else {
      setShowWord(false);
      const endTimer = setTimeout(() => onComplete(), 1000);
      return () => clearTimeout(endTimer);
    }
  }, [wordIndex, words.length, onComplete]);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {showWord && wordIndex < words.length && (
            <motion.div
              key={wordIndex}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-pink-500 text-6xl md:text-9xl font-bold font-matrix drop-shadow-[0_0_20px_rgba(236,72,153,1)] text-center"
            >
              {words[wordIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Scene0Matrix;
