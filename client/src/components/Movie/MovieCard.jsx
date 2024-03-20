import { useState } from "react";
import poster from "../../../public/medium-cover.jpg";
import MovieCardInfo from "./MovieCardInfo";

function MovieCard({ title }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-52  flex flex-col justify-center items-center relative hover:cursor-pointer "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={poster} className="object-cover w-full " alt="Movie Poster" />
      <div className="text-gray-200 hover:text-orange-500 text-sm text-center p-2">
        <p>{title}</p>
      </div>
      {hover && <MovieCardInfo />}
      {/* title, rating, year, mini discritpion, blured background image */}
    </div>
  );
}

export default MovieCard;
