import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";
import { Pageable, Person } from "@/types";

const listPeople = async () => {
  return await apiClient.get<Pageable<Person>>(`/api/people`).then((res) => res.data);
}

export const usePeople = () => {
  return useQuery<Pageable<Person>>({
    queryKey: ["people"],
    queryFn: listPeople,
    keepPreviousData: true,
  })
};
