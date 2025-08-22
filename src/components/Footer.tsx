import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AR Consulting</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading architectural and engineering consulting firm providing innovative solutions 
              for construction projects across Pakistan. Excellence in every project.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>+92-XXX-XXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>info@arconsulting.com.pk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office # 3-E Ijaz Arcade Main Market, Gulberg-II, Lahore</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office No. 06, 2nd Floor, Executive Complex G-8 Markaz, Islamabad</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office No. 07, Dubai International Financial Centre (DIFC) Sheikh Zayed Rd, Dubai</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="/tax-calculator" className="text-gray-300 hover:text-blue-400 transition-colors">Tax Calculator</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="text-sm text-gray-300 ml-6">
                Saturday: 9:00 AM - 2:00 PM
              </div>
              <div className="text-sm text-gray-300 ml-6">
                Sunday: Closed
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 AR Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;