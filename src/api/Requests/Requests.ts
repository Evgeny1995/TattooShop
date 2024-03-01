import { TypeList1 } from '../../types/list.ts';
import axios from 'axios';

/////////////////////////////
///////////API_URL///////////
/////////////////////////////

const API_URL = 'http://localhost:3001';

/////////////////////////////
///////////REQUESTS//////////
/////////////////////////////

export function fetchList(clarificationLinks: string) {
  return axios
    .get<TypeList1[]>(`${API_URL}${clarificationLinks}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

/////////////////////////////
/////////////////////////////
/////////////////////////////
