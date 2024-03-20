import { useState } from "react";
import { Link } from "react-router-dom";
import Svg from "../Svg";

function HeaderProfile({ username }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="bg-teal-500 text-gray-100 py-4 px-6 flex justify-between items-center relative">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="text-gray-100 focus:outline-none"
        >
          <Svg icon="user" className="w-6 h-6" />
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
            <ul>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderProfile;
