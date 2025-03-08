import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSocial}>
          <h3>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <motion.a 
              href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a 
              href="https://facebook.com/YOUR_FACEBOOK" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Facebook size={24} />
              <span>Facebook</span>
            </motion.a>
            <motion.a 
              href="https://instagram.com/YOUR_INSTAGRAM" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </motion.a>
            <motion.a 
              href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <MapPin size={24} />
              <span>Find Us</span>
            </motion.a>
          </div>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>Nerul, Navi Mumbai</p>
          <p>Phone: YOUR_PHONE_NUMBER</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
