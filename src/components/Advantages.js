import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Advantages.module.css';

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/market" className={styles.a}>
            <div>мы</div>
            <div className={styles.bold}>№1</div>
            <div>на рынке</div>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/safety" className={styles.a}>
            <div>гарантируем</div>
            <div className={styles.bold}>50%</div>
            <div>безопасность</div>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/calendar" className={styles.a}>
            <div>календарик за</div>
            <div className={styles.bold}>2001г.</div>
            <div>в подарок</div>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/journey" className={styles.a}>
            <div>путешествие</div>
            <div className={styles.bold}>597</div>
            <div>дней</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
