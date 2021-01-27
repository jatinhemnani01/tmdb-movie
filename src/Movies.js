import React from "react";
import Navbar from "./components/Navbar";
import useMovie from "./hooks/useMovie";
import Card from "./components/Card";
import "./Movies.css";
const Movies = () => {
  const { data, isLoading } = useMovie();
  return (
    <div>
      <Navbar />
      {isLoading && "Loading..."}
      <div className="card-container">
        {data.map((movie) => {
          return (
            <Card
              overview={movie.overview}
              img_url={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              release_date={movie.release_date}
              title={movie.title}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
