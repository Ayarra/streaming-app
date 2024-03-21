import Svg from "../Svg";

function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="border border-orange-500 rounded-md py-2 px-4 focus:outline-none focus:border-teal-500"
        placeholder=" Search a movie ..."
      />
      <button className="ml-2 bg-teal-400 hover:bg-orange-500 text-gray-900 font-bold py-2 px-4 rounded">
        <Svg icon="search" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default SearchBar;
