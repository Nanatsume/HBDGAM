import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene0Matrix = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = [..."HAPPYBIRTHDAYTOGAM💖✨💕"];
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

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowCountdown(false);
      const endTimer = setTimeout(() => onComplete(), 1000);
      return () => clearTimeout(endTimer);
    }
  }, [countdown, onComplete]);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {showCountdown && countdown > 0 && (
            <motion.div
              key={countdown}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-pink-500 text-9xl font-bold font-matrix drop-shadow-[0_0_20px_rgba(236,72,153,1)]"
            >
              {countdown}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Scene0Matrix;
