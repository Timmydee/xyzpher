import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const loadingSpinner = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: '5px solid rgba(0, 0, 0, 0.1)',
        borderTopColor: 'black',
        margin: 'auto',
      }}
      initial="initial"
      animate="animate"
      variants={loadingSpinner}
      transition={{ duration: 1, ease: 'linear', loop: Infinity }}
    />
  );
};

export default LoadingSpinner;
