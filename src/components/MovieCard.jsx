/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

export default function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }} key={movie.id}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link to={`/movie/${movie.id}`}>
        <Button variant="primary">ver detalhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
