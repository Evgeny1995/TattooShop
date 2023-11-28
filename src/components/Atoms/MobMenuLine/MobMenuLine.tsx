import React from 'react';
import styles from './MobMenuLine.module.scss';

const MobMenuLine: React.FC = () => {
  return (
    <div className={styles.line_container}>
      <hr className={styles.line} />
    </div>
  );
};

export default MobMenuLine;
