import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
