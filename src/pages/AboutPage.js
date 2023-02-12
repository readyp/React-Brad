import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="p-8 max-w-lg mx-auto bg-base-300 rounded-lg shadow-lg space-y-4">
      <h1 className="text-xl text-center font-bold uppercase">Github Finder</h1>
      <p className="font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-gray-400 text-center">
        Version <span className="text-white">1.0.0</span>
      </p>
      <Link to={"/"} className="btn btn-outline flex space-x-4">
        <FaHome className="text-3xl" />
        <span>Go back home</span>
      </Link>
    </div>
  );
}

export default AboutPage;
