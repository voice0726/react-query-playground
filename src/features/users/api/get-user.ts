import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { userQueryKey } from "@/features/users/api/query-key";
import { apiClient } from "@/lib/api-client";
import { User } from "@/types";

const getUser = async (id: string) => {
  return await apiClient.get<User>(`/api/users/${id}`).then((res) => res.data);
};

const getUserQuery = (id: string) => {
  return {
    queryKey: userQueryKey.one(id),
    queryFn: () => getUser(id),
  };
};

export const useGetUser = (
  id: string,
  option?: Omit<
    UseQueryOptions<User, unknown, User, ReturnType<typeof userQueryKey.one>>,
    "queryKey"
  >,
) => {
  return useQuery<User, unknown, User, ReturnType<typeof userQueryKey.one>>({
    ...getUserQuery(id),
    ...option,
  });
};
