import React from 'react';
import { motion } from 'framer-motion';
import styles from './Privacy.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/public/image5.jpg')` }}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Privacy Policy
          </motion.h1>
        </motion.div>
      </main>

      <motion.section 
        className={styles.policySection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.policyContent}>
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to Upper Deck. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide to us.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We collect and store the following types of personal information:</p>
            <ul>
              <li>Phone numbers submitted through our website, in-store promotions, and interactions with our staff.</li>
              <li>Other voluntarily provided information, such as feedback, inquiries, or reservations.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Sending promotional messages, offers, and updates about our services.</li>
              <li>Responding to customer inquiries and feedback.</li>
              <li>Improving our services and customer experience.</li>
              <li>Internal record-keeping and compliance with legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2>4. Opting Out of Communications</h2>
            <p>Customers can opt out of receiving promotional messages at any time by:</p>
            <ul>
              <li>Replying STOP to any SMS or WhatsApp message.</li>
              <li>Emailing our marketing team at <a href="mailto:dystopiadigital24@gmail.com">dystopiadigital24@gmail.com</a></li>
            </ul>
            <p>Once you opt out, you will no longer receive marketing communications, but we may still contact you regarding reservations, inquiries, or other essential service updates.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. However, no method of data transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2>6. Sharing of Information</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:</p>
            <ul>
              <li>Authorized service providers assisting in marketing or communication efforts.</li>
              <li>Legal authorities, if required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
          </section>

          <section>
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
            <div className={styles.contactInfo}>
              <p>Phone: <a href="tel:9320725000">93207 25000</a></p>
              <p>Address: Seawoods, T-25-30, 3rd Floor, Centurion Mall, Sector 19A Nerul Rd, Navi Mumbai, Maharashtra 400706</p>
            </div>
          </section>

          <p className={styles.thankYou}>Thank you for trusting Upper Deck with your personal information.</p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Privacy;
