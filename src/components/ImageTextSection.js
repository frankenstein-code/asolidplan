import { Container, Row, Col, Button, Image } from "react-bootstrap";
import aboutus from "../assets/aboutus/aboutus.jpeg";
import { Link } from "react-router-dom";

export default function ImageTextSection() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <Image
            src={aboutus}
            alt="Vertical"
            fluid
            className="img-fluid"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </Col>

        {/* Right Side - Text + Buttons */}
        <Col md={7}>
          <h2 className="fw-bold">About My Work</h2>
          <p className="text-muted">
            We are dedicated to honest, thoughtful architecture that fosters
            meaningful connections through design that is both simple and
            provocative—challenging conventions and pushing boundaries. Design
            is not a luxury for the elite; it is for anyone open to mindful and
            creative use of space, budget, and ideas.
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <Button
              variant="outline-secondary"
              size="lg"
              className="me-3"
              as={Link}
              to="/projects"
            >
              View Projects
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              href="https://wa.me/7259318886"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
