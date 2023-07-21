import { factory, primaryKey } from "@mswjs/data";
import { v4 as uuidv4 } from "uuid";

const models = {
  user: {
    id: primaryKey(uuidv4),
    name: String,
    email: String,
    createdAt: Date.now,
  },
};

export const db = factory(models);
