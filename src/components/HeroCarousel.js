import { Carousel } from "react-bootstrap";
import hero1 from "../assets/hero/hero1.jpeg";
import hero2 from "../assets/hero/hero2.jpeg";
import hero3 from "../assets/hero/hero3.jpeg";
import "./HeroCarousel.css"; // add custom CSS
export default function HeroCarousel() {
  return (
    <Carousel className="my-5 py-3">
      <Carousel.Item>
        <img className="d-block w-100 hero-img" src={hero1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src={hero2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 hero-img" src={hero3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
