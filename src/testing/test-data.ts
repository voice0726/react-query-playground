import { faker } from "@faker-js/faker";

export const testData = {
  users: [
    {
      id: "40158605-1e0f-48a4-809e-f72dba1fa855",
      name: faker.person.fullName(),
      email: "user1@test.com",
      createdAt: faker.date.anytime(),
    },
  ],
};
