import { Container, Card } from "react-bootstrap";

export function About() {
  return (
    <Container className="mt-5 " style={{ backgroundColor: "white" }}>
      <Card bg="light" text="dark" className="rounded p-4">
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            At our Music Gear Store, we're passionate about providing musicians
            with the best gear to fuel their creativity and enhance their
            performances.
          </Card.Text>
          <Card.Text>
            Our store was founded by a team of experienced musicians who
            understand the importance of quality gear in achieving musical
            excellence.
          </Card.Text>
          <Card.Text>
            Whether you're a beginner exploring your musical journey or a
            seasoned professional seeking to expand your sound palette, we're
            here to support you every step of the way.
          </Card.Text>
          <Card.Text>
            Thank you for choosing our Music Gear Store. We look forward to
            helping you find the perfect gear to unlock your musical potential!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
