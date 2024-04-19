import React from 'react';
import styles from './ButtonOne.module.scss';

export type props = {
   title?: string;
   className?: string;
   btnStyle?: string;
   handleClick?: void;
   type?: string;
};

const ButtonOne: React.FC<props> = (props) => {
   return (
      <div className={[styles.btn_container, props.className].join(' ')}>
         <button
            type={props.type}
            className={[styles.btn, props.btnStyle].join(' ')}
         >
            {props.title}
         </button>
      </div>
   );
};

export default ButtonOne;
