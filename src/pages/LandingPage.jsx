import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import styles from './LandingPage.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/image3.JPG')` }}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Welcome to UpperDeck
          </motion.h1>
          <motion.h2 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Nerul's Finest Dining Experience
          </motion.h2>
          <motion.p 
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Elevate your dining experience with exquisite cuisine and breathtaking ambiance
          </motion.p>
          <div className={styles.socialLinks}>
            <motion.a 
              href="https://g.co/kgs/LtLQd21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconButton}
              whileHover={{ scale: 1.1, backgroundColor: '#844F09' }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={24} />
            </motion.a>
            <motion.a 
              href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconButton}
              whileHover={{ scale: 1.1, backgroundColor: '#844F09' }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=100010730886922" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconButton}
              whileHover={{ scale: 1.1, backgroundColor: '#844F09' }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/upperdeck.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconButton}
              whileHover={{ scale: 1.1, backgroundColor: '#844F09' }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </motion.div>
      </main>

      <motion.section 
        className={styles.gallerySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Our Ambiance</h2>
        <div className={styles.gallery}>
          {[
            { 
              img: "/banquet.jpg", 
              title: "Banquet Hall",
              desc: "Experience fine dining in our elegantly designed main hall"
            },
            { 
              img: "/image7.JPG", 
              title: "Lounge Space",
              desc: "Unwind in our sophisticated lounge with panoramic views"
            },
            { 
              img: "/image8.JPG", 
              title: "Outdoor Terrace",
              desc: "Enjoy alfresco dining under the stars"
            },
            { 
              img: "/image4.JPG", 
              title: "Indoor Dining",
              desc: "Intimate spaces for special occasions"
            },
            { 
              img: "/image3.JPG", 
              title: "Bar Area",
              desc: "Expertly crafted cocktails in a modern setting"
            },
            { 
              img: "/image6.JPG", 
              title: "Event Space",
              desc: "Perfect venue for celebrations and corporate events"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <motion.img 
                  src={item.img} 
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className={styles.galleryContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default LandingPage;
