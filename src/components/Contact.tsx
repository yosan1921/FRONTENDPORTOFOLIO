import { Mail, Linkedin, Github, MessageCircle, CheckCircle2, Briefcase, Code, Lightbulb, Users, Instagram, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const availableFor = [
    { icon: <Briefcase size={18} />, text: 'Full-Stack Development Positions', gradient: 'from-blue-500 to-cyan-500' },
    { icon: <Code size={18} />, text: 'Freelance Web Projects', gradient: 'from-purple-500 to-pink-500' },
    { icon: <Lightbulb size={18} />, text: 'Technical Consultations', gradient: 'from-green-500 to-emerald-500' },
    { icon: <Users size={18} />, text: 'Open Source Collaborations', gradient: 'from-orange-500 to-red-500' }
  ];

  const contactMethods = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      description: "Let's connect professionally",
      gradient: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:border-blue-500'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/yosan1921',
      href: 'https://github.com/yosan1921',
      description: 'Check out my code',
      gradient: 'from-purple-500 to-indigo-500',
      hoverColor: 'hover:border-purple-500'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'Telegram',
      value: '@yo2_n',
      href: 'https://t.me/yo2_n',
      description: 'Quick chats and collaborations',
      gradient: 'from-teal-500 to-emerald-500',
      hoverColor: 'hover:border-teal-500'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: 'yo2n_2022',
      href: 'https://instagram.com/yo2n_2022',
      description: 'Follow my journey',
      gradient: 'from-pink-500 to-orange-500',
      hoverColor: 'hover:border-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
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
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
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
            <Send size={16} className="text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's Build Something{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Amazing Together
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
            Open to full-time roles, freelance projects, and exciting collaborations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Available For */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                Available For
              </h3>
              <div className="space-y-4">
                {availableFor.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-xl`} />
                    
                    {/* Card */}
                    <div className="relative flex items-center gap-4 p-5 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all duration-300">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-20`}>
                        <div className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                          {item.icon}
                        </div>
                      </div>
                      <span className="flex-1 text-slate-300 font-medium">{item.text}</span>
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                  />
                  <p className="text-slate-200 font-semibold text-lg">Fast Response Time</p>
                </div>
                <p className="text-slate-400">
                  I typically respond within 24 hours or less
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* CTA Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="relative">
                <Sparkles className="mx-auto mb-4 text-blue-400" size={32} />
                <p className="text-xl text-slate-300 mb-2">
                  Have a project in mind?
                </p>
                <p className="text-3xl md:text-4xl font-bold mb-6">
                  Let's make it{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    happen
                  </span>
                </p>
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-semibold"
                >
                  <Mail size={20} />
                  <span>Start a Conversation</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={18} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative block"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-2xl`} />
                
                {/* Card */}
                <div className={`relative p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl ${method.hoverColor} hover:bg-slate-800/60 transition-all duration-300 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} bg-opacity-20 flex-shrink-0`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                          {method.label}
                        </h4>
                        <div className="text-slate-600">•</div>
                        <span className="text-sm text-slate-400 truncate">
                          {method.description}
                        </span>
                      </div>
                      <p className={`text-sm font-medium bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                        {method.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-slate-600 group-hover:text-blue-400 transition-all text-2xl"
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${method.gradient} opacity-10 rounded-full blur-xl`} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-800"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-lg">
              Designed & Built by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                YOSAN GONFA
              </span>
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Made with React, Tailwind CSS, and ☕
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/yosan1921', color: 'blue' },
              { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', color: 'blue' },
              { icon: MessageCircle, href: 'https://t.me/yo2_n', color: 'purple' },
              { icon: Mail, href: 'mailto:your.email@example.com', color: 'pink' },
              { icon: Instagram, href: 'https://instagram.com/yo2n_2022', color: 'pink' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-${social.color}-500 hover:bg-slate-800 transition-all duration-300`}
              >
                <social.icon className={`group-hover:text-${social.color}-400 transition-colors`} size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8 text-sm text-slate-500"
        >
          <p>© 2026 All rights reserved. Built with passion and purpose.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
