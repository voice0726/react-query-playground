import dayjs from 'dayjs';

import { IS_BROWSER } from '@/config/constants';

import { testData } from '../test-data';

import { db } from './db';


export const seedDb = (): void => {
  const userCount = db.todo.count();
  if (userCount > 0) {
    console.log('db already seeded');
    return;
  }

  if (!IS_BROWSER) {
    return
  }

  let localDb = localStorage.getItem('testData');
  if (!localDb) {
    console.log('persisting test data to local storage');
    localStorage.setItem('testData', JSON.stringify(testData));
    localDb = localStorage.getItem('testData') as string;
  }

  const parsed = JSON.parse(localDb) as typeof testData;
  console.log('seeding db');

  parsed.todos.forEach((todo) =>
    db.todo.create({
      ...todo,
      createdAt: dayjs(todo.createdAt).unix(),
      updatedAt: dayjs(todo.updatedAt).unix(),
    }),
  );

  parsed.people.forEach((person) =>
    db.person.create({
      ...person,
      createdAt: dayjs(person.createdAt).unix(),
      updatedAt: dayjs(person.updatedAt).unix(),
    }),
  );
};
