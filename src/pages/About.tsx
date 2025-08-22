import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, Shield, Scale, BookOpen, MessageCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest and transparent practices in all our tax and legal consultations'
    },
    {
      icon: Target,
      title: 'Accountability',
      description: 'Taking full responsibility for our clients\' tax compliance and legal matters'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every tax return and legal document'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Ensuring all services meet the highest legal and regulatory standards'
    },
    {
      icon: BookOpen,
      title: 'Expertise',
      description: 'Deep knowledge of Pakistan tax laws and international regulations'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Personalized tax solutions tailored to each client\'s unique needs'
    }
  ];

  return (
    <div>
      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:block font-medium">WhatsApp</span>
        </a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-green-700 text-white overflow-hidden py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Tax-related background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 text-9xl font-bold text-white transform rotate-12">₹</div>
          <div className="absolute top-40 right-20 text-8xl font-bold text-green-300 transform -rotate-12">%</div>
          <div className="absolute bottom-32 left-1/4 text-7xl font-bold text-purple-300 transform rotate-45">TAX</div>
          <div className="absolute bottom-20 right-1/3 text-6xl font-bold text-blue-300 transform -rotate-45">LAW</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white opacity-20">NTN</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AR Consulting</h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AR Raheem Consulting</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pakistan's premier tax consultation and legal advisory firm, providing expert services 
              in tax compliance, business registration, and legal documentation since 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-9xl font-bold text-blue-600 transform rotate-12">§</div>
          <div className="absolute bottom-20 right-20 text-8xl font-bold text-green-600 transform -rotate-12">⚖</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2017, AR Raheem Consulting began with a clear mission: to provide comprehensive 
                tax consultation and legal advisory services that simplify complex regulatory 
                requirements for individuals and businesses across Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past 8 years, we have established ourselves as a trusted partner for 
                tax compliance, NTN registration, income tax filing, sales tax registration, 
                and business formation services. Our expertise extends to international tax 
                matters, including USA LLC formation and cross-border tax compliance.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to legal excellence, tax optimization, and client satisfaction 
                has earned us the trust of thousands of clients, from individual taxpayers 
                to multinational corporations operating in Pakistan.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-8 rounded-2xl"
            >
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                  2017
                </div>
                <div className="text-xl text-gray-700 font-semibold mb-6">Founded</div>
                <div className="text-lg text-gray-600">
                  Established to provide expert tax consultation and legal advisory services 
                  in Pakistan, focusing on compliance, optimization, and client success.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide comprehensive, reliable, and cost-effective tax consultation and 
                legal advisory services that ensure full compliance with Pakistani and 
                international tax laws while maximizing our clients' financial efficiency 
                and legal protection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as Pakistan's leading tax consultation and legal advisory 
                firm, setting industry standards for professional excellence, ethical 
                practices, and innovative solutions in tax compliance and business law.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 right-10 text-9xl font-bold text-purple-600 transform rotate-12">⚖</div>
          <div className="absolute bottom-32 left-20 text-8xl font-bold text-green-600 transform -rotate-12">§</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-blue-300 opacity-20">TAX</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our tax consultation and legal advisory services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Legal & Tax Expertise
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our comprehensive knowledge spans across multiple areas of tax law and business regulations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Tax Law Compliance</h3>
                <p className="text-blue-200">Income Tax, Sales Tax, and Federal Tax Regulations</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Business Law</h3>
                <p className="text-blue-200">Company Formation, Partnership Agreements, and Corporate Law</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">International Tax</h3>
                <p className="text-blue-200">Cross-border Taxation, USA LLC Formation, and Global Compliance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;