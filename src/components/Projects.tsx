import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'FeexPay SDK JavaScript',
      description: 'Module de paiement intégré pour sites e-commerce avec API REST sécurisée',
      tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SDK / API'
    },
    {
      title: 'Dashboard Agrégation Paiement',
      description: 'Interface d\'administration complète pour la gestion des transactions',
      tech: ['React', 'NestJS', 'MongoDB', 'Chart.js'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App'
    },
    {
      title: 'App Achat de Tickets',
      description: 'Application de billetterie avec authentification et paiement sécurisé',
      tech: ['Next.js', 'Redux Toolkit', 'NextAuth', 'Stripe'],
      image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce'
    },
    {
      title: 'Boulangerie Bread Source',
      description: 'Site e-commerce minimaliste avec système de commande en ligne',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce'
    },
    {
      title: 'Service d\'Entretien en Ligne',
      description: 'Plateforme de gestion de réservations avec calendrier intégré',
      tech: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS'
    },
    {
      title: 'App Mobile Flutter FeexPay',
      description: 'Application mobile de test pour l\'intégration SDK FeexPay',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      image: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      isMobile: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Mes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Projets
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                        {project.isMobile && <Smartphone size={12} />}
                        <span>{project.category}</span>
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;