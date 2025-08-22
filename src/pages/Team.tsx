import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ahmed Hassan',
      position: 'Chief Executive Officer',
      education: 'Chartered Accountant, ICAP',
      experience: '15 years',
      specialization: 'Corporate Tax, Financial Advisory',
      image: '/Prof 1.png'
    },
    {
      name: 'Imran Khan',
      position: 'Head of Tax Services',
      education: 'MBA Finance, LUMS',
      experience: '12 years',
      specialization: 'Income Tax, Sales Tax',
      image: '/Prof 2.png'
    },
    {
      name: 'Muhammad Ali',
      position: 'Senior Tax Consultant',
      education: 'M.Com, University of Punjab',
      experience: '10 years',
      specialization: 'Business Registration, Compliance',
      image: '/Prof 3.png'
    },
    {
      name: 'Iftikhar Ahmed',
      position: 'Client Relations Manager',
      education: 'BBA, IBA Karachi',
      experience: '8 years',
      specialization: 'Client Services, Documentation',
      image: '/Prof 4.png'
    }
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experienced tax professionals dedicated to delivering excellence in every service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our senior professionals bring decades of experience and expertise to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src="/Prof 4.png"
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Message - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from CEO</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  "At AR Consulting, we believe that every client deserves personalized, professional tax and business advisory services. Our commitment to excellence has been the cornerstone of our success for over a decade."
                </p>
                <p>
                  "We understand that navigating Pakistan's tax landscape can be complex. That's why our team of certified professionals works tirelessly to ensure your compliance while maximizing your financial efficiency."
                </p>
                <p>
                  "Our vision extends beyond traditional consulting. We aim to be your trusted partner in achieving sustainable business growth and financial success."
                </p>
              </div>
              
              <div className="pt-4">
                <div className="text-xl font-bold text-gray-900">Qaisar Bukhari</div>
                <div className="text-blue-600 font-semibold">Chief Executive Officer</div>
                <div className="text-gray-500 text-sm mt-1">Chartered Accountant, ICAP</div>
              </div>
            </motion.div>

            {/* CEO Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Blue Rectangle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform -rotate-1"></div>
              
              {/* CEO Image Container */}
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/CEO 1.png"
                    alt="Qaisar Bukhari - CEO"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Image Caption */}
                <div className="mt-6 text-center">
                  <div className="text-xl font-bold text-gray-900">Qaisar Bukhari</div>
                  <div className="text-blue-600 font-semibold">Chief Executive Officer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Join Our Team */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're always looking for talented professionals who share our passion for excellence and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </motion.button>
              <a
                href="https://wa.me/923001234567"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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

export default Team;
