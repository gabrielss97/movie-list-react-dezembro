/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router";
import { useParams } from "react-router";
import movieService from "../api/movieService";

export default function MovieDetail() {
  let { id } = useParams();

  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await movieService.getMovieDetail(id);

    console.log(data)
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container>
      <h1>Movie Detail</h1>

      <Col>
        <Row>
          <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
        </Row>
        <Row>
          <Col>
            <Row>
              <h2>{movie.title}</h2>
            </Row>
            <Row>
              <h4>Budget</h4>
              <p>{movie.budget}</p>
            </Row>
            <Row>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
            </Row>
          </Col>
        </Row>
      </Col>

      <Link to={"/"}>
        <Button>back to home</Button>
      </Link>
    </Container>
  );
}
