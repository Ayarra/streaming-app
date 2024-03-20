function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="border border-orange-500 rounded-md py-2 px-4 focus:outline-none focus:border-teal-500"
        placeholder=" Search a movie ..."
      />
      <button className="ml-2 bg-teal-500 hover:bg-orange-600 text-gray-200 font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
