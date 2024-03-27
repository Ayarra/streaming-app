import { Link, useLoaderData } from "react-router-dom";
import { getMovies } from "../../api/axios";
import MovieCard from "./MovieCard";

export async function loader() {
  const moviesCatalog = await getMovies();
  return moviesCatalog;
}

function MovieCatalog() {
  const { movies } = useLoaderData();

  return (
    <div className="flex flex-wrap justify-center items-start gap-5 pb-10 px-28 mt-16">
      {movies.map((movie) => (
        <Link key={movie.imdb_code} to={`/movies/${movie.imdb_code}`}>
          <MovieCard
            title={movie.title}
            cover={movie.large_cover_image}
            bg_img={movie.background_image_original}
            rating={movie.rating}
            year={movie.year}
            synopsis={movie.synopsis}
          />
        </Link>
      ))}
    </div>
  );
}

export default MovieCatalog;
