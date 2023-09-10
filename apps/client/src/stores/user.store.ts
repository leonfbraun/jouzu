// import { action, atom } from 'nanostores';

// export class User {
//   id: string;
//   name: string;
//   occupation: string;
// }

// export const userStore = atom<User[]>([]);

// export const userInnitAction = action(userStore, 'innit', (userStore) => {
//   userStore.set([
//     {
//       id: getRandomInt(1000).toString(),
//       name: nameList[getRandomInt(5)],
//       occupation: occupationList[getRandomInt(5)],
//     },
//     {
//       id: getRandomInt(1000).toString(),
//       name: nameList[getRandomInt(5)],
//       occupation: occupationList[getRandomInt(5)],
//     },
//     {
//       id: getRandomInt(1000).toString(),
//       name: nameList[getRandomInt(5)],
//       occupation: occupationList[getRandomInt(5)],
//     },
//     {
//       id: getRandomInt(1000).toString(),
//       name: nameList[getRandomInt(5)],
//       occupation: occupationList[getRandomInt(5)],
//     },
//     {
//       id: getRandomInt(1000).toString(),
//       name: nameList[getRandomInt(5)],
//       occupation: occupationList[getRandomInt(5)],
//     },
//   ]);
// });

// export const userRandomUpdate = action(
//   userStore,
//   'randomUpdate',
//   (userStore) => {
//     const currentUserStore = userStore.get();
//     const targetIdx = getRandomInt(currentUserStore.length);
//     currentUserStore[targetIdx].name = nameList[getRandomInt(5)];
//     console.log(targetIdx, currentUserStore[targetIdx]);
//     userStore.set(currentUserStore);
//   },
// );
