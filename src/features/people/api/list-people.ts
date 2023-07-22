import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { Person } from "@/types";

const listPeople = async () => {
  return await apiClient.get<Person[]>(`/api/people`).then((res) => res.data);
}

export const usePerson = () => {
  return useQuery<Person[]>({
    queryKey: ["people"],
    queryFn: listPeople,
  })
};
