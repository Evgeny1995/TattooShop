import { TypeList1 } from '../Types/Types.ts';
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
// const API_URL = 'http://localhost:3001';
// type NestedList = {
//   id: string;
//   title: string;
// };
// export const getList = async () => {
//   try {
//     const res = await axios.get<NestedList>(
//       `${API_URL}/catalCategoryNestedData`,
//       {},
//     );
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log(error.response?.data.errorText, 'error');
//     } else if (error instanceof ErrorEvent) {
//       console.log(error.message);
//     }
//   }
// };

// export const getList = axios({
//   url: `${API_URL}/catalCategoryNestedData`,
//   method: 'GET',
// });
