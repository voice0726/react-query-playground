import { rest } from "msw";

import { API_URL } from "@/config/constants";
import { userHandlers } from "@/testing/mocks/handlers/users";

export const handlers = [
  ...userHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  }),
];
