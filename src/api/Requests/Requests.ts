import axios from 'axios';

const API_URL = 'http://localhost:3001';

type nestedList = {
  id: string;
  title: string;
};

//
export async function fetchNestedList() {
  axios
    .get<nestedList>(`${API_URL}/catalCategoryNestedData`)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

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
