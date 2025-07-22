import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Cog, Zap, Shield, Rocket, Database, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleServiceClick = (serviceName) => {
    toast({
      title: "🚧 Service Details Coming Soon!",
      description: `${serviceName} details aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const services = [
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Custom AI agents tailored to your business needs. From chatbots to complex automation systems.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Multi-platform Integration', '24/7 Automation'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Advanced ML algorithms to predict, analyze, and optimize your business operations.',
      features: ['Predictive Analytics', 'Data Mining', 'Pattern Recognition', 'Real-time Insights'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation.',
      features: ['Workflow Optimization', 'Task Automation', 'Integration Services', 'Performance Monitoring'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants that understand and engage naturally.',
      features: ['Voice Recognition', 'Context Awareness', 'Multi-language Support', 'Sentiment Analysis'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics.',
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Secure AI implementations with enterprise-grade security and compliance.',
      features: ['Security Audits', 'Compliance Monitoring', 'Risk Assessment', 'Data Protection'],
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-cyan-300 font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT consulting services designed to revolutionize your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 relative z-10`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-white font-semibold`}
                  >
                    Learn More
                    <Rocket className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let's discuss how our AI solutions can revolutionize your operations
            </p>
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
              Get Free Consultation
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;