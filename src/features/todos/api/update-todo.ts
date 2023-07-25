import { useMutation } from '@tanstack/react-query';

import { Todo } from '@/features/todos/types';
import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

type UpdateTodoBody = {
  title: string;
  done: boolean;
  description?: string;
};

const updateTodo = async (id: string, body: UpdateTodoBody) => {
  return await apiClient
    .put<Todo>(`/api/todos/${id}`, body)
    .then((res) => res.data);
};

export const useUpdateTodo = () => {
  return useMutation((todo: Todo) => updateTodo(todo.id, { ...todo }), {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });
};
