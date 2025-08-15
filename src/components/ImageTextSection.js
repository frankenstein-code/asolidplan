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
            Every great space begins with a story—yours. Our process starts by
            listening closely to understand how you live, work, and dream. From
            the very first sketch to the final detail, every choice is
            thoughtfully shaped around your lifestyle, priorities, and vision.
            Our goal is to create more than just a design; we craft spaces that
            feel unmistakably yours. Spaces that work beautifully, function
            seamlessly, and stand the test of time. You will be guided through
            every step of the journey with clear communication, thoughtful
            decision-making, and access to a trusted network of experts. We
            address challenges before they arise and explore opportunities to
            maximize your site, budget, and aspirations. This is a true
            collaboration—where you actively shape a space that not only
            reflects who you are today but also grows with you in the years to
            come. At a solid plan, we believe that all good design stems from a
            solid plan, a passion for craft, and a curiosity for unique
            experiences. Our work provokes thought, pushes limits, and creates
            spaces that evoke emotion and connect deeply with their environment
            and beyond. This philosophy forms the foundation of everything we
            create.
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <Button variant="outline-secondary" size="lg" className="me-3">
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
