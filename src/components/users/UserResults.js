import { useEffect, useContext } from "react";
import Spinner from "../common/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { loading, users, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-col-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default UserResults;
