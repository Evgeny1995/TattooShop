import React, { useState } from 'react';
import styles from './MarkQuestion.module.scss';
import clsx from 'clsx';
import { RadioBtnOption } from '../../../types/list.ts';

interface props {
   item: RadioBtnOption;
   questionContainer: string;
}

const MarkQuestion: React.FC<props> = ({ item }, questionContainer) => {
   const [help, setHelp] = useState<boolean>(false);
   return (
      <div className={styles.question_mark} onClick={() => setHelp(!help)}>
         <svg
            className={styles.question_icon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <circle cx="10" cy="10" r="9.5" stroke="#D0D0D0" />
            <path
               d="M12.052 7.57C12.052 6.83333 11.8253 6.26667 11.372 5.87C10.93 5.47333 10.3237 5.275 9.553 5.275C8.98633 5.275 8.499 5.40533 8.091 5.666C7.69433 5.91533 7.36567 6.25533 7.105 6.686L6 5.989C6.26067 5.59233 6.54967 5.24667 6.867 4.952C7.18433 4.646 7.56967 4.41367 8.023 4.255C8.48767 4.085 9.05433 4 9.723 4C10.437 4 11.0717 4.15867 11.627 4.476C12.1823 4.782 12.6187 5.207 12.936 5.751C13.2647 6.28367 13.429 6.89 13.429 7.57C13.429 8.216 13.259 8.80533 12.919 9.338C12.579 9.85933 12.137 10.2843 11.593 10.613C11.049 10.9303 10.4597 11.106 9.825 11.14L9.706 13.18H8.686L8.346 10.205H8.788C9.468 10.205 10.0517 10.0747 10.539 9.814C11.0263 9.55333 11.4003 9.22467 11.661 8.828C11.9217 8.42 12.052 8.00067 12.052 7.57ZM8.295 15.39C8.295 15.1293 8.38567 14.9083 8.567 14.727C8.75967 14.5457 8.98067 14.455 9.23 14.455C9.49067 14.455 9.71167 14.5457 9.893 14.727C10.0743 14.9083 10.165 15.1293 10.165 15.39C10.165 15.6393 10.0743 15.8603 9.893 16.053C9.71167 16.2343 9.49067 16.325 9.23 16.325C8.98067 16.325 8.75967 16.2343 8.567 16.053C8.38567 15.8603 8.295 15.6393 8.295 15.39Z"
               fill="#D0D0D0"
            />
         </svg>
         <div
            className={
               help
                  ? clsx(styles.help, styles.show, questionContainer)
                  : styles.help
            }
         >
            <p className={styles.help_text}>{item.question}</p>
            <button
               type="button"
               className={styles.close}
               onClick={() => setHelp(!help)}
            ></button>
         </div>
      </div>
   );
};

export default MarkQuestion;
