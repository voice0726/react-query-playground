import { useRouter } from 'next/router';

import { useGetTodo } from '@/features/todos/api/get-todo';
import { useUpdateTodo } from '@/features/todos/api/update-todo';
import { UpdateTodoForm } from '@/features/todos/components/update-form';
import { CreateOrUpdateRequest } from '@/features/todos/types';

const TodoDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data: todo, isLoading } = useGetTodo(id ?? null, { enabled: !!id });

  const { mutate } = useUpdateTodo();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!todo) {
    return <div>Something went wrong!</div>;
  }

  const onSubmit = async (data: CreateOrUpdateRequest) => {
    mutate({
      id: todo.id,
      title: data.title,
      done: data.done,
      description: data.description,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    });
    await router.push('/todos');
  };

  return (
    <UpdateTodoForm todo={todo} onSubmit={onSubmit} />
  );
};
export default TodoDetail;
