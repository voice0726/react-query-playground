import { rest } from "msw";
import { API_URL } from "@/config/constants";
import { db } from "@/testing/mocks";

const getUsersHandler = rest.get(`${API_URL}/api/users`, (_, res, ctx) => {
  const users = db.user.getAll();

  return res(ctx.status(200), ctx.json(users));
});

const getUserHandler = rest.get(`${API_URL}/api/users/:id`, (req, res, ctx) => {
  const { id } = req.params;
  if (!id) return res(ctx.status(404), ctx.json({ message: "user not found" }));
  if (typeof id !== "string")
    return res(ctx.status(400), ctx.json({ message: "invalid id" }));

  const user = db.user.findFirst({ where: { id: { equals: id } } });
  if (!user) {
    console.log("user not found in db");
    console.log(db.user.getAll());
    return res(ctx.status(404), ctx.json({ message: "user not found" }));
  }

  return res(ctx.status(200), ctx.json({ user }));
});

export const userHandlers = [getUsersHandler, getUserHandler];
