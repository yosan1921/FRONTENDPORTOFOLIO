import { Palette, Cpu, Database, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Palette size={32} />,
      title: 'Frontend Development',
      emoji: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', description: 'Building interactive UIs', level: 90 },
        { name: 'JavaScript (ES6+)', description: 'Modern web logic', level: 85 },
        { name: 'HTML5 & CSS3', description: 'Semantic markup', level: 95 },
        { name: 'Tailwind CSS', description: 'Utility-first styling', level: 88 },
        { name: 'Bootstrap', description: 'Rapid prototyping', level: 80 }
      ]
    },
    {
      icon: <Cpu size={32} />,
      title: 'Backend Development',
      emoji: '⚙️',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', description: 'Scalable server applications', level: 85 },
        { name: 'PHP', description: 'Dynamic web solutions', level: 80 },
        { name: 'RESTful APIs', description: 'Clean architecture', level: 90 },
        { name: 'Express.js', description: 'Fast, unopinionated framework', level: 85 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      emoji: '💾',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', description: 'NoSQL flexibility', level: 85 },
        { name: 'MySQL', description: 'Relational data management', level: 88 },
        { name: 'Database Design', description: 'Optimized schemas', level: 82 },
        { name: 'Data Modeling', description: 'Efficient queries', level: 80 }
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: 'Development Tools',
      emoji: '🔧',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', description: 'Version control', level: 90 },
        { name: 'VS Code', description: 'Primary IDE', level: 95 },
        { name: 'Postman', description: 'API testing', level: 85 },
        { name: 'npm & Composer', description: 'Package management', level: 82 }
      ]
    }
  ];

  const badges = [
    { text: 'Responsive Design', icon: '📱' },
    { text: 'Performance Optimization', icon: '⚡' },
    { text: 'Clean Code', icon: '✨' },
    { text: 'Agile Workflow', icon: '🚀' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-4"
          >
            <span className="text-blue-400">⚡</span>
            <span className="text-sm text-blue-400 font-medium">My Tech Stack</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Tools I Work{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                With
              </span>
              <motion.div
                animate={{
                  scaleX: [0, 1],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building modern web applications with industry-standard technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative h-full p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all duration-300 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.5 }}
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                          />
                          <p className="text-slate-200 font-medium">{skill.name}</p>
                        </div>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-1 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                      
                      <p className="text-xs text-slate-400">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300" />
              
              {/* Badge */}
              <div className="relative px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700 rounded-full hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <span className="text-lg">{badge.icon}</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                    {badge.text}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
}
