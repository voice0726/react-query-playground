import { SubmitHandler, useForm } from 'react-hook-form';

import { CreateOrUpdateRequest } from '@/features/todos/types';

type Props = {
  onSubmit: SubmitHandler<CreateOrUpdateRequest>;
};

const CreateTodoForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<CreateOrUpdateRequest>();

  return (
    <div className="m-4">
      <h1>Create Todo</h1>
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
          <input {...register('description')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CreateTodoForm;
