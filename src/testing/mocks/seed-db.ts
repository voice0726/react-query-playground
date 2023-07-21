import dayjs from "dayjs";

import { testData } from "../test-data";

import { db } from "./db";


export const seedDb = (): void => {
  const userCount = db.todo.count();

  if (userCount > 0) {
    return;
  }

  testData.todos.forEach((todo => db.todo.create({
    ...todo,
    createdAt: dayjs(todo.createdAt).unix(),
    updatedAt: dayjs(todo.updatedAt).unix()
  })));
};
