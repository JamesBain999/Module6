import AddMovieForm from "./MovieAdd";
import Movie from "./Movie";
import { useState } from "react";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don't mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <button onClick={handleReverseMovies}>Reverse List</button>
    </div>
  );
}

export default MoviesList;
