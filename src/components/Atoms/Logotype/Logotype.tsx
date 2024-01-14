import React from 'react';
import styles from './Logotype.module.scss';
import logo from './../../../assets/svg/logo.svg';
import logo2 from './../../../assets/svg/logo2.svg';
import { Link } from 'react-router-dom';

const Logotype: React.FC = () => {
  return (
    <Link to="/">
      <div className={styles.logo_container}>
        <img className={styles.header_logotype} src={logo} alt="Logotype" />
        <img className={styles.mob_tab_logotype} src={logo2} alt="Logotype" />
      </div>
    </Link>
  );
};

export default Logotype;
