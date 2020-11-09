import * as types from '../type';
import axios from 'axios';

// const url = 'https://api.pray.zone/v2/times/today.json?city=salatiga';

// export const getPrayer = (city) => {
//   return {
//     type: types.GET_PRAYER,
//     payload: axios({
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//       url: `https://api.pray.zone/v2/times/today.json?city=${city}`,
//     }).then(
//       (result) => {
//         resolve(result);
//       },
//       (err) => {
//         reject(err);
//       },
//     ),
//   };
// };

export const getPrayer = (city) => ({
  type: types.GET_PRAYER,
  payload: new Promise((resolve, reject) => {
    axios(`https://api.pray.zone/v2/times/today.json?city=${city}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      },
    );
  }),
});
