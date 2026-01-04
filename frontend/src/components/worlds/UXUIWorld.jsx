import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Figma, Palette } from 'lucide-react';

const UXUIWorld = ({ projects }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      {/* Floating wireframe elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-white/10 rounded-lg"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <Smartphone className="w-12 h-12 text-blue-400" />
            <Layout className="w-12 h-12 text-purple-400" />
            <Figma className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            UX/UI LAB
          </h2>
          <p className="text-blue-200 text-xl">Designing experiences, not just interfaces</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mb-6 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                  <Palette className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-blue-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm rounded-lg">
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

export default UXUIWorld;