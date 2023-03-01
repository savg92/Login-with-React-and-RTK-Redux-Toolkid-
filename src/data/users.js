import { faker } from '@faker-js/faker';

export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toString(),
    registeredAt: faker.date.past().toString(),
  };
}

Array.from({ length: 25 }).forEach(() => {
  USERS.push(createRandomUser());
});