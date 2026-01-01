// components/LoadingAnimation.js
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingAnimation() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { 
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500/20 rounded-full"
              initial={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                scale: 0
              }}
              animate={{
                x: [null, Math.random() * 100 + 'vw'],
                y: [null, Math.random() * 100 + 'vh'],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Glowing Orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-64 h-64 rounded-full"
              initial={{
                x: `${25 + i * 25}%`,
                y: `${20 + i * 30}%`,
                opacity: 0.1
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,0,0,0) 70%)`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Main Logo Container */}
          <motion.div
            initial={{ 
              scale: 0.5,
              opacity: 0,
              rotate: -180 
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              rotate: 0
            }}
            transition={{
              duration: 1.2,
              type: "spring",
              damping: 15,
              stiffness: 100
            }}
            className="relative mb-8"
          >
            {/* Outer Glow Ring */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -inset-8 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #ff0000, transparent)',
                filter: 'blur(10px)'
              }}
            />
            
            {/* Middle Ring */}
            <motion.div
              animate={{
                rotate: -360,
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -inset-4 border-2 border-red-500/30 rounded-full"
            />
            
            {/* Logo Container */}
            <div className="relative w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-red-900/50">
              {/* Inner Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-4 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-xl"
              />
              
              {/* Logo Image */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Big Bull Digital"
                  width={128}
                  height={128}
                  className="object-contain animate-pulse-slow"
                  priority
                />
                
                {/* Pulsing Dot in Center */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-4 h-4 bg-red-500 rounded-full"
                />
              </div>
              
              {/* Corner Elements */}
              {[0, 90, 180, 270].map((rotation, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: rotation }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="absolute"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(-70px)`,
                    transformOrigin: 'center'
                  }}
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-red-600 to-red-800 rounded-full"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Floating Elements */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: 360
                }}
                transition={{
                  y: {
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className={`absolute ${
                  i === 0 ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-12' :
                  i === 1 ? 'top-1/2 right-0 translate-x-12 -translate-y-1/2' :
                  i === 2 ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-12' :
                  'top-1/2 left-0 -translate-x-12 -translate-y-1/2'
                }`}
              >
                <div className={`w-${4 + i} h-${4 + i} bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-70`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4"
          >
            <motion.h2
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
            >
              BIG BULL DIGITAL
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-300 text-lg font-light tracking-wider"
            >
              Powering Digital Excellence
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-8"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="h-full bg-gradient-to-r from-transparent via-red-600 to-transparent w-1/2"
            />
          </motion.div>

          {/* Loading Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-gray-400 font-mono"
          >
            {[0, 25, 50, 75, 100].map((percent) => (
              <motion.span
                key={percent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + percent * 0.01 }}
                className="mr-2"
              >
                {percent}%
              </motion.span>
            ))}
          </motion.div>

          {/* Subtle Loading Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="mt-4 text-xs text-gray-500 tracking-widest uppercase"
          >
            Loading premium experience...
          </motion.div>
        </div>

        {/* Keyboard Shortcut Hint (Professional Touch) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            Press <span className="text-gray-400">ESC</span> to skip
          </p>
        </motion.div>

        {/* Sound Wave Effect (Optional) */}
        <div className="absolute bottom-20 flex gap-1">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-red-500/30 rounded-t-full"
              initial={{ height: "4px" }}
              animate={{
                height: [
                  "4px",
                  `${20 + Math.random() * 30}px`,
                  "4px",
                  `${10 + Math.random() * 20}px`,
                  "4px"
                ]
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}