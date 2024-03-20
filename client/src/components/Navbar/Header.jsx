import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Svg from "../Svg";
import Auth from "./Auth";
import HeaderProfile from "./HeaderProfile";
import SearchBar from "./SearchBar";

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="border-b-2 border-teal-500">
      <div className="flex justify-between p-5 px-28 ">
        <Link
          className="flex justify-center items-center justify-self-center hover:cursor-pointer"
          onClick={() => redirect("/")}
        >
          <Svg icon="logo" className="fill-orange-500 w-16" />
          <div className="text-teal-500 font-semibold text-3xl">STREAMY</div>
        </Link>
        <SearchBar />
        <Auth />
        <HeaderProfile />
        {/* {isAuth ? <Auth /> : <HeaderProfile username="hello" />} */}
      </div>
    </div>
  );
}

export default Header;
