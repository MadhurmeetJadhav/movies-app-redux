import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    ).catch((err) => {
      console.log("err", err);
    });
    dispatch(addMovies(response.data?.Search || []));
    //  console.log(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
