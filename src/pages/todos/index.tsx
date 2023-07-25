import Link from 'next/link';

import { useListUsers } from '@/features/todos/api/list-todos';

const UserList = () => {
  const { data: todos, isLoading, isError } = useListUsers();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <h1>User List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>
            {todo.title} {todo.done} {todo.description}{' '}
            <Link href={`/todos/${todo.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserList;
