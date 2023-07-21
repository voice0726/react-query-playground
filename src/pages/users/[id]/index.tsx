import { GetServerSideProps } from "next";

import { useGetUser } from "@/features/users/api/get-user";

type Props = {
  id: string;
};

const UserDetail = ({ id }: Props) => {
  const { data: user, isLoading } = useGetUser(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <h1>User details</h1>
      <div>ID: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <pre>{JSON.stringify(user, undefined, " ")}</pre>
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
