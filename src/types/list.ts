import { Path } from '@remix-run/router/history.ts';

export type TypeList1 = {
  id: number;
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
  list?: TypeList2[]

};
export type TypeList2 = {
  id : number;
  title : string;
  to: string;
}