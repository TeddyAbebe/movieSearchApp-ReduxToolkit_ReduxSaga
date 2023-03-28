import React from "react";
import MoviesList from "../Components/MoviesList";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <MoviesList />
    </div>
  );
};

export default Home;
