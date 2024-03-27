function MovieCardInfo({ bg_img, title, rating, synopsis, year }) {
  return (
    <div
      className="absolute top-1/4 left-1/3 w-72 h-auto bg-cover bg-center bg-no-repeat z-10 p-5 rounded-lg"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <h1 className="text-white text-3xl mb-2">{title}</h1>
      <div className="text-white  mb-2">
        <span className="mr-2 text-lg" id="rating">
          {rating}/10
        </span>
        <span id="production-year">{year}</span>
      </div>
      <div className="text-white text-sm line-clamp-6" id="synopsis">
        {synopsis}
      </div>
    </div>
  );
}

export default MovieCardInfo;
