import { rest } from 'msw';

import { API_URL } from '@/config/constants';
import { CreateOrUpdateRequest } from '@/features/todos/types';
import { db } from '@/testing/mocks';

const getUsersHandler = rest.get(`${API_URL}/api/todos`, (_, res, ctx) => {
  const todos = db.todo.getAll();

  return res(ctx.status(200), ctx.json(todos));
});

const getTodoHandler = rest.get(`${API_URL}/api/todos/:id`, (req, res, ctx) => {
  const { id } = req.params;
  if (!id) return res(ctx.status(404), ctx.json({ message: 'user not found' }));
  if (typeof id !== 'string')
    return res(ctx.status(400), ctx.json({ message: 'invalid id' }));

  const todo = db.todo.findFirst({ where: { id: { equals: id } } });
  if (!todo) {
    console.log('user not found in db');
    console.log(db.todo.getAll());
    return res(ctx.status(404), ctx.json({ message: 'user not found' }));
  }

  return res(ctx.status(200), ctx.json(todo));
});

const createTodoHandler = rest.post(
  `${API_URL}/api/todos`,
  async (req, res, ctx) => {
    // todo: validate here
    const body = await req.json<CreateOrUpdateRequest>();
    if (!body)
      return res(ctx.status(400), ctx.json({ message: 'invalid body' }));

    const created = db.todo.create({ ...body });
    return res(ctx.status(201), ctx.json(created));
  },
);

export const todoHandlers = [
  getUsersHandler,
  getTodoHandler,
  createTodoHandler,
];
