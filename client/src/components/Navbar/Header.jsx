import { Link, redirect } from "react-router-dom";
import Svg from "../Svg";
import Auth from "./Auth";
import HeaderProfile from "./HeaderProfile";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="border-b-2 border-teal-500">
      <div className="flex justify-between p-5 px-28 ">
        <Link
          className="flex justify-center items-center justify-self-center hover:cursor-pointer"
          onClick={() => redirect("/")}
        >
          <Svg icon="logo" className="fill-orange-400 w-16" />
          <div className="text-teal-400 font-semibold text-3xl">STREAMY</div>
        </Link>
        <SearchBar />
        <Auth />
        <HeaderProfile />
      </div>
    </div>
  );
}

export default Header;
