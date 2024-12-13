import { useEffect, useState } from "react";
import movieService from "../api/movieService.js";
import MovieCard from "../components/MovieCard.jsx";
import Header from "../components/Header.jsx";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await movieService.getMovies();

    setMovies(results);
  }

  async function getMoviesSearch(movieName) {
    const {
      data: { results },
    } = await movieService.getMoviesSearch(movieName);
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  // depois do retorno do html nada pode acontecer
  return (
    <div>
      <Header getMoviesSearch={getMoviesSearch} getMovies={getMovies} />
      <Container className="pt-5 pb-5">
        <Row className="gap-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
