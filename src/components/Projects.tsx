import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);


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
      category: 'SDK / MODAL',
      link: 'https://sdkreactjs.netlify.app/',
      github: 'https://github.com/Abdias1998/feexpay-react-sdk',
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
      title: 'CineFlix',
      description: 'Projet de démonstration pour apprendre à manipuler une API (TMDB).',
      tech: ['React','Supabase','Tailwind CSS','TypeScript',"TMDB"],
      image: 'https://images.pexels.com/photos/7991372/pexels-photo-7991372.jpeg?auto=compress&cs=tinysrgb&w=800', 
      category: 'Projet Démo',
      link: 'https://netfilmapi.netlify.app/',
      github: 'https://github.com/Abdias1998/NetFilmApi',
    },
    
   
    {
      title: "Plateforme de Gestion des Guides",
      description: "Application SaaS avec tableau de bord professionnel pour administrer les guides, gérer leurs profils, suivre les réservations et consulter les statistiques en temps réel.",
      tech: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      image: "/bootstrap-analytics-dashboard.png",
      category: "SaaS / Dashboard",
      link: "https://leguidebjadmin.netlify.app/admin/dashboard",
      github: "https://github.com/Abdias1998/leguidebj_app/tree/main"
    },
{
  title: 'Application Station-Service',
  description: 'Application mobile permettant de localiser les stations proches, recharger le compte via FeexPay, payer le carburant, réserver et consulter des diagnostics.',
  tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'FeexPay API'],
  image: 'https://images.pexels.com/photos/34631204/pexels-photo-34631204.jpeg?auto=compress&cs=tinysrgb&w=800', // Mets ton image ici
  category: 'Mobile / Paiement',
  isMobile: true,
  video: '/videos/station-demo.mp4' // Ta vidéo de démonstration
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
                      {/* <motion.button
                        onClick={() => window.open(project.link, '_blank')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button> */}
                     <motion.button
  onClick={() => {
    if (project.video) {
      window.open(project.video, '_blank'); // ouvre la vidéo dans un nouvel onglet
    } else {
      window.open(project.link, '_blank'); // lien normal pour les autres projets
    }
  }}
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
      {selectedVideo && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-black rounded-xl p-4 max-w-2xl w-full">
      <video
        src={selectedVideo}
        controls
        autoPlay
        className="w-full rounded-lg"
      />
      <button
        className="mt-4 text-white px-4 py-2 bg-red-600 rounded-lg"
        onClick={() => setSelectedVideo(null)}
      >
        Fermer
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Projects;
