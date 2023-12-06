import React from 'react';
import styles from './Footer.module.scss';
import Logotype from '../../Atoms/Logotype/Logotype.tsx';
import DeskHeaderAnotherList from '../../Molecules/DeskHeaderAnotherList/DeskHeaderAnotherList.tsx';
import MobMenuLine from '../../Atoms/MobMenuLine/MobMenuLine.tsx';
import Socials from '../../Molecules/Sosials/Socials.tsx';
import MailLinks from '../../Atoms/MailLinks/MailLinks.tsx';
import TimeWork from '../../Atoms/TimeWork/TimeWork.tsx';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_container_wrap}>
      <div className={styles.footer_container}>
        <div className={styles.line_container}>
          <div className={styles.line}></div>
        </div>

        <div className={styles.footer_navigation}>
          <div className={styles.logo_container}>
            <div className={styles.logo_position}>
              <Logotype />
            </div>

            <a className={styles.footer_privacy} href="#">
              Privacy policy
            </a>
          </div>
          <div className={styles.footer_list_container}>
            <DeskHeaderAnotherList
              listStyle={styles.list_style}
              listItemStyle={styles.list_item_styles}
              listLinksStyle={styles.list_links_styles}
            />
          </div>
        </div>
        <div className={styles.horizont_line_disabled}>
          <MobMenuLine />
        </div>
        <div className={styles.footer_time_contacts_container}>
          <Socials
            flexRow={styles.socials_flex_row}
            numberPosition={styles.socials_number_position}
            footerSvgIconShow={styles.footer_svg_icon_show}
            footerTexthide={styles.footer_text_hide}
          />
          <div className={styles.time_work_position}>
            <TimeWork />
          </div>
          <MailLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
