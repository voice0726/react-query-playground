import Link from "next/link";

import { useListUsers } from "@/features/users/api/list-user";


const UserList = () => {
  const { data: users, isLoading } = useListUsers();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!users) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.name} {user.email} <Link href={`/users/${user.id}`}>Details</Link></div>
        </div>
      ))}
    </div>
  );
};
export default UserList;
