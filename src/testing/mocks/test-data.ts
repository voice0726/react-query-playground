import { faker } from "@faker-js/faker";

export const testData = {
  users: [
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: "user1@test.com",
      createdAt: faker.date.anytime(),
    },
  ],
};
