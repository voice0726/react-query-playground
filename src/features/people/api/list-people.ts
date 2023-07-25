import { useQuery } from '@tanstack/react-query';

import { Person } from '@/features/people/types';
import { apiClient } from '@/lib/api-client';
import { Pageable } from '@/types';

const listPeople = async (page?: number) => {
  return await apiClient
    .get<Pageable<Person>>(`/api/people?page=${page || 1}`)
    .then((res) => res.data);
};

export const usePeople = (page: number) => {
  return useQuery<Pageable<Person>>({
    queryKey: ['people', page],
    queryFn: () => listPeople(page),
    keepPreviousData: true,
  });
};
