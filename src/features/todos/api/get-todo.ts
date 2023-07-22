import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { userQueryKey } from "@/features/todos/api/query-key";
import { apiClient } from "@/lib/api-client";
import { Todo } from "@/types";

const getTodo = async (id: string) => {
  return await apiClient.get<Todo>(`/api/todos/${id}`).then((res) => res.data);
};

const getTodoQuery = (id: string) => {
  return {
    queryKey: userQueryKey.one(id),
    queryFn: () => getTodo(id),
  };
};

export const useGetTodo = (
  id: string,
  option?: Omit<
    UseQueryOptions<Todo, unknown, Todo, ReturnType<typeof userQueryKey.one>>,
    "queryKey"
  >,
) => {
  return useQuery<Todo, unknown, Todo, ReturnType<typeof userQueryKey.one>>({
    ...getTodoQuery(id),
    ...option,
  });
};
