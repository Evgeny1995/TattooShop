import React from 'react';
import styles from './HeaderNavMobMenu.module.scss';
import MobHeaderNavList from '../MobHeaderNavList/MobHeaderNavList.tsx';
import Input from '../../Atoms/Input/Input.tsx';
import MobMenuLine from '../../Atoms/MobMenuLine/MobMenuLine.tsx';
import Socials from '../Sosials/Socials.tsx';
import MailLinks from '../../Atoms/MailLinks/MailLinks.tsx';

type Props = {
  menuToogleActive: boolean;
};

const HeaderMobMenu: React.FC<Props> = ({ menuToogleActive }) => {
  return (
    <div
      className={
        menuToogleActive
          ? styles.nav__list
          : [styles.nav__list, styles.show].join(' ')
      }
    >
      <MobMenuLine />
      <MobHeaderNavList />
      <Input placeholder={'Search'} className={styles.input_container} />
      <MobMenuLine />
      <div className={styles.socials__container}>
        <Socials />
      </div>
      <p className={styles.working__hours}>Opening hours: from 9:00 to 20:00</p>
      <div className={styles.mail_links__container}>
        <MailLinks />
      </div>
    </div>
  );
};

export default HeaderMobMenu;
