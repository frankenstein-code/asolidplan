import { Carousel } from "react-bootstrap";

export default function HeroCarousel() {
  return (
    <Carousel className="my-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lipsum.app/random/1200x500"
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
          src="https://lipsum.app/random/1200x500"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lipsum.app/random/1200x500"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
