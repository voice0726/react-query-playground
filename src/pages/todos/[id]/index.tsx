import { GetServerSideProps } from 'next';
import { useForm } from 'react-hook-form';

import { useGetTodo } from '@/features/todos/api/get-todo';
import { useUpdateTodo } from '@/features/todos/api/update-todo';
import { CreateOrUpdateRequest } from '@/features/todos/types';

type Props = {
  id: string;
};

const UserDetail = ({ id }: Props) => {
  const { data: todo, isLoading } = useGetTodo(id);
  const { register, handleSubmit } = useForm<CreateOrUpdateRequest>({
    defaultValues: {
      title: todo?.title || '',
      done: todo?.done || false,
      description: todo?.description,
    },
  });
  const { mutate } = useUpdateTodo();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!todo) {
    return <div>Something went wrong!</div>;
  }

  const onSubmit = (data: CreateOrUpdateRequest) => {
    mutate({
      id: todo.id,
      title: data.title,
      done: data.done,
      description: data.description,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    });
  };

  return (
    <div className="m-4">
      <h1>User details</h1>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor={'title'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              {...register('title', { required: 'title should not be empty' })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-6">
            <label htmlFor={'done'}>Done</label>
            <input type="checkbox" {...register('done')} />
          </div>
          <div className="mb-6">
            <label
              htmlFor={'description'}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              {...register('description')}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-6">
            <button type="submit">Submit</button>
          </div>
        </form>
        <pre>{JSON.stringify(todo, undefined, ' ')}</pre>
      </div>
    </div>
  );
};
export default UserDetail;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  if (!id) {
    return { notFound: true };
  }
  if (Array.isArray(id)) {
    return { props: { id: id[0] } };
  }
  return { props: { id } };
};
