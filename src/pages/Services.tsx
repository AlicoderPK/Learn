import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Building2, 
  Users, 
  Shield,
  DollarSign,
  Globe,
  Search,
  Clock,
  CheckCircle,
  X,
  MessageCircle,
  Phone,
  Calculator,
  Info
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    // Primary Services
    {
      icon: FileText,
      title: 'NTN Registration',
      description: 'National Tax Number registration for individuals and businesses',
      category: 'Primary Services',
      color: 'cyan',
      timeframe: '3-5 business days',
      pricing: 'PKR 5,000',
      docsRequired: ['CNIC Copy', 'Address Proof', 'Business Documents (if applicable)'],
      details: {
        timeframe: '3-5 business days',
        benefits: [
          'Fast NTN registration process',
          'Complete documentation handling',
          'FBR compliance assurance',
          'Certificate delivery',
          'Ongoing support'
        ],
        process: [
          'Document verification',
          'Application preparation',
          'FBR submission',
          'Follow-up and tracking',
          'NTN certificate delivery'
        ],
        pricing: 'Starting from PKR 5,000'
      }
    },
    {
      icon: Calculator,
      title: 'Income Tax Return',
      description: 'Professional income tax return preparation and filing services',
      category: 'Primary Services',
      color: 'blue',
      timeframe: '3-5 business days',
      pricing: 'PKR 8,000',
      docsRequired: ['CNIC Copy', 'Salary Certificate', 'Bank Statements', 'Investment Documents'],
      details: {
        timeframe: '3-5 business days',
        benefits: [
          'Expert tax preparation by certified professionals',
          'Maximum deductions and tax savings',
          'Error-free filing with accuracy guarantee',
          'Audit support and representation',
          'Year-round tax planning advice'
        ],
        process: [
          'Document collection and review',
          'Tax calculation and optimization',
          'Return preparation and review',
          'Electronic filing with FBR',
          'Confirmation and record keeping'
        ],
        pricing: 'Starting from PKR 8,000'
      }
    },
    {
      icon: FileText,
      title: 'Sales Tax Registration',
      description: 'Complete sales tax registration and compliance services',
      category: 'Primary Services',
      color: 'green',
      timeframe: '5-7 business days',
      pricing: 'PKR 10,000',
      docsRequired: ['Business Registration', 'Bank Account Details', 'Premises Documents', 'CNIC'],
      details: {
        timeframe: '5-7 business days',
        benefits: [
          'Fast-track registration process',
          'Complete documentation handling',
          'Compliance guidance and support',
          'Monthly return filing assistance',
          'Penalty avoidance strategies'
        ],
        process: [
          'Eligibility assessment',
          'Document preparation',
          'Application submission',
          'Follow-up with authorities',
          'Registration certificate delivery'
        ],
        pricing: 'Starting from PKR 10,000'
      }
    },
    {
      icon: Users,
      title: 'Company Registration',
      description: 'Business incorporation and company formation services',
      category: 'Primary Services',
      color: 'purple',
      timeframe: '7-10 business days',
      pricing: 'PKR 25,000',
      docsRequired: ['Directors CNIC', 'Address Proof', 'MOA/AOA', 'Share Capital Details'],
      details: {
        timeframe: '7-10 business days',
        benefits: [
          'Complete incorporation process',
          'Legal compliance assurance',
          'Corporate structure optimization',
          'Ongoing compliance support',
          'Business advisory services'
        ],
        process: [
          'Name reservation and approval',
          'Documentation preparation',
          'SECP filing and registration',
          'Certificate issuance',
          'Post-incorporation compliance'
        ],
        pricing: 'Starting from PKR 25,000'
      }
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Trademark, copyright, and patent registration services',
      category: 'Primary Services',
      color: 'orange',
      timeframe: '2-6 months',
      pricing: 'PKR 15,000',
      docsRequired: ['Application Form', 'Logo/Design Files', 'Priority Documents', 'CNIC'],
      details: {
        timeframe: '2-6 months',
        benefits: [
          'Complete IP protection strategy',
          'Trademark search and registration',
          'Copyright and patent filing',
          'IP portfolio management',
          'Infringement protection'
        ],
        process: [
          'IP search and analysis',
          'Application preparation',
          'Filing with relevant authorities',
          'Examination and response',
          'Registration and maintenance'
        ],
        pricing: 'Starting from PKR 15,000'
      }
    },
    {
      icon: Globe,
      title: 'USA LLC & Tax Filing',
      description: 'US business formation and tax compliance services',
      category: 'Primary Services',
      color: 'red',
      timeframe: '10-15 business days',
      pricing: 'PKR 75,000',
      docsRequired: ['Passport Copy', 'Address Proof', 'Business Plan', 'Bank Statements'],
      details: {
        timeframe: '10-15 business days',
        benefits: [
          'Delaware/Wyoming LLC formation',
          'EIN number acquisition',
          'US tax return preparation',
          'Compliance monitoring',
          'Banking assistance'
        ],
        process: [
          'State selection and filing',
          'EIN application',
          'Operating agreement preparation',
          'Tax registration setup',
          'Ongoing compliance management'
        ],
        pricing: 'Starting from PKR 75,000'
      }
    },
    // Bundled Picks
    {
      icon: Globe,
      title: 'USA LLC',
      description: 'Complete US LLC formation package',
      category: 'Top Picks',
      color: 'blue',
      timeframe: '7-10 business days',
      pricing: 'PKR 50,000',
      docsRequired: ['Passport Copy', 'Address Proof', 'Contact Details'],
      details: {
        timeframe: '7-10 business days',
        benefits: [
          'State filing and registration',
          'EIN number included',
          'Operating agreement',
          'Registered agent service',
          'Compliance calendar'
        ],
        process: [
          'State selection consultation',
          'Articles of organization filing',
          'EIN application',
          'Document preparation',
          'Delivery and setup'
        ],
        pricing: 'Starting from PKR 50,000'
      }
    },
    {
      icon: Building2,
      title: 'Company Formation',
      description: 'Complete business setup and incorporation',
      category: 'Top Picks',
      color: 'green',
      timeframe: '5-7 business days',
      pricing: 'PKR 20,000',
      docsRequired: ['CNIC Copy', 'Address Proof', 'Business Plan', 'Directors Details'],
      details: {
        timeframe: '5-7 business days',
        benefits: [
          'Name reservation',
          'SECP registration',
          'MOA and AOA preparation',
          'Share certificates',
          'Compliance setup'
        ],
        process: [
          'Business structure consultation',
          'Name availability check',
          'Documentation preparation',
          'SECP filing',
          'Certificate collection'
        ],
        pricing: 'Starting from PKR 20,000'
      }
    },
    {
      icon: DollarSign,
      title: 'USA Bank Account',
      description: 'US business bank account opening assistance',
      category: 'Top Picks',
      color: 'purple',
      timeframe: '15-20 business days',
      pricing: 'PKR 40,000',
      docsRequired: ['LLC Documents', 'EIN Certificate', 'Passport Copy', 'Address Proof'],
      details: {
        timeframe: '15-20 business days',
        benefits: [
          'Bank selection guidance',
          'Application assistance',
          'Document preparation',
          'Remote account opening',
          'Online banking setup'
        ],
        process: [
          'Bank selection consultation',
          'Document compilation',
          'Application submission',
          'Bank communication',
          'Account activation'
        ],
        pricing: 'Starting from PKR 40,000'
      }
    },
    {
      icon: FileText,
      title: 'Tax Filing',
      description: 'Comprehensive tax return preparation and filing',
      category: 'Top Picks',
      color: 'orange',
      timeframe: '3-5 business days',
      pricing: 'PKR 8,000',
      docsRequired: ['Income Documents', 'Previous Returns', 'Bank Statements', 'CNIC'],
      details: {
        timeframe: '3-5 business days',
        benefits: [
          'Individual and business returns',
          'Maximum deduction identification',
          'Error-free preparation',
          'E-filing included',
          'Audit protection'
        ],
        process: [
          'Document collection',
          'Tax calculation',
          'Return preparation',
          'Review and filing',
          'Confirmation delivery'
        ],
        pricing: 'Starting from PKR 8,000'
      }
    },
    // Business Registration Options
    {
      icon: Users,
      title: 'Sole Proprietorship',
      description: 'Individual business registration and setup',
      category: 'Business Registration',
      color: 'cyan',
      timeframe: '3-5 business days',
      pricing: 'PKR 5,000',
      docsRequired: ['CNIC Copy', 'Address Proof', 'Business Plan'],
      details: {
        timeframe: '3-5 business days',
        benefits: [
          'Simple business structure',
          'Minimal compliance requirements',
          'Direct tax benefits',
          'Easy setup process',
          'Cost-effective solution'
        ],
        process: [
          'Business name registration',
          'Tax registration',
          'License applications',
          'Bank account setup',
          'Compliance guidance'
        ],
        pricing: 'Starting from PKR 5,000'
      }
    },
    {
      icon: Users,
      title: 'AOP / Partnership',
      description: 'Association of Persons and Partnership registration',
      category: 'Business Registration',
      color: 'yellow',
      timeframe: '5-7 business days',
      pricing: 'PKR 12,000',
      docsRequired: ['Partners CNIC', 'Partnership Deed', 'Address Proof', 'Bank Details'],
      details: {
        timeframe: '5-7 business days',
        benefits: [
          'Partnership deed preparation',
          'Tax registration',
          'Profit sharing structure',
          'Legal compliance',
          'Ongoing support'
        ],
        process: [
          'Partnership agreement drafting',
          'Registration with authorities',
          'Tax number acquisition',
          'Bank account opening',
          'Compliance setup'
        ],
        pricing: 'Starting from PKR 12,000'
      }
    },
    {
      icon: Building2,
      title: 'Private Limited Company',
      description: 'Private limited company incorporation services',
      category: 'Business Registration',
      color: 'indigo',
      timeframe: '7-10 business days',
      pricing: 'PKR 25,000',
      docsRequired: ['Directors CNIC', 'MOA/AOA', 'Share Capital Details', 'Address Proof'],
      details: {
        timeframe: '7-10 business days',
        benefits: [
          'Limited liability protection',
          'Corporate structure',
          'Share capital flexibility',
          'Professional credibility',
          'Growth opportunities'
        ],
        process: [
          'Name reservation',
          'MOA/AOA preparation',
          'SECP registration',
          'Share allotment',
          'Compliance framework'
        ],
        pricing: 'Starting from PKR 25,000'
      }
    },
    // Additional Services
    {
      icon: FileText,
      title: 'FBR Registration',
      description: 'Federal Board of Revenue registration and compliance',
      category: 'Primary Services',
      color: 'blue',
      timeframe: '3-5 business days',
      pricing: 'PKR 7,000',
      docsRequired: ['CNIC Copy', 'Business Documents', 'Address Proof'],
      details: {
        timeframe: '3-5 business days',
        benefits: [
          'Complete FBR registration',
          'Tax compliance setup',
          'Documentation assistance',
          'Ongoing support',
          'Penalty avoidance'
        ],
        process: [
          'Document verification',
          'Application preparation',
          'FBR submission',
          'Registration completion',
          'Compliance setup'
        ],
        pricing: 'Starting from PKR 7,000'
      }
    },
    {
      icon: Shield,
      title: 'Tax Advisory',
      description: 'Professional tax planning and advisory services',
      category: 'Primary Services',
      color: 'green',
      timeframe: 'Ongoing',
      pricing: 'PKR 15,000/month',
      docsRequired: ['Financial Statements', 'Previous Tax Returns', 'Business Documents'],
      details: {
        timeframe: 'Ongoing monthly service',
        benefits: [
          'Tax planning strategies',
          'Compliance monitoring',
          'Regular consultations',
          'Penalty prevention',
          'Optimization advice'
        ],
        process: [
          'Financial analysis',
          'Tax planning',
          'Strategy implementation',
          'Regular monitoring',
          'Ongoing support'
        ],
        pricing: 'Starting from PKR 15,000/month'
      }
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Primary Services', 'Top Picks', 'Business Registration'];

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
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive tax and business solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Tax Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 text-9xl font-bold text-blue-600 transform rotate-12">₹</div>
          <div className="absolute top-40 right-20 text-8xl font-bold text-green-600 transform -rotate-12">%</div>
          <div className="absolute bottom-32 left-1/4 text-7xl font-bold text-purple-600 transform rotate-45">TAX</div>
          <div className="absolute bottom-20 right-1/3 text-6xl font-bold text-orange-600 transform -rotate-45">NTN</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryServices = filteredServices.filter(service => service.category === category);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category}
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                  {categoryServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 relative z-10"
                      onClick={() => setSelectedService(services.indexOf(service))}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${colorClasses[service.color]}`}>
                            <service.icon className="h-8 w-8" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-8 text-sm">
                          <div className="text-center">
                            <div className="flex items-center text-gray-500 mb-1">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="font-medium">Time</span>
                            </div>
                            <div className="text-blue-600 font-semibold">{service.timeframe}</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="flex items-center text-gray-500 mb-1">
                              <Calculator className="h-4 w-4 mr-1" />
                              <span className="font-medium">Price</span>
                            </div>
                            <div className="text-green-600 font-semibold">{service.pricing}</div>
                          </div>
                          
                          <div className="text-center max-w-48">
                            <div className="flex items-center text-gray-500 mb-1">
                              <Info className="h-4 w-4 mr-1" />
                              <span className="font-medium">Docs Required</span>
                            </div>
                            <div className="text-gray-700 text-xs">{service.docsRequired.length} documents</div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 ml-4">
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Learn More
                          </button>
                        <a
                          href="tel:+923001234567"
                          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* WhatsApp CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-green-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Service?</h3>
            <p className="text-gray-600 mb-6">Our experts are here to guide you through the best options for your needs</p>
            <a href="https://wa.me/923001234567" className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Expert on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClasses[services[selectedService].color]}`}>
                    {React.createElement(services[selectedService].icon, { className: "h-8 w-8" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{services[selectedService].title}</h2>
                    <p className="text-gray-600">{services[selectedService].description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Key Information */}
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">Timeline</span>
                    </div>
                    <p className="text-blue-700">{services[selectedService].details.timeframe}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calculator className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-900">Starting Price</span>
                    </div>
                    <p className="text-green-700">{services[selectedService].details.pricing}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    Required Documents
                  </h3>
                  <ul className="space-y-2">
                    {services[selectedService].docsRequired.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Our Process
                  </h3>
                  <ol className="space-y-3">
                    {services[selectedService].details.process.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 text-blue-600 font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Free Consultation
                </motion.button>
                <a
                  href="https://wa.me/923001234567"
                  className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;