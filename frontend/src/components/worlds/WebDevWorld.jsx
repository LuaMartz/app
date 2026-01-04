import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />;
};

const WebDevWorld = ({ projects }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-green-400 mb-4 font-mono">
            &lt;WEB_DEVELOPMENT /&gt;
          </h2>
          <p className="text-green-300 text-lg font-mono">// Building the digital future, one line at a time</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)' }}
              className="bg-black/80 border-2 border-green-500 p-6 rounded-lg backdrop-blur-sm cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-green-900 to-black rounded-md mb-4 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">{project.title}</h3>
              <p className="text-green-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-green-900/50 border border-green-500 text-green-300 text-xs rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevWorld;