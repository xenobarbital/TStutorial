// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Dave',
//   age: 40,
//   hobbies: ['sports', 'bewbs'],
//   role: [2, 'author'],
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Dave',
  age: 40,
  hobbies: ['sports', 'bewbs'],
  role: Role.ADMIN,
};

console.log(Role.ADMIN);