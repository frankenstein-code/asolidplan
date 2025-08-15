import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function ImageTextSection() {
  return (
    <Container className="my-5 px-5">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <Image src="https://lipsum.app/random/600x700" alt="Vertical" fluid />
        </Col>

        {/* Right Side - Text + Buttons */}
        <Col md={7}>
          <h2 className="fw-bold">About My Work</h2>
          <p className="text-muted">
            I specialize in building modern, responsive, and scalable web
            applications. My focus is on delivering high-quality user
            experiences through clean code and creative design. Whether it’s
            frontend with React or backend with Node.js, I ensure every detail
            is fine-tuned.
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <Button variant="outline-primary" size="lg" className="me-3">
              View Projects
            </Button>
            <Button variant="outline-secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
