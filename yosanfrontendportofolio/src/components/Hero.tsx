import { Github, Linkedin, MessageCircle, ArrowRight, Instagram, Mail, Sparkles, Code2, Zap, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/9e6738752d1c2d44187db758a5760fa21d2e3601.png';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Experiences';
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setUploadedImage(savedImage);
      console.log('Loaded profile image from localStorage');
    }
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name, file.type, file.size);

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        console.log('Image loaded, data URL length:', result.length);
        setUploadedImage(result);

        // Save to localStorage for persistence
        try {
          localStorage.setItem('profileImage', result);
          console.log('Profile image saved to localStorage');
        } catch (error) {
          console.error('Failed to save image to localStorage:', error);
          alert('Image is too large to save. Try a smaller image.');
        }

        // Show success notification
        setShowUploadSuccess(true);
        setTimeout(() => setShowUploadSuccess(false), 3000);
      };
      reader.onerror = () => {
        console.error('Error reading file');
        alert('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const resetProfileImage = () => {
    setUploadedImage(null);
    localStorage.removeItem('profileImage');
    console.log('Profile image reset to default');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      {/* Animated Gradient Orbs */}
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
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* Floating Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/3 left-1/4 opacity-10"
      >
        <Code2 size={48} className="text-blue-400" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }}
        className="absolute bottom-1/3 right-1/4 opacity-10"
      >
        <Zap size={40} className="text-purple-400" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl"
                >
                  👋
                </motion.span>
                <span className="text-sm text-slate-300">
                  Hey there! I'm{' '}
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    YOSAN GONFA
                  </span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">I Build Digital</span>
                <span className="relative inline-block">
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-16 md:h-20 bg-blue-400 ml-1"
                    />
                  </span>
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10"
                  />
                </span>
                <span className="block text-white mt-2">That Matter</span>
              </h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-300 max-w-xl leading-relaxed"
              >
                Full-Stack Developer specializing in{' '}
                <span className="text-blue-400 font-semibold">React</span> &{' '}
                <span className="text-purple-400 font-semibold">Node.js</span> ecosystems.
                Turning complex problems into elegant, scalable solutions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-slate-400 max-w-xl leading-relaxed"
              >
                From pixel-perfect interfaces to robust backend systems — I craft web
                applications that users love and businesses trust.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: '💼', value: '10+', label: 'Projects Delivered', color: 'blue' },
                { icon: '⚡', value: 'Clean Code', label: 'Scalable Solutions', color: 'purple' },
                { icon: '🚀', value: 'Performance', label: 'Focused Development', color: 'pink' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative px-6 py-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-slate-600 transition-all duration-300">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <span className={`text-${stat.color}-400 text-3xl`}>{stat.icon}</span>
                      <span className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold overflow-hidden inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Let's Talk
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </span>
                <div className="absolute inset-0 shadow-lg shadow-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border-2 border-slate-700 rounded-xl hover:border-blue-500 hover:bg-slate-800/50 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  See My Work
                  <Sparkles size={18} className="group-hover:text-blue-400 transition-colors" />
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 pt-4"
            >
              {[
                { icon: Github, href: 'https://github.com/yosan1921', color: 'blue' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', color: 'blue' },
                { icon: MessageCircle, href: 'https://t.me/yo2_n', color: 'purple' },
                { icon: Instagram, href: 'https://instagram.com/yo2n_2022', color: 'pink' },
                { icon: Mail, href: 'mailto:your.email@example.com', color: 'pink' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-${social.color}-500 transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${social.color}-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <social.icon className={`relative group-hover:text-${social.color}-400 transition-colors`} size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl"
              />

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm group"
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="YOSAN GONFA - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageWithFallback
                    src={profileImage}
                    alt="YOSAN GONFA - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

                {/* Upload Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={triggerFileInput}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  >
                    <Camera size={32} className="text-white" />
                  </motion.button>
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">
                      {uploadedImage ? 'Change Photo' : 'Upload Photo'}
                    </p>
                    <p className="text-slate-300 text-sm">Click to upload from your PC</p>
                  </div>

                  {/* Reset Button - Only show if there's an uploaded image */}
                  {uploadedImage && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        resetProfileImage();
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 px-4 py-2 bg-red-500/80 hover:bg-red-500 rounded-lg text-white text-sm font-medium transition-colors"
                    >
                      Reset to Default
                    </motion.button>
                  )}
                </div>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  aria-label="Upload profile photo"
                />
              </motion.div>

              {/* Success Notification */}
              {showUploadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-500 rounded-xl shadow-xl shadow-green-500/30 z-10"
                >
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-xl">✓</span>
                    <span>Photo Updated!</span>
                  </div>
                </motion.div>
              )}

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl hover:shadow-green-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <motion.span
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
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -left-8 w-24 h-24 border-2 border-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-purple-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('skills')}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2 hover:border-blue-500 transition-colors">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
