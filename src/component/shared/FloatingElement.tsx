import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FloatingElement = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: -10 }} // Initial position
      animate={{ y: 10, transition: { repeat: Infinity, duration: 1, repeatType: 'reverse' } }} // Animation on Y-axis
      className="floating-element"
    >
      { children }
    </motion.div>
  );
};

export default FloatingElement;