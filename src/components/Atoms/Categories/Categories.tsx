import React, { useEffect, useMemo, useState } from 'react';
import styles from './Categories.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import clsx from 'clsx';
import { TypeList1 } from '../../../types/list.ts';
import Card from '../../Molecules/CardDesk/Card.tsx';

enum Tab {
   Bestsellers = 'Bestsellers',
   Popular = 'Popular',
   NewArrivals = 'New Arrivals',
   Sales = '  Sales',
}

function GoodsList({ goods }: { goods: TypeList1[] | undefined }) {
   const [countOfList, setCountOfList] = useState(8);

   return (
      <div className={styles.cards_list_container}>
         <ul className={styles.cards_list}>
            {goods
               ?.slice(0, countOfList)
               .map((it) => <Card key={it.id} product={it} />)}
         </ul>

         <button
            className={styles.btn_style}
            onClick={() => {
               setCountOfList(goods?.length || 100);
            }}
         >
            Show more
         </button>
      </div>
   );
}

const Categories: React.FC = () => {
   const { goodsCardsData } = useTypedSelector((state) => state.goodsCards);
   const { getGoodCardData } = useActions();
   // const arr = [...goodsCardsData];
   useEffect(() => {
      getGoodCardData();
   }, []);

   const [activeTab, setActiveTab] = useState<Tab>(Tab.Bestsellers);

   const goodsCardsCopyBestsellers = goodsCardsData?.map((i) => i);
   const goodsCardsCopyPopular = goodsCardsData?.map((i) => i);
   const goodsCardsCopyNewCards = goodsCardsData?.map((i) => i);
   const goodsCardsCopySale = goodsCardsData?.map((i) => i);

   const goods = useMemo(() => {
      //Методы сортировки

      const bestsellers = goodsCardsCopyBestsellers?.sort((a, b) =>
         a.numberOfSales < b.numberOfSales ? 1 : -1,
      );
      const popular = goodsCardsCopyPopular?.sort((a, b) =>
         a.rating > b.rating ? 1 : -1,
      );
      const newCards = goodsCardsCopyNewCards;
      const sale = goodsCardsCopySale?.filter((sale) => sale.sales === true);
      ///всегда должен возвращатся масив

      return {
         bestsellers,
         popular,
         new: newCards,
         sale,
      };
   }, [goodsCardsData]);

   const goodsSelector =
      activeTab === Tab.Bestsellers
         ? goods.bestsellers
         : activeTab === Tab.Popular
         ? goods.popular
         : activeTab === Tab.NewArrivals
         ? goods.new
         : activeTab === Tab.Sales
         ? goods.sale
         : goods.bestsellers;

   return (
      <div className={styles.list_container}>
         <ul className={styles.list}>
            {Object.values(Tab).map((it, index) => (
               <li key={index} className={styles.list_item}>
                  <button
                     onClick={() => setActiveTab(it)}
                     className={
                        activeTab === it
                           ? clsx(styles.item_text, styles.active)
                           : styles.item_text
                     }
                  >
                     {it}
                  </button>
               </li>
            ))}
         </ul>

         <div className={styles.tes}>
            <GoodsList goods={goodsSelector} />
         </div>
      </div>
   );
};

export default Categories;
