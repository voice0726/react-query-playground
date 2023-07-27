import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateOrUpdateRequest } from '@/features/todos/types';

type Props = {
  onSubmit: SubmitHandler<CreateOrUpdateRequest>;
};

const CreateTodoForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<CreateOrUpdateRequest>();

  return (
    <div className='m-4'>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6'>
          <label
            htmlFor={'title'}
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title
          </label>
          <input
            {...register('title', { required: 'title should not be empty' })}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='flex items-center mb-4'>
          <input type='checkbox' {...register('done')}
                 className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label htmlFor='done' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Done</label>
        </div>
        <div className='mb-6'>
          <label
            htmlFor={'description'}
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Description
          </label>
          <input {...register('description')}
                 className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default CreateTodoForm;
