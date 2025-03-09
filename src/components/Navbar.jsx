import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className={styles.logo}
        whileHover={{ scale: 1.02 }}
      >
        <Link to="/">
          <img src="/logo3.png" alt="UpperDeck Logo" className={styles.logoImage} />
        </Link>
      </motion.div>
      <div className={styles.navLinks}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/policy" className={styles.navLink}>Policy</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
