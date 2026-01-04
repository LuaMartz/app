import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const CreativeDesignWorld = ({ projects }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${[
                'rgba(255,182,193,0.3)',
                'rgba(255,105,180,0.3)',
                'rgba(186,85,211,0.3)',
                'rgba(255,215,0,0.3)'
              ][Math.floor(Math.random() * 4)]}, transparent)`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Creative Design
          </h2>
          <p className="text-white/90 text-xl">Where imagination meets reality</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.15, type: 'spring' }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl cursor-pointer transform-gpu perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl mb-4 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
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

export default CreativeDesignWorld;