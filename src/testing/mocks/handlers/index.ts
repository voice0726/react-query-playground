import { rest } from "msw";

import { API_URL } from "@/config/constants";
import { todoHandlers } from "@/testing/mocks/handlers/todos";

export const handlers = [
  ...todoHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  }),
];
