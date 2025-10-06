import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
               A.A
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Développeur
          </span>
          <br />
          <span className="text-white">Fullstack MERN</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Je transforme des idées en solutions digitales performantes avec
          <span className="text-cyan-400"> 06+ années d'expérience</span>
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Mes Projets</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>

          <div className="flex gap-4">
  {/* Bouton pour visualiser */}
  <motion.a
    href="/CV_ABDIAS_V9.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 font-semibold transition-colors"
  >
    Voir Mon CV
  </motion.a>

  {/* Bouton pour télécharger */}
  <motion.a
    href="/CV_ABDIAS_V9.pdf"
    download="CV_Adinsi_Abdias.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 font-semibold transition-colors"
  >
    Télécharger Mon CV
  </motion.a>
</div>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;