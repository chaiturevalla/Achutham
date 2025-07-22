import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Social Link Coming Soon!",
      description: `${platform} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const handleLinkClick = (linkName) => {
    toast({
      title: "🚧 Page Coming Soon!",
      description: `${linkName} page isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Portfolio', action: () => scrollToSection('portfolio') },
    { name: 'Contact', action: () => scrollToSection('contact') }
  ];

  const services = [
    { name: 'AI Agent Development', action: () => handleLinkClick('AI Agent Development') },
    { name: 'Machine Learning', action: () => handleLinkClick('Machine Learning') },
    { name: 'Process Automation', action: () => handleLinkClick('Process Automation') },
    { name: 'Data Intelligence', action: () => handleLinkClick('Data Intelligence') }
  ];

  const resources = [
    { name: 'Blog', action: () => handleLinkClick('Blog') },
    { name: 'Case Studies', action: () => handleLinkClick('Case Studies') },
    { name: 'Documentation', action: () => handleLinkClick('Documentation') },
    { name: 'Support', action: () => handleLinkClick('Support') }
  ];

  const legal = [
    { name: 'Privacy Policy', action: () => handleLinkClick('Privacy Policy') },
    { name: 'Terms of Service', action: () => handleLinkClick('Terms of Service') },
    { name: 'Cookie Policy', action: () => handleLinkClick('Cookie Policy') },
    { name: 'GDPR', action: () => handleLinkClick('GDPR') }
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Achutham Software India Pvt Ltd
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of AI innovation. We transform businesses through intelligent automation, 
                machine learning, and cutting-edge AI solutions that drive real results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>contact@achuthamsoftware.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>+91 123 456 7890</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={service.action}
                    className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={resource.action}
                    className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with AI Innovations</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI trends, case studies, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
              <button
                onClick={() => handleLinkClick('Newsletter')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Achutham Software India Pvt Ltd. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Github, name: 'GitHub' }
              ].map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  className="w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;