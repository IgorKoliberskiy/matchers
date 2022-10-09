// import { httpGet } from './http';

// export function loadUser(id) {
//   const data = httpGet(`http://server:8080/users/${id}`);
//   return JSON.parse(data);
// }

// // eslint-disable-next-line no-unused-vars
// export function saveUser(user) {
//   throw new Error('Unimplemented');
// }

export default function sortPlayers(players) {
  return players.sort((a, b) => b.health - a.health);
}