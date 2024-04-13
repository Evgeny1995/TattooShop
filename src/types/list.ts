import { Path } from '@remix-run/router/history.ts';

export type TypeList1 = {
   id: number;
   remainingGoods: number;
   title?: string;
   address?: string;
   text?: string;
   description?: string;
   email?: string;
   imgMob?: string;
   imgTab?: string;
   imgDesk?: string;
   alt?: string;
   avatar?: string;
   to?: string | Partial<Path>;
   list?: TypeList2[];
   img?: string;
   text1?: string;
   text2?: string;
   text3?: string;
   categories?: string;
   type?: string;
   manufacturer?: string;
   deliberately?: string;
   rating: number;
   price?: number;
   numberOfSales: number;
   sales?: boolean;
   descriptionFirst?: string;
   descriptionSecond?: string;
   descriptionThird?: string;
   descriptionFourth?: string;
   descriptionFifth?: string;
   needleStroke?: string;
   OperatingVoltage?: string;
   Connector?: string;
   Purpose?: string;
   previewGalery?: TypeList3[];
   previewGaleryDesk?: TypeList3[];
};
export type TypeList2 = {
   id: number;
   title: string;
   to: string;
};

export type TypeList3 = {
   id: number;
   img1: string;
};
