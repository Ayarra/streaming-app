function MoviePageComments() {
  return (
    <div className="p-4 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <p className="text-gray-300 mb-4">32 comments</p>

      <hr className="border-b border-gray-600 my-4" />

      <div className="flex items-start mb-4">
        <img src="" alt="User Profile" className="w-8 h-8 rounded-full mr-2" />

        <form className="flex-1 flex flex-col">
          <textarea
            placeholder="Write a comment..."
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2 resize-none focus:outline-none focus:border-teal-500 text-gray-800"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded self-end"
          >
            Comment
          </button>
        </form>
      </div>
      <hr className="border-b border-gray-600 my-4" />
      {/* Display existing comments */}
      <div className="space-y-4">
        <div className="flex items-start">
          <img
            src=""
            alt="User Profile"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex flex-col">
            <span className="text-orange-300 font-semibold">Username</span>
            <span className="text-teal-300 text-sm">3 minutes ago</span>
            <p className="text-gray-100">This is a comment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageComments;
