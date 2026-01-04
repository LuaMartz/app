import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mockProjects, categories } from '../data/mockProjects';
import WebDevWorld from '../components/worlds/WebDevWorld';
import CreativeDesignWorld from '../components/worlds/CreativeDesignWorld';
import BrandingWorld from '../components/worlds/BrandingWorld';
import UXUIWorld from '../components/worlds/UXUIWorld';
import SocialMediaWorld from '../components/worlds/SocialMediaWorld';
import AnimationWorld from '../components/worlds/AnimationWorld';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isSpanish = i18n.language === 'es';

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const filteredProjects = selectedCategory === 'all'
    ? mockProjects
    : mockProjects.filter(p => p.category === selectedCategory);

  const renderWorld = () => {
    const projects = filteredProjects.map(p => ({
      ...p,
      title: isSpanish && p.titleEs ? p.titleEs : p.title,
      description: isSpanish && p.descriptionEs ? p.descriptionEs : p.description,
      tags: isSpanish && p.tagsEs ? p.tagsEs : p.tags
    }));

    switch (selectedCategory) {
      case 'webdev':
        return <WebDevWorld projects={projects} />;
      case 'design':
        return <CreativeDesignWorld projects={projects} />;
      case 'branding':
        return <BrandingWorld projects={projects} />;
      case 'uxui':
        return <UXUIWorld projects={projects} />;
      case 'social':
        return <SocialMediaWorld projects={projects} />;
      case 'animation':
        return <AnimationWorld projects={projects} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20">
            <div className="container mx-auto px-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-bold text-white text-center mb-16"
              >
                {t('projects.title')}
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full">
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
    }
  };

  return (
    <div className="min-h-screen">
      {/* Category Filter */}
      <div className="fixed top-24 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSpanish ? cat.nameEs : cat.nameEn}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {renderWorld()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;