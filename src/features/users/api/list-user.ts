import { userQueryKey } from "@/features/users/api/query-key";
import { apiClient } from "@/lib/api-client";
import { User } from "@/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const listUsers = async () => {
  return await apiClient.get<User[]>(`/api/users`).then((res) => res.data);
};

const listUsersQuery = () => {
  return {
    queryKey: userQueryKey.all,
    queryFn: listUsers,
  };
};

export const useListUsers = (
  options?: Omit<
    UseQueryOptions<User[], unknown, User[], typeof userQueryKey.all>,
    "queryKey"
  >,
) => {
  return useQuery<User[], unknown, User[], typeof userQueryKey.all>({
    ...listUsersQuery(),
    ...options,
  });
};
