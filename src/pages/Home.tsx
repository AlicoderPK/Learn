import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Star, Calculator, FileText, Building, TrendingUp, MessageCircle, Phone } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Corporate Partners' },
  ];

  const clientLogos = [
    { name: 'PITB', logo: '/New Project.png' },
    { name: 'SNGPL', logo: '/New Project (1).png' },
    { name: 'WHO', logo: '/New Project (2).png' },
    { name: 'PCB', logo: '/New Project (3).png' },
    { name: 'PTCL', logo: '/New Project (4).png' },
    { name: 'Hen N Bun', logo: '/New Project (5).png' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      company: 'Tech Solutions Ltd',
      text: 'AR Consulting made our tax compliance seamless. Their expertise in corporate taxation saved us significant time and money.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Khan',
      company: 'Retail Chain Owner',
      text: 'Professional service with quick turnaround. They handled our sales tax registration efficiently and provided excellent ongoing support.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Muhammad Ali',
      company: 'Manufacturing Business',
      text: 'Outstanding tax consultation services. Their team is knowledgeable, responsive, and always available when we need assistance.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Ahmed',
      company: 'E-commerce Store',
      text: 'Best decision we made was choosing AR Consulting for our tax needs. They simplified everything and saved us from penalties.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Hassan Shah',
      company: 'Import/Export Business',
      text: 'Their expertise in sales tax and customs matters is exceptional. Highly recommend for any business owner.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Aisha Malik',
      company: 'Freelancer',
      text: 'Made my income tax filing so easy. Great service and very affordable pricing. Will definitely use again.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const popularServices = [
    {
      icon: FileText,
      title: 'NTN Registration',
      description: 'Quick and hassle-free National Tax Number registration',
      price: 'Starting PKR 5,000'
    },
    {
      icon: Calculator,
      title: 'Return Filing',
      description: 'Professional income tax return preparation and filing',
      price: 'Starting PKR 8,000'
    },
    {
      icon: Building,
      title: 'Sales Tax Register',
      description: 'Complete sales tax registration and compliance',
      price: 'Starting PKR 10,000'
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* AI Models with Blue Squares */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-16 h-16 bg-blue-400 opacity-20 rounded-lg"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-12 h-12 bg-blue-300 opacity-30 rounded-lg"
          />
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -50, 0],
              rotate: [0, 90, 180]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-500 opacity-15 rounded-lg"
          />
          <motion.div
            animate={{ 
              x: [0, -60, 0],
              y: [0, 20, 0],
              rotate: [0, -90, -180]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-14 h-14 bg-blue-200 opacity-25 rounded-lg"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Smart Tax Solutions
              <span className="text-blue-300"> Made Simple</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional tax consultation and business services in Pakistan with 10+ years of experience. 
              Expert NTN registration, income tax filing, sales tax registration, and company formation services.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 font-semibold rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section - Horizontal Scrolling */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-blue-700">
              We have worked with many prestigious brands and organizations
            </p>
          </motion.div>
          
          <div className="relative h-32 overflow-hidden">
            <motion.div
              animate={{ x: [-2000, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex space-x-16 absolute items-center"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-40 h-28 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-full object-contain"
                      style={{ maxWidth: '120px', maxHeight: '80px' }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Tax Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-9xl font-bold text-blue-600 transform rotate-12">₹</div>
          <div className="absolute top-40 right-20 text-8xl font-bold text-green-600 transform -rotate-12">%</div>
          <div className="absolute bottom-32 left-1/4 text-7xl font-bold text-purple-600 transform rotate-45">TAX</div>
          <div className="absolute bottom-20 right-1/3 text-6xl font-bold text-orange-600 transform -rotate-45">₹</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-blue-300 opacity-30">NTN</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most requested tax services with competitive pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 relative z-10"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold text-lg mb-4">{service.price}</div>
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center text-blue-600 hover:text-blue-700 font-semibold transition-colors border border-blue-200 rounded-lg py-2"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Continuous Scroll */}
      <section className="py-20 bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What People Say About Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real feedback from our satisfied clients
            </p>
          </motion.div>

          <div className="relative h-64 overflow-hidden">
            <motion.div
              animate={{ x: [-1800, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex space-x-6 absolute"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-56">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Your Tax Matters Sorted?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert tax consultation, NTN registration, and business formation services. Let us handle your compliance needs professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/923001234567"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white hover:bg-green-600 font-semibold rounded-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;