import React, { useState, useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icon component
const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    details: ''
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Show Booking Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nMobile: ${formData.mobile}\n\nShow Details:\n${formData.details}`
    );
    window.location.href = `mailto:amaniklten@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleLogoClick = () => {
    window.open('https://synbyte.in', '_blank');
  };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center p-8 pb-24"
      >
        <motion.div
          style={{ opacity, y }}
          className="relative z-10 max-w-3xl mx-auto w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold text-red-500 mb-3 text-center"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-400 text-center mb-6 max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to bring the energy to your event? Contact us or book a show today.
          </motion.p>

          {/* Inquiry Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <a
              href="tel:+918157853443"
              className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors group"
            >
              <Phone className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-base">+91-81578 53443</span>
            </a>
            <span className="text-gray-600">|</span>

            <a
              href="mailto:amanikltrn@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors group"
            >
              <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-base">amaniklten@gmail.com</span>
            </a>
          </motion.div>

          {/* Book a Show Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border border-red-900/30 relative rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-red-500 z-30" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-red-500 z-30" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-red-500 z-30" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-red-500 z-30" />

            <div className="relative z-20 p-6 md:p-8 w-full max-w-xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                  Book a Show
                </h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Fill out the form to request a booking
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-white font-medium mb-1.5 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 bg-black/30 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors backdrop-blur-sm text-sm"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="mobile" className="block text-white font-medium mb-1.5 text-sm">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 bg-black/30 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors backdrop-blur-sm text-sm"
                    placeholder="+91 12345 67890"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="details" className="block text-white font-medium mb-1.5 text-sm">
                    Show Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 bg-black/30 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors backdrop-blur-sm resize-none text-sm"
                    placeholder="Tell us about your event, date, location, and any special requirements..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-transparent border-t border-red-900/10 py-6 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <div className="text-gray-400 text-sm text-center md:text-left">
              © Copyright AMANI KL10 {new Date().getFullYear()} All rights reserved.
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm w-full md:w-auto">
              <span>Powered by</span>
              <img
                src="/SynByte.png"
                alt="Logo"
                onClick={handleLogoClick}
                className="h-8 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}