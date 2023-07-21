import { useParams } from "next/navigation";
import { useGetUser } from "@/features/users/api/get-user";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

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
      <h1>user detail</h1>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
export default UserDetail;

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
