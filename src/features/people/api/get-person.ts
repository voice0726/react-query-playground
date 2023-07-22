import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { Person } from "@/types";

const getPerson = async (id: string) => {
  return await apiClient.get<Person>(`/api/people/${id}`).then((res) => res.data);
}

export const usePerson = (id: string) => {
  return useQuery<Person>({
    queryKey: ["person", id],
    queryFn: () => getPerson(id),
  })
};
