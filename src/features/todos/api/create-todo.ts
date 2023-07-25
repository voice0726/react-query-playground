import { useMutation } from '@tanstack/react-query';

import { API_URL } from '@/config/constants';
import { CreateOrUpdateRequest, Todo } from '@/features/todos/types';
import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

const createTodo = async (body: CreateOrUpdateRequest) => {
  return apiClient
    .post<Todo>(`${API_URL}/api/todos`, body)
    .then((res) => res.data);
};

export const useCreateTodo = () => {
  return useMutation((body: CreateOrUpdateRequest) => createTodo(body), {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });
};
