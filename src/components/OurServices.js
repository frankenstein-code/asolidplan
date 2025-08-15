import { Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Space Planning",
    desc: "Comprehensive planning that addresses all architectural requirements—circulation, zoning, and optimal space utilization—tailored to your lifestyle and functional needs.",
  },
  {
    title: "Design Consultation",
    desc: "Full-scope design support or assistance with selected project stages. We guide you through concept development, detailed drawings, material selection, and coordination.",
  },
  {
    title: "Project Management",
    desc: "End-to-end coordination of vendors, timelines, and budgets—ensuring seamless execution and alignment with your vision.",
  },
  {
    title: "Turnkey Solutions",
    desc: "From concept to completion, we deliver fully finished spaces through our established network of skilled contractors, artisans, and suppliers.",
  },
  {
    title: "Renovations, Extensions & Upgrades",
    desc: "Specialized expertise in transforming existing spaces—whether through structural upgrades, extensions, or detailed interior enhancements. This niche work demands the experience and precision our team provides.",
  },
  {
    title: "3D Visualisations",
    desc: "Realistic visualizations for new builds or renovations, available subject to project scope and conditions.",
  },
];

export default function OurServices() {
  return (
    <div
      style={{ backgroundColor: "#EEEEEE", padding: "50px 0" }}
      className="w-100"
    >
      <div className="px-4">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="g-3">
          {services.map((service, idx) => (
            <Col md={4} sm={6} xs={12} key={idx}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
