import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Code, Palette, Zap, Camera, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const worlds = [
    {
      id: 'webdev',
      icon: Code,
      gradient: 'from-green-500 to-emerald-600',
      path: '/projects?category=webdev'
    },
    {
      id: 'design',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-600',
      path: '/projects?category=design'
    },
    {
      id: 'branding',
      icon: Zap,
      gradient: 'from-gray-600 to-gray-800',
      path: '/projects?category=branding'
    },
    {
      id: 'uxui',
      icon: Sparkles,
      gradient: 'from-blue-500 to-purple-600',
      path: '/projects?category=uxui'
    },
    {
      id: 'social',
      icon: TrendingUp,
      gradient: 'from-pink-500 to-yellow-500',
      path: '/projects?category=social'
    },
    {
      id: 'animation',
      icon: Camera,
      gradient: 'from-indigo-500 to-pink-600',
      path: '/projects?category=animation'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-white mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {t('hero.subtitle')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-purple-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t('hero.greeting')}
          </motion.p>
        </motion.div>

        {/* Worlds Portal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            {t('hero.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {worlds.map((world, index) => {
              const Icon = world.icon;
              return (
                <motion.div
                  key={world.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  onClick={() => navigate(world.path)}
                  className="cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`relative bg-gradient-to-br ${world.gradient} rounded-2xl p-8 aspect-square flex flex-col items-center justify-center`}>
                    <Icon className="w-12 h-12 text-white mb-4" />
                    <span className="text-white font-bold text-center text-sm">
                      {t(`worlds.${world.id}`)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;