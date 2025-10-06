import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const timelineItems = [
    { year: '2020', title: 'Début en développement web', description: 'Premiers projets PHP/MySQL' },
    { year: '2021', title: 'Spécialisation JavaScript', description: 'Maîtrise de React et Node.js' },
    { year: '2022', title: 'Expertise MERN Stack', description: 'Projets complexes avec MongoDB' },
    { year: '2023', title: 'Développement mobile', description: 'Expansion vers React Native' },
    { year: '2022', title: 'Architecture & Leadership', description: 'Lead developer sur des projets SaaS' },
    { year: '2025', title: 'Expert Senior', description: '06+ ans, mentor et consultant' },
  ];

  const stats = [
    { icon: Code, label: 'Projets Complétés', value: '150+' },
    { icon: Users, label: 'Clients Satisfaits', value: '50+' },
    { icon: Zap, label: 'Technologies Maîtrisées', value: '20+' },
    { icon: Award, label: 'Années d\'Expérience', value: '06+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ y: 50 }}
            animate={inView ? { y: 0 } : { y: 50 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            À Propos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Moi
            </span>
          </motion.h2>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Passionné par le développement web et mobile, je conçois des solutions digitales
              innovantes et performantes. Spécialisé dans l'écosystème{' '}
              <span className="text-cyan-400 font-semibold">MERN Stack</span>, je maîtrise également
              les technologies modernes comme{' '}
              <span className="text-purple-400 font-semibold">Next.js, NestJS, React Native</span> et bien d'autres.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-colors">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative z-10 mx-auto"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;