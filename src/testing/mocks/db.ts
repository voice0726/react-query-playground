import { factory, primaryKey } from "@mswjs/data";
import { v4 as uuidv4 } from "uuid";

const models = {
  todo: {
    id: primaryKey(uuidv4),
    title: String,
    done: Boolean,
    description: String,
    createdAt: Date.now,
    updatedAt: Date.now,
  },
};

export const db = factory(models);
