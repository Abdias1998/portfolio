import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              DevPortfolio
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Développeur Fullstack MERN
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Créé avec</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>© {currentYear} Tous droits réservés</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-sm mt-4 md:mt-0"
          >
            <div className="flex items-center space-x-4">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Mentions légales</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Confidentialité</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;