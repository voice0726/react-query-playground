import { useQuery } from '@tanstack/react-query';

import { Person } from '@/features/people/types';
import { apiClient } from '@/lib/api-client';

const getPerson = async (id: string) => {
  return await apiClient
    .get<Person>(`/api/people/${id}`)
    .then((res) => res.data);
};

export const usePerson = (id: string) => {
  return useQuery<Person>({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
  });
};
