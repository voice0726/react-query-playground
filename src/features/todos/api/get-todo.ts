import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { todoQueryKey } from '@/features/todos/api/query-key';
import { Todo } from '@/features/todos/types';
import { apiClient } from '@/lib/api-client';

const getTodo = async (id: string) => {
  return await apiClient.get<Todo>(`/api/todos/${id}`).then((res) => res.data);
};

const getTodoQuery = (id: string) => {
  return {
    queryKey: todoQueryKey.one(id),
    queryFn: () => getTodo(id),
  };
};

export const useGetTodo = (
  id: string,
  option?: Omit<
    UseQueryOptions<Todo, unknown, Todo, ReturnType<typeof todoQueryKey.one>>,
    'queryKey'
  >,
) => {
  return useQuery<Todo, unknown, Todo, ReturnType<typeof todoQueryKey.one>>({
    ...getTodoQuery(id),
    ...option,
  });
};
