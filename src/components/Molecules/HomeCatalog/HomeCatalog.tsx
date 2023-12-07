import React from 'react';
import styles from './HomeCatalog.module.scss';
import TattooKitsImg from './../../../assets/img/homeCatalog/TattookitsImg.png';
import HoldersImg from './../../../assets/img/homeCatalog/HoldersImg.png';
import CarsTattooImg from './../../../assets/img/homeCatalog/TatooCarsImg.png';
import PedalsAndWiresImg from './../../../assets/img/homeCatalog/PedalsAndWiresImg.png';
import PaintsImg from './../../../assets/img/homeCatalog/PaintsImg.png';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import TattooKitsImgTab from './../../../assets/img/homeCatalog/TattookitsImgTab.png';
import HoldersImgTab from './../../../assets/img/homeCatalog/HoldersImgTab.png';
import CarsTattooImgTab from './../../../assets/img/homeCatalog/TatooCarsImgTab.png';
import PedalsAndWiresImgTab from './../../../assets/img/homeCatalog/PedalsAndWiresImgTab.png';
import PaintsImgTab from './../../../assets/img/homeCatalog/PaintsImgTab.png';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import TattooKitsImgDesk from './../../../assets/img/homeCatalog/desk/TattooKits.png';
import HoldersImgDesk from './../../../assets/img/homeCatalog/desk/Holders.png';
import CarsTattooImgDesk from './../../../assets/img/homeCatalog/desk/CarsTattoo.png';
import PedalsAndWiresImgDesk from './../../../assets/img/homeCatalog/desk/PedalsAndWires.png';
import PaintsImgDesk from './../../../assets/img/homeCatalog/desk/Paints.png';
import PowerSuppliesimgDesk from './../../../assets/img/homeCatalog/desk/PowerSupplies.png';
import TipsImgDesk from './../../../assets/img/homeCatalog/desk/Tips.png';
import TattooNeedlesImgDesk from './../../../assets/img/homeCatalog/desk/TattooNeedles.png';
import ProtectionContainersConsumablesImgDesk from './../../../assets/img/homeCatalog/desk/ProtectionContainersConsumables.png';
import AccessoriesImgDesk from './../../../assets/img/homeCatalog/desk/Accessories.png';
import PrintersAndTabletsImgDesk from './../../../assets/img/homeCatalog/desk/PrintersAndTablets.png';

const HomeCatalog: React.FC = () => {
  const [width] = useWindowResize();

  interface IMobTabCatalogList {
    id: string;
    title: string;
    imgMob: string;
    imgTab: string;
  }

  interface IDeskCatalogList {
    id: string;
    title: string;
    imgDesk: string;
  }

  const mobTabCatalogListArr: IMobTabCatalogList[] = [
    {
      id: '1',
      title: 'Tattoo kits',
      imgMob: TattooKitsImg,
      imgTab: TattooKitsImgTab,
    },
    {
      id: '2',
      title: 'Holders',
      imgMob: HoldersImg,
      imgTab: HoldersImgTab,
    },
    {
      id: '3',
      title: 'Cars tattoo',
      imgMob: CarsTattooImg,
      imgTab: CarsTattooImgTab,
    },
    {
      id: '4',
      title: 'Pedals and wires',
      imgMob: PedalsAndWiresImg,
      imgTab: PedalsAndWiresImgTab,
    },
    {
      id: '5',
      title: 'Paints',
      imgMob: PaintsImg,
      imgTab: PaintsImgTab,
    },
  ];

  const deskCatalogListArr: IDeskCatalogList[] = [
    {
      id: '1',
      title: 'Tattoo kits',
      imgDesk: TattooKitsImgDesk,
    },
    {
      id: '2',
      title: 'HoldersImgDesk',
      imgDesk: HoldersImgDesk,
    },
    {
      id: '3',
      title: 'Cars tattoo',
      imgDesk: CarsTattooImgDesk,
    },
    {
      id: '4',
      title: 'Pedals and wires',
      imgDesk: PedalsAndWiresImgDesk,
    },
    {
      id: '5',
      title: 'Paints',
      imgDesk: PaintsImgDesk,
    },
    {
      id: '6',
      title: 'Power supplies',
      imgDesk: PowerSuppliesimgDesk,
    },
    {
      id: '7',
      title: 'Tips',
      imgDesk: TipsImgDesk,
    },
    {
      id: '8',
      title: 'Tattoo needles',
      imgDesk: TattooNeedlesImgDesk,
    },
    {
      id: '9',
      title: 'Protection, containers, consumables',
      imgDesk: ProtectionContainersConsumablesImgDesk,
    },
    {
      id: '10',
      title: 'Accessories',
      imgDesk: AccessoriesImgDesk,
    },
    {
      id: '11',
      title: 'Printers and tablets',
      imgDesk: PrintersAndTabletsImgDesk,
    },
  ];

  return (
    <div className={styles.home_catalog_container}>
      <div className={styles.home_catalog_content}>
        <h3 className={styles.home_catalog_title}>Catalog</h3>
        <ul className={styles.home_catalog_list}>
          {width < 1920
            ? mobTabCatalogListArr.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <h4 className={styles.item_title}>{item.title}</h4>
                  <a className={styles.item_link} href="#">
                    <img
                      className={styles.item_img}
                      src={width >= 768 ? item.imgTab : item.imgMob}
                      alt={item.title}
                    />
                  </a>
                </li>
              ))
            : deskCatalogListArr.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <h4 className={styles.item_title}>{item.title}</h4>
                  <a className={styles.item_link} href="#">
                    <img
                      className={styles.item_img}
                      src={item.imgDesk}
                      alt={item.title}
                    />
                  </a>
                </li>
              ))}
        </ul>
        <ButtonOne
          title={'View catalog'}
          className={styles.btn_view_catalog}
          btnStyle={styles.btn_style}
        />
      </div>
    </div>
  );
};

export default HomeCatalog;
