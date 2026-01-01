// components/PageContent.js
'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Play, ArrowRight, Linkedin, Facebook, Twitter, Instagram, 
  Youtube, Target, Globe, ShoppingCart, Code, BarChart, 
  Smartphone, Award, Users, Zap, CheckCircle, Phone, Mail, 
  MapPin, Clock, Send, ChevronLeft, ChevronRight as ChevronRightIcon,
  TrendingUp, Shield, Headphones
} from 'lucide-react';

export default function PageContent() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10"></div>
          
          {/* Animated Dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh'
              }}
              animate={{
                x: [null, Math.random() * 100 + 'vw'],
                y: [null, Math.random() * 100 + 'vh'],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-red-400">Results Driven Agency</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Big Bull Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Delivers Results
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Where creativity meets performance. We build brands, design impactful websites, 
                and drive measurable growth. From automation to marketing, we power businesses 
                to scale globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-semibold text-lg flex items-center justify-center group hover:shadow-2xl hover:shadow-red-500/30 transition-all"
                >
                  Discover More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl font-semibold text-lg flex items-center justify-center hover:bg-gray-800/50 transition-all"
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </motion.button>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-gray-400">Follow us:</span>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, color: 'hover:bg-blue-600' },
                    { icon: Facebook, color: 'hover:bg-blue-700' },
                    { icon: Twitter, color: 'hover:bg-sky-500' },
                    { icon: Instagram, color: 'hover:bg-pink-600' },
                    { icon: Youtube, color: 'hover:bg-red-600' }
                  ].map(({ icon: Icon, color }, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${color} transition-colors`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bull Graphic with Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-72 h-72"
                >
                  {/* Bull Core with Logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-red-600/30 shadow-2xl shadow-red-900/20">
                    <div className="absolute inset-4  bg-white rounded-full border border-red-500/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-40 h-40">
                          {/* Logo in Center */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                              src="/logo.png"
                              alt="Big Bull Digital"
                              width={120}
                              height={120}
                              className="object-contain opacity-90"
                              priority
                            />
                          </div>
                          
                          {/* Glowing Effect */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Energy Rings */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 border-2 border-red-500/20 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.2, 0.05, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 border border-red-500/10 rounded-full"
                  />

                  {/* Floating Elements */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute ${
                        i === 0 ? 'top-4 left-4 w-8 h-8' :
                        i === 1 ? 'top-4 right-4 w-10 h-10' :
                        i === 2 ? 'bottom-4 left-4 w-10 h-10' :
                        'bottom-4 right-4 w-8 h-8'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-full opacity-80 shadow-lg shadow-red-500/30"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section 
        id="services" 
        ref={servicesRef} 
        className="py-20 relative"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Digital Marketing",
                description: "Targeted campaigns (Google Ads, Meta, TikTok Ads, PPC)",
                color: "from-red-500 to-red-700"
              },
              {
                icon: Globe,
                title: "Website Design",
                description: "Clean, responsive, high-performance web design",
                color: "from-red-600 to-red-800"
              },
              {
                icon: ShoppingCart,
                title: "Ecommerce Automation",
                description: "Amazon PL & Shopify store setup & management",
                color: "from-red-700 to-red-900"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-red-400 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef} 
        className="py-20"
        style={{
          background: "linear-gradient(rgba(10, 10, 10, 0.95), rgba(0, 0, 0, 0.95)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solving IT Challenges with <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Smart, Simple Solutions</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Full-service digital agency specializing in branding, web design & development, 
                digital marketing, ecommerce automation, content creation, and more.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="text-red-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Web Design & Development</h4>
                    <p className="text-gray-400">Custom, responsive websites that convert visitors into customers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="text-red-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ecommerce Automation</h4>
                    <p className="text-gray-400">Streamlined store setup and management for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { skill: "Web Solution", percentage: 75, color: "bg-gradient-to-r from-red-500 to-red-700" },
                { skill: "Custom Reporting", percentage: 65, color: "bg-gradient-to-r from-red-600 to-red-800" },
                { skill: "Mobile Solution", percentage: 90, color: "bg-gradient-to-r from-red-700 to-red-900" }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-red-400 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="projects" 
        ref={portfolioRef} 
        className="py-20"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing our successful client projects and partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Google", color: "hover:border-blue-500", logo: "G" },
              { name: "Meta", color: "hover:border-blue-400", logo: "M" },
              { name: "Shopify", color: "hover:border-green-500", logo: "S" },
              { name: "Amazon", color: "hover:border-yellow-500", logo: "A" }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 ${client.color} transition-all duration-300 h-48 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:shadow-red-500/10`}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-300 group-hover:text-white transition-colors mb-4">
                    {client.logo}
                  </div>
                  <h3 className="text-xl font-bold">{client.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={testimonialsRef} 
        className="py-20"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  JD
                </div>
                <div>
                  <h4 className="text-xl font-bold">John Doe</h4>
                  <p className="text-gray-400">CEO, TechCorp</p>
                  <div className="flex text-yellow-400 mt-1">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic">
                "Big Bull Digital transformed our ecommerce platform completely. Our sales increased by 300% within 6 months. Their web development and digital marketing strategies are simply outstanding!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={contactRef} 
        className="py-20"
        style={{
          background: "linear-gradient(rgba(10, 10, 10, 0.9), rgba(0, 0, 0, 0.9)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Touch</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-red-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone Numbers</h4>
                      <p className="text-gray-400">USA: +1 (555) 123-4567</p>
                      <p className="text-gray-400">Pakistan: +92 300 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-red-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Addresses</h4>
                      <p className="text-gray-400">info@bigbulldigital.com</p>
                      <p className="text-gray-400">support@bigbulldigital.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-red-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Global Offices</h4>
                      <p className="text-gray-400">USA • Pakistan • Dubai • UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-semibold text-lg flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="pt-20 pb-10 border-t border-gray-800"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1)), url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Big Bull Digital Logo"
                    width={32}
                    height={32}
                    className="filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Big Bull Digital</h2>
                  <div className="h-1 w-8 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400">
                Where creativity meets performance. Building brands that deliver measurable results.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Digital Marketing</span></li>
                <li><span className="text-gray-400">Web Design</span></li>
                <li><span className="text-gray-400">Ecommerce Automation</span></li>
                <li><span className="text-gray-400">Branding</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                {[Linkedin, Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Big Bull Digital. All rights reserved. | Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}