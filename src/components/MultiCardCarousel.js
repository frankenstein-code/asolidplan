import { useState } from "react";
import { Carousel, Card, Row, Col, Button, Container } from "react-bootstrap";
import bagilu from "../assets/cardCarousel/bagilu.jpg";
import gataway_cabin from "../assets/cardCarousel/gataway_cabin.jpeg";
import office_ext from "../assets/cardCarousel/office_ext.jpeg";
import padel_india from "../assets/cardCarousel/padel_india.jpg";
import polemo_farm from "../assets/cardCarousel/polemo_farm.jpeg";
import royal_Apartment from "../assets/cardCarousel/royal_Apartment.jpeg";
import { Link } from "react-router-dom";

import "./MultiCardCarousel.css";

const cardData = [
  { img: bagilu, title: "Bagilu Project" },
  { img: gataway_cabin, title: "Gateway Cabin" },
  { img: office_ext, title: "Office Exterior" },
  { img: padel_india, title: "Padel India" },
  { img: polemo_farm, title: "Polemo Farm" },
  { img: royal_Apartment, title: "Royal Apartment" },
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
    <div className="text-center my-5">
      <Container className="d-flex justify-content-between my-3">
        <h1>Our Work</h1>
        <Button
          variant="outline-secondary"
          size="lg"
          className="me-3"
          as={Link}
          to="/projects"
        >
          View All Projects
        </Button>
      </Container>
      <Carousel
        controls={false}
        indicators={false}
        activeIndex={index}
        onSelect={setIndex}
        interval={6000}
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
