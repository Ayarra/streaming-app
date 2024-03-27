import { useLoaderData } from "react-router-dom";
import { getMovie } from "../../api/axios";
import MoviePageComments from "./MoviePageComments";
import MoviePageInfo from "./MoviePageInfo";
import MoviePlayer from "./MoviePlayer";

export async function loader({ params }) {
  const { movie } = await getMovie(params.movieId);
  return movie;
}

function MoviePage() {
  const movieDetail = useLoaderData();
  console.log(movieDetail);
  return (
    <div className="mt-16 px-28 pb-10">
      <MoviePlayer movieHash={movieDetail.torrents[0].hash} />
      <MoviePageInfo movieDetail={movieDetail} />
      <MoviePageComments />
    </div>
  );
}

export default MoviePage;
