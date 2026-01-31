import { ExternalLink, Github, TrendingUp, Star, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'Entrepreneurship Student Career Development Club',
      subtitle: 'University Club Website & Management Platform',
      description:
        'University clubs need professional online presence and member management. I built this platform to showcase club activities, manage events, and connect students with entrepreneurship opportunities.',
      features: [
        'Modern responsive design with smooth animations',
        'Event management and registration system',
        'Member profiles and networking features',
        'Blog and news section for updates',
        'Contact forms and social media integration'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      achievement: 'Increased club visibility and member engagement by 60%',
      github: 'https://github.com/yosan1921/Entrepreneurship-Student-Career-Development-Club',
      demo: 'https://entrepreneurship-club-demo.com',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc2NDU4OTUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500 to-cyan-500',
      stats: { stars: 45, views: '1.2k' }
    },
    {
      title: 'ShopSphere',
      subtitle: 'E-Commerce Platform with Payment Integration',
      description:
        'Small businesses need affordable, professional online stores. ShopSphere delivers enterprise features without the enterprise price tag.',
      features: [
        'Complete shopping cart with checkout flow',
        'Secure payment processing integration',
        'Admin dashboard for inventory management',
        'Order tracking and email notifications',
        'Responsive design for mobile shoppers'
      ],
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Stripe API'],
      achievement: 'Processed 500+ transactions in first month of deployment',
      github: 'https://github.com/yosan1921/shopsphere',
      demo: 'https://shopsphere-demo.com',
      image: 'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ2MjI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-500 to-pink-500',
      stats: { stars: 89, views: '1.8k' }
    },
    {
      title: 'DevConnect',
      subtitle: 'Developer Community & Resource Hub',
      description:
        'Junior developers need mentorship and resources in one place. DevConnect bridges the gap between learning and real-world development.',
      features: [
        'User authentication with secure sessions',
        'Resource sharing and bookmarking system',
        'Community forum with threaded discussions',
        'Profile systems with skill showcases',
        'Search functionality with filters'
      ],
      tech: ['React', 'Node.js', 'MySQL', 'Express', 'CSS Modules'],
      achievement: 'Grew to 200+ active users within 2 weeks of launch',
      github: 'https://github.com/yosan1921/devconnect',
      demo: 'https://devconnect-demo.com',
      image: 'https://images.unsplash.com/photo-1762330469392-62aa4a330e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ2NzI4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-green-500 to-teal-500',
      stats: { stars: 156, views: '3.1k' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Floating Orbs */}
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
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4"
          >
            <span className="text-purple-400">💼</span>
            <span className="text-sm text-purple-400 font-medium">Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work
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
            Real projects solving real problems with modern technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-3xl`} />

              <div className={`relative grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''
                }`}>
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 shadow-2xl">
                    <div className="aspect-video relative">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 flex gap-2"
                    >
                      <div className="px-3 py-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-lg flex items-center gap-1.5">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{project.stats.stars}</span>
                      </div>
                      <div className="px-3 py-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-lg flex items-center gap-1.5">
                        <Eye size={14} className="text-blue-400" />
                        <span className="text-sm font-medium">{project.stats.views}</span>
                      </div>
                    </motion.div>

                    {/* Hover Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-slate-900/95 backdrop-blur-md flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 font-medium"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 font-medium`}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-2xl`} />
                </motion.div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`} />
                    <span className="text-sm text-slate-400 font-medium">{project.subtitle}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-300 leading-relaxed text-lg"
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Key Features</p>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Achievement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className={`relative overflow-hidden p-5 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-slate-700/50 rounded-xl backdrop-blur-sm`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="relative flex items-start gap-3">
                      <TrendingUp className={`text-blue-400 flex-shrink-0 mt-1`} size={22} />
                      <div>
                        <p className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">Impact</p>
                        <p className="text-slate-100 font-medium text-lg">{project.achievement}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-3 md:hidden pt-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium`}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/yosan1921"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 font-medium backdrop-blur-sm group"
          >
            <Github size={20} className="group-hover:text-blue-400 transition-colors" />
            <span>View All Projects on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={18} className="group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
