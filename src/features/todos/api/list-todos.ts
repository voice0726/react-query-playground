import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { userQueryKey } from "@/features/todos/api/query-key";
import { Todo } from "@/features/todos/types";
import { apiClient } from "@/lib/api-client";

const listUsers = async () => {
  return await apiClient.get<Todo[]>(`/api/todos`).then((res) => res.data);
};

const listUsersQuery = () => {
  return {
    queryKey: userQueryKey.all,
    queryFn: listUsers,
  };
};

export const useListUsers = (
  options?: Omit<
    UseQueryOptions<Todo[], unknown, Todo[], typeof userQueryKey.all>,
    "queryKey"
  >,
) => {
  return useQuery<Todo[], unknown, Todo[], typeof userQueryKey.all>({
    ...listUsersQuery(),
    ...options,
  });
};
