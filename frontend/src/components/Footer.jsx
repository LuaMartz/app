import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              Lua<span className="text-purple-400">Martz</span>
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>{t('footer.made')}</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>| © {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;