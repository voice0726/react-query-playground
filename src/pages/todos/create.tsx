import { useCreateTodo } from "@/features/todos/api/create-todo";
import CreateTodoForm from "@/features/todos/components/create-form";
import { CreateOrUpdateRequest } from "@/features/todos/types";

const CreateTodo = () => {
  const { mutate } = useCreateTodo();
  const onSubmit = (data: CreateOrUpdateRequest) => {
    mutate(data);
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <CreateTodoForm onSubmit={onSubmit} />
    </div>
  );
};
export default CreateTodo;
