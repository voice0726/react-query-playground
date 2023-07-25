import { rest } from 'msw';

import { API_URL } from '@/config/constants';
import { peopleHandlers } from '@/testing/mocks/handlers/people';
import { todoHandlers } from '@/testing/mocks/handlers/todos';

export const handlers = [
  ...todoHandlers,
  ...peopleHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  }),
];
