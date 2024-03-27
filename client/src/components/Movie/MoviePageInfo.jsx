function MoviePageInfo({ movieDetail }) {
  return (
    <div className="flex gap-6 bg-slate-700 pr-6 rounded-lg shadow-md  ">
      <img className="ml-5" src={movieDetail.medium_cover_image} />

      <div className="text-white">
        <h1 className="text-3xl font-bold mb-2">{movieDetail.title}</h1>
        <div className="flex mb-2">
          <span className="bg-orange-400 text-white px-2 py-1 rounded mr-2">
            {movieDetail.rating + "/10"}
          </span>
          <span className="bg-orange-400 text-white px-2 py-1 rounded mr-2">
            {movieDetail.runtime + "min"}
          </span>
        </div>
        <p className="text-gray-300 mb-4 overflow-auto max-h-52">
          {movieDetail.description_full}
        </p>
        <ul className="text-gray-300">
          <li className="mb-1">
            <span className="font-semibold">Genre:</span>{" "}
            {movieDetail.genres.join(", ")}
          </li>
          <li className="mb-1">
            <span className="font-semibold">Release year:</span>{" "}
            {movieDetail.year}
          </li>
          <li className="mb-1">
            <span className="font-semibold">IMDB Code:</span>{" "}
            {movieDetail.imdb_code}
          </li>
          <li className="mb-1">
            <span className="font-semibold">Cast:</span>{" "}
            {movieDetail.cast?.map((actor) => actor.name).join(", ") || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoviePageInfo;
