/* eslint-disable react/prop-types */
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function Header({ getMoviesSearch, getMovies }) {
  return (
    <Navbar className="bg-body-tertiary justify-content-between p">
      <Container>
        <h1>Movie List</h1>
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search movie"
                className=" mr-sm-2"
                onChange={(e) => {
                  const searchTerm = e.target.value;

                  if (searchTerm) {
                    getMoviesSearch(searchTerm);
                  } else {
                    getMovies();
                  }
                }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}
