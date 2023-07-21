import { faker } from "@faker-js/faker";

export const testData = {
  todos: [
    {
      id: "40158605-1e0f-48a4-809e-f72dba1fa855",
      title: 'Task 1',
      email: "user1@test.com",
      description: 'Task 1',
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
    },
  ],
};
