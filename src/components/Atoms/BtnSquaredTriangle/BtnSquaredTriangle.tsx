import React from 'react';
import styles from './BtnSquaredTriangle.module.scss';
import triange from './../../../assets/svg/button/beforeTriangle.svg';

export type props = {
  position?: string;
  onClick?: void;
};

const BtnSquaredTriangle: React.FC<props> = (props) => {
  return (
    <div className={props.position}>
      <button className={styles.btn_style}>
        <img src={triange} alt="" />
      </button>
    </div>
  );
};

export default BtnSquaredTriangle;
