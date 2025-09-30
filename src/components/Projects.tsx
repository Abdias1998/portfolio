import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Détection d’Objets Temps Réel',
      description: 'Application web utilisant TensorFlow.js + COCO-SSD pour identifier en direct des personnes, objets ou animaux. Interface visuelle avec encadrement des éléments détectés.',
      tech: ['JavaScript', 'TensorFlow.js', 'COCO-SSD', 'HTML / CSS'],
      image: '/object-detection-classification-ai-cameras-sensors-banner_1200x628.jpg',
      category: 'Vision par Ordinateur / Intelligence Artificielle',
      link: 'https://model-coco-ssd.netlify.app/',
      github: 'https://github.com/Abdias1998/models-coco-ssd',
    },  
    {
      title: 'FeexPay SDK React',
      description: 'Module de paiement intégré pour sites e-commerce avec API REST sécurisée',
      tech: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SDK / API',
      link: 'https://sdkjsonline.netlify.app/',
      github: 'https://www.npmjs.com/package/@feexpay/react-sdk?activeTab=readme',
    },
    {
      title: 'App Notation des Professeurs',
      description: 'Plateforme web permettant aux élèves d’évaluer leurs enseignants de manière anonyme et constructive, avec un tableau de bord pour visualiser les retours.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://images.pexels.com/photos/5905475/pexels-photo-5905475.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      link: 'https://profreview.netlify.app/',
      github: 'https://github.com/Abdias1998/note_appStudient',
    },
    {
      title: 'App Achat de Tickets',
      description: 'Application de billetterie avec authentification et paiement sécurisé',
      tech: ['Next.js', 'Redux Toolkit', 'NextAuth', 'Stripe'],
      image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      link: 'https://integrationpaymentapp.netlify.app/',
      github: 'https://github.com/Abdias1998/App-Integration-Payment-',
    },
   
    {
      title: 'Service d\'Entretien en Ligne',
      description: 'Plateforme de gestion de réservations avec calendrier intégré',
      tech: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS'
    },
    {
      title: 'App Mobile React Native FeexPay',
      description: 'Application mobile de test pour l\'intégration SDK FeexPay',
      tech: ['React Native', 'Firebase', 'REST API'],
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
                        onClick={() => window.open(project.link, '_blank')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                      <motion.button
                        onClick={() => window.open(project.github, '_blank')}
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