export type Todo = {
  id: number;
  title: string;
  status: 'done' | 'open';
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateOrUpdateRequest = Omit<
  Todo,
  'id' | 'createdAt' | 'updatedAt'
>;
