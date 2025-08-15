import { Carousel } from "react-bootstrap";

export default function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lipsum.app/random/1200x600"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Welcome to My Portfolio</h3>
          <p>Modern, Responsive, and Creative Web Development</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lipsum.app/random/1200x600"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lipsum.app/random/1200x600"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
