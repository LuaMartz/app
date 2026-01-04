import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const SocialMediaWorld = ({ projects }) => {
  const [metrics, setMetrics] = useState({
    likes: 0,
    comments: 0,
    shares: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 500),
        shares: Math.floor(Math.random() * 300)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 overflow-hidden">
      {/* Animated floating icons */}
      <div className="absolute inset-0">
        {[Heart, MessageCircle, Share2, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${(i * 25)}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
            SOCIAL MEDIA HUB
          </h2>
          <p className="text-white/90 text-xl mb-8">Creating viral moments & building communities</p>
          
          {/* Live metrics */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <motion.div 
              key={metrics.likes}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
              <span className="text-white font-bold text-xl">{metrics.likes}</span>
            </motion.div>
            <motion.div 
              key={metrics.comments}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-xl">{metrics.comments}</span>
            </motion.div>
            <motion.div 
              key={metrics.shares}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full"
            >
              <Share2 className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-xl">{metrics.shares}</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -10, rotate: Math.random() * 6 - 3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-300 to-yellow-300 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs rounded-full font-medium">
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

export default SocialMediaWorld;