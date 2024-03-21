import poster from "../../../public/medium-cover.jpg";

function MoviePageInfo() {
  return (
    <div className="flex bg-slate-700 pr-6 rounded-lg shadow-md">
      <div
        className="w-full h-96 overflow-hidden rounded-lg mr-6 shadow-md flex justify-center items-center"
        style={{
          backgroundImage: `url(${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="text-white">
        <h1 className="text-3xl font-bold mb-2">Title</h1>
        <div className="flex mb-2">
          <span className="bg-orange-400 text-white px-2 py-1 rounded mr-2">
            MPAA Rating
          </span>
          <span className="bg-orange-400 text-white px-2 py-1 rounded mr-2">
            Rating
          </span>
          <span className="bg-orange-400 text-white px-2 py-1 rounded mr-2">
            Duration
          </span>
        </div>
        <p className="text-gray-300 mb-4">
          Jack Mosley, a burnt-out detective, is assigned the unenviable task of
          transporting a fast-talking convict from jail to a courthouse 16
          blocks away. However, along the way he learns that the man is supposed
          to testify against Mosley`&apos;`s colleagues, and the entire NYPD
          wants him dead. Mosley must choose between loyalty to his colleagues
          and protecting the witness, and never has such a short distance seemed
          so long...
        </p>
        <ul className="text-gray-300">
          <li className="mb-1">
            <span className="font-semibold">Genre:</span> list of genres
          </li>
          <li className="mb-1">
            <span className="font-semibold">Release year:</span> 2015
          </li>
          <li className="mb-1">
            <span className="font-semibold">IMDB Code:</span> 98y453n
          </li>
          <li className="mb-1">
            <span className="font-semibold">Cast:</span> list of names,..
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoviePageInfo;
