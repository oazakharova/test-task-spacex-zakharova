import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footerContent}>
        <p className={styles.paragraph}>&copy; Все права защищены </p>
      </div>
    </footer>
  );
};

export default Footer;
