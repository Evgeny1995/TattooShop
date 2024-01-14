import React from 'react';
import styles from './MailLinks.module.scss';

const MailLinks: React.FC = () => {
  return (
    <a className={styles.mail_links} href="#">
      <svg
        className={styles.mail_svg}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5 9.23408L14.7346 14.4982L14.3137 14.7835L13.8929 14.4982L5.5 8.80873V20.5H22.5V9.23408ZM6.24266 7.5L14.3137 12.9713L22.3848 7.5H6.24266ZM4 6H5.5H22.5H24V7.5V8.11329L24.0483 8.18451L24 8.21724V20.5V22H22.5H5.5H4V20.5V7.5V6Z"
          fill="#FAF6F2"
        />
      </svg>
      Mr.Driskell@mail.ru
    </a>
  );
};

export default MailLinks;
