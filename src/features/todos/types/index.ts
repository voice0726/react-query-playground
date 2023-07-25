export type Todo = {
  id: string;
  title: string;
  done: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateOrUpdateRequest = Omit<
  Todo,
  'id' | 'createdAt' | 'updatedAt'
>;
