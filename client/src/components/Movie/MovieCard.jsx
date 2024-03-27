import { useState } from "react";
import MovieCardInfo from "./MovieCardInfo";

function MovieCard({ title, cover, bg_img, rating, synopsis, year }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-52  flex flex-col justify-center items-center relative hover:cursor-pointer "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={cover} className="object-cover w-full " alt="Movie Poster" />
      <div className="text-gray-200 hover:text-orange-400 text-sm text-center p-2">
        <p>{title}</p>
      </div>
      {hover && (
        <MovieCardInfo
          bg_img={bg_img}
          title={title}
          rating={rating}
          synopsis={synopsis}
          year={year}
        />
      )}
      {/* title, rating, year, mini discritpion, blured background image */}
    </div>
  );
}

export default MovieCard;
