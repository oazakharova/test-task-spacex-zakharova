import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import Advantages from './Advantages';
import rocketImg from '../assets/rocket-launching-into-space-concept.png';

const Main = () => {
  return (
    <main className={`${styles.main} container`}>
      <section className={styles.hero}>
        <div className={styles.slogan}>
          <h1 className={styles.h1}>
            <div>ПУТЕШЕСТВИЕ</div>
            <div>на красную планету</div>
          </h1>
          <div className={styles.btnWrap}>
            <Link className={styles.btn} to="/schedule">
              Начать путешествие
            </Link>
          </div>
        </div>
        <img className={styles.rocketImage} src={rocketImg} alt="" />
        <Advantages />
      </section>
    </main>
  );
};

export default Main;
