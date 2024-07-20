import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        SPACE <span className="el-messiri-font">X</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.a} to="/">
              Главная
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/technologies">
              Технологии
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/schedule">
              График полетов
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/guarantees">
              Гарантии
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/about">
              О компании
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
