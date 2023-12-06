import React from 'react';
import styles from './TimeWork.module.scss';

const TimeWork: React.FC = () => {
  return (
    <div>
      <p className={styles.working__hours}>Opening hours: from 9:00 to 20:00</p>
    </div>
  );
};

export default TimeWork;
