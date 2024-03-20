import MoviePageInfo from "./MoviePageInfo";
import MoviePageComments from "./MoviePageComments";

function MoviePage() {
  return (
    <div>
      <div>Movie Player</div>
      <MoviePageInfo />
      <MoviePageComments />
    </div>
  );
}

export default MoviePage;
