import { Container } from "react-bootstrap";
import HeroCarousel from "../components/HeroCarousel";
import ImageTextSection from "../components/ImageTextSection";
import MultiCardCarousel from "../components/MultiCardCarousel";
import OurServices from "../components/OurServices";
import Timeline from "../components/Timeline";
import TimelineMobile from "../components/TimelineMobile";

export default function LandingPage() {
  return (
    <>
      <HeroCarousel />
      <Container className="my-3">
        <p className="text-center">architectural design for</p>
        <h2 className="text-center">your desired elevated lifestyle</h2>
      </Container>

      {/* Our Work */}
      <MultiCardCarousel />

      <OurServices />

      {/* Your Journey */}
      <Timeline />
      <TimelineMobile />

      <ImageTextSection />
    </>
  );
}
