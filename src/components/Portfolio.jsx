import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, TrendingUp, Shield, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const handleProjectClick = (projectName) => {
    toast({
      title: "🚧 Project Details Coming Soon!",
      description: `${projectName} case study isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const projects = [
    {
      title: 'E-Commerce AI Assistant',
      category: 'Conversational AI',
      description: 'Intelligent shopping assistant that increased conversion rates by 45% through personalized product recommendations and natural language interactions.',
      image: 'Advanced AI chatbot interface helping customers with personalized shopping recommendations',
      icon: MessageSquare,
      tags: ['NLP', 'Machine Learning', 'E-commerce', 'Personalization'],
      metrics: ['45% Conversion Increase', '24/7 Support', '95% Satisfaction'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Predictive Analytics Platform',
      category: 'Data Intelligence',
      description: 'Advanced analytics platform that helps financial institutions predict market trends and optimize investment strategies with 89% accuracy.',
      image: 'Sophisticated financial analytics dashboard showing predictive market trends and data visualizations',
      icon: TrendingUp,
      tags: ['Predictive Analytics', 'Financial AI', 'Big Data', 'Visualization'],
      metrics: ['89% Accuracy', '$2M+ Saved', 'Real-time Insights'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Automated Quality Control',
      category: 'Computer Vision',
      description: 'AI-powered quality control system for manufacturing that reduced defects by 78% and increased production efficiency.',
      image: 'Industrial AI system performing automated quality control inspection on manufacturing line',
      icon: Shield,
      tags: ['Computer Vision', 'Manufacturing', 'Automation', 'Quality Control'],
      metrics: ['78% Defect Reduction', '40% Faster Inspection', '99.9% Accuracy'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Healthcare Diagnosis AI',
      category: 'Medical AI',
      description: 'Revolutionary diagnostic assistant that helps medical professionals identify conditions faster and more accurately than traditional methods.',
      image: 'Medical AI interface showing diagnostic analysis and patient data visualization',
      icon: Bot,
      tags: ['Healthcare AI', 'Diagnosis', 'Medical Imaging', 'Deep Learning'],
      metrics: ['92% Diagnostic Accuracy', '60% Faster Diagnosis', 'FDA Approved'],
      gradient: 'from-red-500 to-orange-600'
    },
    {
      title: 'Smart Supply Chain',
      category: 'Logistics AI',
      description: 'Intelligent supply chain optimization system that reduced costs by 35% while improving delivery times and inventory management.',
      image: 'Advanced supply chain management dashboard with AI-powered logistics optimization',
      icon: TrendingUp,
      tags: ['Supply Chain', 'Optimization', 'Logistics', 'IoT Integration'],
      metrics: ['35% Cost Reduction', '25% Faster Delivery', 'Zero Stockouts'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Fraud Detection System',
      category: 'Security AI',
      description: 'Advanced fraud detection system that protects financial transactions with real-time analysis and 99.7% accuracy rate.',
      image: 'Cybersecurity AI dashboard showing real-time fraud detection and threat analysis',
      icon: Shield,
      tags: ['Fraud Detection', 'Security', 'Real-time Analysis', 'Financial AI'],
      metrics: ['99.7% Accuracy', '$5M+ Protected', 'Real-time Detection'],
      gradient: 'from-yellow-500 to-red-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.3, 1, 1.3] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Bot className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Proven
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img  
                    alt={project.image}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      <project.icon className="h-4 w-4 mr-1" />
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.title);
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-2`} />
                        <span className="text-gray-400">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of companies that have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all"
              >
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleProjectClick('Portfolio')}
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;