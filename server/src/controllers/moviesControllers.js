const axios = require("axios");

exports.getMovies = async (req, res) => {
  try {
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json`);
    res.send(response.data.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// get by: genre
// sort_by: title, year, rating, like_count
// order_by: desc, asc
// query_term: string=>title,actor name, movie imdb code, actor imdb code,director name/code

exports.getMovie = async (req, res) => {
  try {
    const response = await axios.get(
      `https://yts.unblocked4u.org/api/v2/movie_details.json?imdb_id=${req.params.id}&with_cast=true`
    );
    res.send(response.data.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
