import { rest } from "msw";

import { API_URL } from "@/config/constants";
import { db } from "@/testing/mocks";

const getPersonHandler = rest.get(`${API_URL}/api/people/:id`, (req, res, ctx) => {
  const { id } = req.params;
  if (typeof id !== "string") {
    return res(ctx.status(400));
  }

  const person = db.person.findFirst({where: {id: {equals: id}}})
  if (!person) {
    return res(ctx.status(404));
  }

  return res(
    ctx.status(200),
    ctx.json(person),
  );
});

const listPeopleHandler = rest.get(`${API_URL}/api/people`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page')
  const people = db.person.findMany({
    skip: page ? (parseInt(page) - 1) * 10 : undefined,
    take: 10,
  });

  return res(
    ctx.status(200),
    ctx.json({
      records: people,
      total: db.person.count(),
      page_size: 10,
      page_number: page ? parseInt(page) : 1,
      has_more: page ? parseInt(page) * 10 < db.person.count() : true,
    }),
  );
});

export const peopleHandlers = [getPersonHandler, listPeopleHandler];
