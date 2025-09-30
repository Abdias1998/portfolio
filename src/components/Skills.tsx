import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 93, color: 'from-green-500 to-green-700' },
        { name: 'NestJS', level: 87, color: 'from-red-500 to-red-700' },
        { name: 'Python/Django', level: 82, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Express.js', level: 90, color: 'from-gray-500 to-gray-700' },
        { name: 'MongoDB', level: 89, color: 'from-green-600 to-green-800' },
      ]
    },
    {
      title: 'Mobile & Cloud',
      skills: [
        { name: 'React Native', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'AWS', level: 88, color: 'from-orange-400 to-orange-600' },
        { name: 'PostgreSQL', level: 86, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Docker', level: 88, color: 'from-blue-500 to-blue-700' },
      ]
    },
    {
      title: 'IA & Data Science',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Deep Learning', level: 82, color: 'from-violet-400 to-violet-600' },
        { name: 'TensorFlow', level: 80, color: 'from-amber-400 to-amber-600' },
        { name: 'OpenAI API', level: 90, color: 'from-teal-400 to-teal-600' },
      ]
    }
  ];

  const tools = [
    'Git', 'AWS Lambda', 'AWS S3', 'Firebase', 'Stripe API', 'Jest', 'Cypress',
    'Figma', 'Postman', 'Linux', 'Nginx', 'GraphQL', 'Redux Toolkit', 'Jupyter',
    'Pandas', 'NumPy', 'Scikit-learn', 'Hugging Face', 'LangChain', 'Redis'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50 relative overflow-hidden">
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
              Compétences
            </span>
          </motion.h2>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">
              Outils & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-500/20 hover:to-purple-500/20 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;