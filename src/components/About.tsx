import { Code2, Users, Lightbulb, TrendingUp, Heart, Coffee, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const approaches = [
    {
      icon: <Users size={24} />,
      title: 'User-First Thinking',
      description: 'Every line of code serves the end user',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Clean Architecture',
      description: 'Maintainable, scalable, documented code',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Collaboration',
      description: 'Great products are built by great teams',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '3+', label: 'Years Experience', icon: '📅' },
    { value: '10+', label: 'Projects Completed', icon: '✅' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const interests = [
    { icon: <Coffee size={18} />, text: 'Coffee Enthusiast', color: 'text-amber-400' },
    { icon: <Code2 size={18} />, text: 'Open Source', color: 'text-blue-400' },
    { icon: <Rocket size={18} />, text: 'Innovation', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Floating Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
              >
                <Heart size={16} className="text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">About Me</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The Developer{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Behind The Code
                  </span>
                  <motion.div
                    animate={{
                      scaleX: [0, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                  />
                </span>
              </h2>
            </div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-slate-300 leading-relaxed"
            >
              <p className="text-xl font-medium">
                I'm not just a coder —{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  I'm a problem solver.
                </span>
              </p>

              <p className="text-lg">
                My journey into development started with curiosity and evolved into a
                passion for building web applications that make a difference. Whether it's
                crafting smooth user experiences on the frontend or architecting robust
                systems on the backend, I love every step of the development process.
              </p>

              <p className="text-lg">
                <span className="text-purple-400 font-semibold">Beyond the keyboard:</span> When I'm not
                shipping features, you'll find me contributing to open-source projects,
                experimenting with new frameworks, and staying active in the developer
                community.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.text}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                >
                  <span className={interest.color}>{interest.icon}</span>
                  <span className="text-sm text-slate-300">{interest.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket size={20} className="text-blue-400" />
                  <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Current Focus</p>
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Deepening my expertise in microservices architecture and exploring Next.js
                  for modern full-stack applications.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative pl-6 py-4 border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <p className="text-slate-300 text-lg italic mb-3">
                "Good code is its own best documentation."
              </p>
              <footer className="text-sm text-slate-500 font-medium">
                — Steve McConnell
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right Content - Approach Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                My Approach
              </h3>
              <p className="text-slate-400 text-lg">
                Principles that guide my development process
              </p>
            </div>

            {/* Approach Cards */}
            <div className="grid gap-4">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${approach.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-xl`} />
                  
                  {/* Card */}
                  <div className="relative p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all duration-300 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${approach.gradient} bg-opacity-20 flex-shrink-0`}
                      >
                        <div className={`bg-gradient-to-br ${approach.gradient} bg-clip-text text-transparent`}>
                          {approach.icon}
                        </div>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                          {approach.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {approach.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${approach.gradient} opacity-5 rounded-full blur-xl`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative text-center p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="text-3xl mb-1">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
