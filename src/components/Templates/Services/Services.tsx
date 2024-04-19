import React from 'react';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import styles from './Services.module.scss';
import ServicesList from '../../Molecules/ServicesList/ServicesList.tsx';
import BasketPayment from '../../Molecules/BasketPayment/BasketPayment.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import ServicesNav from '../../Molecules/ServicesNav/ServicesNav.tsx';
const Services: React.FC = () => {
   const { products } = useTypedSelector((s) => s.cart);
   return (
      <div className={styles.services_wrap}>
         <Header />
         <ServicesNav />
         <h1 className={styles.title}>Services</h1>
         <div className={styles.services_content}>
            <ServicesList />
            <div className={styles.basket_payment_container}>
               <BasketPayment products={products} />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Services;
