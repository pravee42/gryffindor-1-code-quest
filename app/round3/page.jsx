'use client'
// pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import './ss.css';

export default function Home() {
  const [isMapRevealed, setIsMapRevealed] = useState(false);
  
  useEffect(() => {
    // Reveal map after a short delay
    const timer = setTimeout(() => {
      setIsMapRevealed(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const artifacts = [
    { name: "Rowena Ravenclaw's diadem", position: "top-0 left-20", delay: 0.2 },
    { name: "Quidditch Tournament", position: "top-40 left-0", delay: 0.4 },
    { name: "Marvolo Gaunt's ring", position: "top-[190px] left-[300px]", delay: 0.6 },
    { name: "Tom Riddle's Diary", position: "top-64 right-72", delay: 0.8 },
    { name: "The Sorting Hat", position: "top-64 right-20", delay: 1.0 },
    { name: "Nagini", position: "top-96 right-20", delay: 1.2 },
    { name: "Helga Hufflepuff's cup", position: "bottom-64 right-40", delay: 1.4 },
    { name: "Deathly Hallows", position: "bottom-64 left-72", delay: 1.6 },
    { name: "Salazar Slytherin's locket", position: "bottom-40 left-40", delay: 1.8 }
  ];

  artifacts.map((D) => {
    console.log(`/${D.name.toLowerCase().replace(/[''\s]+/g, '-')}.png`)
  })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Spider animation
  const spiderVariants = {
    initial: { y: -20 },
    animate: {
      y: 20,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Footsteps animation
  const footstepsVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: [0, 1, 0],
      x: 50,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-amber-100 overflow-hidden">
      <Head>
        <title>Marauder's Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background with parchment texture */}
      <div 
        className="absolute inset-0 bg-amber-100" 
        style={{ 
          backgroundImage: `url('/parchment-texture.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Cobwebs in corners */}
      <motion.div 
        className="absolute top-0 left-0 w-40 h-40" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2 }}
      >
        <img src="/cobweb.png" alt="" className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        className="absolute top-0 right-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2.2 }}
      >
        <img src="/cobweb.png" alt="" className="w-full h-full transform scale-x-flip" />
      </motion.div>
      
      {/* Animated Spider */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16"
        variants={spiderVariants}
        initial="initial"
        animate="animate"
      >
        <img src="/spider.png" alt="Spider" className="w-full h-full" />
      </motion.div>

      {/* Title */}
      <motion.div 
        className="relative pt-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/hogwarts-crest.png" 
          alt="Hogwarts Crest" 
          className="mx-auto w-24 h-24"
        />
        <h1 className="text-5xl font-serif mt-4 text-black">Marauder's Map</h1>
      </motion.div>

      {/* Map content */}
      <motion.div 
        className="relative mt-8 mx-auto max-w-6xl p-6"
        variants={fadeIn}
        initial="hidden"
        animate={isMapRevealed ? "visible" : "hidden"}
        transition={{ duration: 1.5 }}
      >
        {/* Map items */}
        <div className="relative min-h-screen">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={index}
              className={`absolute ${artifact.position} w-32 h-32 flex flex-col items-center`}
              custom={artifact.delay}
              variants={itemVariants}
              initial="hidden"
              animate={isMapRevealed ? "visible" : "hidden"}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <img 
                src={`/${artifact.name.toLowerCase().replace(/[''\s]+/g, '-')}.png`} 
                alt={artifact.name} 
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          ))}

          {/* Voldemort with glowing effect */}
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48"
            custom={2.0}
            variants={itemVariants}
            initial="hidden"
            animate={isMapRevealed ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full filter blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img 
                src="/voldemort.png" 
                alt="Voldemort" 
                className="relative w-full h-full object-contain z-10"
              />
            </div>
          </motion.div>

          {/* Animated footsteps */}
          <motion.div
            className="absolute top-32 right-32"
            variants={footstepsVariants}
            initial="initial"
            animate="animate"
          >
            <img 
              src="/footprints.png" 
              alt="Footprints" 
              className="w-16 h-8 opacity-70"
            />
          </motion.div>

          {/* Animated mandrake root */}
          <motion.div
            className="absolute bottom-32 right-32 w-24 h-24"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/spider.png" 
              alt="Mandrake Root" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Reveal animation */}
      <motion.div
        className="fixed inset-0 bg-amber-900 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={() => {
        }}
      />

      {/* Magic wand cursor effect */}
      <style jsx global>{`
        body {
          cursor: url('/wand-cursor.png'), auto;
        }
        
        @font-face {
          font-family: 'HarryPotter';
          src: url('/harry-potter-font.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        h1, .font-serif {
          font-family: 'HarryPotter', serif;
        }
      `}</style>
    </div>
  );
}