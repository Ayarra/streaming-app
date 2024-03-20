import { Link } from "react-router-dom";
function Auth() {
  return (
    <div className="flex items-center  gap-11">
      <Link
        to="/login"
        className="bg-orange-500 text-gray-100 hover:bg-orange-600 hover:text-gray-200 px-4 py-2 rounded-md mr-4"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-orange-500 text-gray-100 hover:bg-orange-600 hover:text-gray-200 px-4 py-2 rounded-md"
      >
        Register
      </Link>
    </div>
  );
}

export default Auth;
