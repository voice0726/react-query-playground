import { useRouter } from 'next/router';

import { useCreateTodo } from '@/features/todos/api/create-todo';
import CreateTodoForm from '@/features/todos/components/create-form';
import { CreateOrUpdateRequest } from '@/features/todos/types';

const CreateTodo = () => {
  const { mutate } = useCreateTodo();
  const router = useRouter();
  const onSubmit = async (data: CreateOrUpdateRequest) => {
    mutate(data);
    await router.push('/todos');
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <CreateTodoForm onSubmit={onSubmit} />
    </div>
  );
};
export default CreateTodo;
