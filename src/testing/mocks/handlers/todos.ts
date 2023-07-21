import { rest } from "msw";

import { API_URL } from "@/config/constants";
import { db } from "@/testing/mocks";

const getUsersHandler = rest.get(`${API_URL}/api/todos`, (_, res, ctx) => {
  const todos = db.todo.getAll();

  return res(ctx.status(200), ctx.json(todos));
});

const getTodoHandler = rest.get(`${API_URL}/api/todos/:id`, (req, res, ctx) => {
  const { id } = req.params;
  if (!id) return res(ctx.status(404), ctx.json({ message: "user not found" }));
  if (typeof id !== "string")
    return res(ctx.status(400), ctx.json({ message: "invalid id" }));

  const todo = db.todo.findFirst({ where: { id: { equals: id } } });
  if (!todo) {
    console.log("user not found in db");
    console.log(db.todo.getAll());
    return res(ctx.status(404), ctx.json({ message: "user not found" }));
  }

  return res(ctx.status(200), ctx.json(todo));
});

export const todoHandlers = [getUsersHandler, getTodoHandler];
