import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedPortfolio = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Portfolio />
    </motion.div>
  </AnimatePresence>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <AnimatedPortfolio />
    </ParallaxProvider>
  </React.StrictMode>
);