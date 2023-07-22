export type Entity = {
  id: string;
  createdAt: number;
};

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Person = {
  id: string;
  name: string;
  age: number;
  tel: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
