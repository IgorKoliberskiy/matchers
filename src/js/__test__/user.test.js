import sortPlayers from "../user";

test("Сортировка игроков - toEqual", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).toEqual(expected);
});

test("Сортировка игроков - not.toBe", () => {
  const received = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  ;
  expect(sortPlayers(received)).not.toBe(expected);
});

// import { loadUser } from '../user';
// import { httpGet } from '../http';

// jest.mock('../http');

// beforeEach(() => {
//   jest.resetAllMocks();
// });

// test('should call loadUser once', () => {
//   httpGet.mockReturnValue(JSON.stringify({}));

//   const response = loadUser(1);
//   expect(response).toEqual({});
//   expect(httpGet).toBeCalledWith('http://server:8080/users/1');
// });
