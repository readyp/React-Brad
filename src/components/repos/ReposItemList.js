import { useEffect } from "react";
import { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import ReposItem from "./ReposItem";

function ReposItemList({ login }) {
  const { repos, getUserRepos } = useContext(GithubContext);

  useEffect(() => {
    getUserRepos(login);
  }, []);

  return (
    <div className="my-8 w-full mx-auto">
      <h2 className="text-4xl font-bold mb-4">Latest Repos</h2>
      {repos?.length === 0 && (
        <h2 className="font-bold text-center">Repos Empty</h2>
      )}
      {repos?.map((item) => (
        <ReposItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ReposItemList;
