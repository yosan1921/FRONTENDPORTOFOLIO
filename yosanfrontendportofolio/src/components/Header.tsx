import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 group"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"
              >
                <Code2 size={20} className="text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YOSAN GONFA
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`relative text-sm font-medium transition-colors duration-200 ${activeSection === link.id ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'
                      }`}
                  >
                    {link.label}
                  </span>

                  {/* Active Indicator */}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-slate-800/50 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.a
              href="mailto:your.email@example.com"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Hire Me</span>
              <div className="absolute inset-0 shadow-lg shadow-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 right-6 left-6 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-800/50 shadow-2xl overflow-hidden"
            >
              {/* Header Glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <nav className="flex flex-col p-6 gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative text-left px-4 py-3 rounded-lg transition-all duration-200 overflow-hidden group ${activeSection === link.id
                      ? 'text-blue-400 bg-slate-800/50'
                      : 'text-slate-300 hover:bg-slate-800/30'
                      }`}
                  >
                    {/* Active Background */}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <span className="relative flex items-center gap-3">
                      <span className="text-lg">{link.icon}</span>
                      <span className="font-medium">{link.label}</span>
                    </span>
                  </motion.button>
                ))}

                <motion.a
                  href="mailto:your.email@example.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold text-center block"
                >
                  Hire Me
                </motion.a>
              </nav>

              {/* Footer Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
