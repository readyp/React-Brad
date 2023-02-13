import { FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";

function ReposItem({ item }) {
  return (
    <div className="bg-base-200 rounded p-4 my-4 space-y-2">
      <h2>{item.name}</h2>
      <p className="text-sm italic">{item.description}</p>
      <div className="space-y-2 space-x-2">
        <div className="badge badge-info badge-lg space-x-1">
          <FaEye /> <span>{item?.watchers_count}</span>
        </div>
        <div className="badge badge-success badge-lg space-x-1">
          <FaStar /> <span>{item?.stargazers_count}</span>
        </div>
        <div className="badge badge-error badge-lg space-x-1">
          <FaInfo /> <span>{item?.open_issues}</span>
        </div>
        <div className="badge badge-warning badge-lg space-x-1">
          <FaUtensils /> <span>{item?.forks}</span>
        </div>
      </div>
    </div>
  );
}

export default ReposItem;
