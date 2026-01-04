import React from 'react';
import { motion } from 'framer-motion';
import { Film, Play, Sparkles } from 'lucide-react';

const AnimationWorld = ({ projects }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
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
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Film className="w-16 h-16 text-purple-400" />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            ANIMATION REALM
          </h2>
          <p className="text-purple-200 text-xl">Bringing stories to life through motion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                rotateX: 10
              }}
              className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
                    >
                      <Play className="w-5 h-5" />
                      <span>Play Animation</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-800 to-pink-800">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-purple-200 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationWorld;