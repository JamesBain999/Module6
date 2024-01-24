function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const movieItems = movies.map(movie => (<li style={{color: "red"}}>{movie.title}</li>))

  return (
    <div className="MoviesList componentBox">
      <ul> { movieItems} </ul>
    </div>
  );
}

export default MoviesList;
