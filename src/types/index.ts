export type Entity = {
  id: string;
  createdAt: number;
};

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
