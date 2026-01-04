import React from 'react';
import { motion } from 'framer-motion';

const BrandingWorld = ({ projects }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            BRANDING STUDIO
          </h2>
          <p className="text-gray-400 text-xl font-light">Crafting identities that resonate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900 rounded-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-6 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingWorld;