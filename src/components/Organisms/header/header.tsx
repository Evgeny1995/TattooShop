import React from "react";
import styles from "./header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.header__wrap}>
      <div className={styles.header__content}>
        <button className={styles.nav_menu__btn}>Menu</button>
      </div>
    </header>
  );
};

export default Header;
