import { faker } from '@faker-js/faker';

export const testData = {
  todos: [
    {
      id: faker.string.uuid(),
      title: 'Task 1',
      email: 'user1@test.com',
      description: 'Task 1',
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
    },
  ],
  people: Array.from(new Array(100), () => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 65 }),
      tel: faker.phone.number(),
      email: faker.internet.email(),
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
    };
  }),
};
