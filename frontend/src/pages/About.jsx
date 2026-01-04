import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Briefcase, MapPin } from 'lucide-react';
import { skills } from '../data/mockProjects';

const About = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const tools = ['Figma', 'Illustrator', 'After Effects', 'Blender', 'Maya', 'Photoshop', 'HTML/CSS', 'React'];
  const keyAreas = isSpanish 
    ? ['Diseño UX/UI', 'Animación', 'Branding', 'Web', 'Storytelling Visual']
    : ['UX/UI Design', 'Animation', 'Branding', 'Web', 'Visual Storytelling'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-8 overflow-hidden">
              <img 
                src="https://pps.services.adobe.com/api/profile/98BD6ED5574E45517F000101@AdobeID/image/fc23f797-86fa-4083-97e7-496931ffbeb4/276" 
                alt="Luisa Martinez" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">LuaMartz</h2>
            <p className="text-xl text-gray-300 mb-6">
              {t('about.bio')}
            </p>
            <div className="flex items-center gap-2 text-purple-400 mb-4">
              <Briefcase className="w-5 h-5" />
              <span>{t('about.experience')}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400 mb-6">
              <MapPin className="w-5 h-5" />
              <span>Bogotá, Colombia</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/luamartz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href="https://www.behance.net/luisamartinez23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Behance
              </a>
            </div>
          </motion.div>

          {/* Tools & Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('about.tools')}</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('about.skills')}</h3>
              <div className="flex flex-wrap gap-3">
                {keyAreas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-purple-300 mb-6">{t('about.available')}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-full"
              onClick={() => window.location.href = '/contact'}
            >
              {t('about.hire')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;