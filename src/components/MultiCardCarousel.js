import { useState } from "react";
import { Carousel, Card, Row, Col, Button, Container } from "react-bootstrap";
import "./CardCarousel.css";

const cardData = [
  { img: "https://picsum.photos/300/200?random=1", title: "Card 1" },
  { img: "https://picsum.photos/300/200?random=2", title: "Card 2" },
  { img: "https://picsum.photos/300/200?random=3", title: "Card 3" },
  { img: "https://picsum.photos/300/200?random=4", title: "Card 4" },
  { img: "https://picsum.photos/300/200?random=5", title: "Card 5" },
  { img: "https://picsum.photos/300/200?random=6", title: "Card 6" },
];

// Utility to split data into chunks
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function MultiCardCarousel() {
  const [index, setIndex] = useState(0);

  // Detect screen size to decide chunk size
  const isMobile = window.innerWidth < 768;
  const slides = chunkArray(cardData, isMobile ? 1 : 3);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="text-center my-4">
      <Container className="d-flex justify-content-between my-3">
        <h1>Our Work</h1>
        <Button variant="outline-dark">View All Projects</Button>{" "}
      </Container>
      <Carousel
        controls={false}
        indicators={false}
        activeIndex={index}
        onSelect={setIndex}
        interval={3000}
        pause="hover"
      >
        {slides.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((item, k) => (
                <Col md={4} sm={6} xs={12} key={k}>
                  <Card className="card-hover border-0 text-center">
                    <div className="img-wrapper">
                      <Card.Img variant="top" src={item.img} alt={item.title} />
                    </div>
                    <Card.Body className="p-2">
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Arrows below carousel */}
      <div className="mt-3 d-flex justify-content-center gap-3">
        <Button variant="outline-dark" onClick={prev}>
          ‹
        </Button>
        <Button variant="outline-dark" onClick={next}>
          ›
        </Button>
      </div>
    </div>
  );
}
