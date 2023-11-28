import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <div className={props.className}>
      <div className={styles.input__before}>
        <input
          className={styles.search_input}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
