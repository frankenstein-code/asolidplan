import { useState } from "react";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";

const services = [
  {
    title: "Renovations",
    desc: "USP: Open-mindedness and agile problem-solving to address the unique challenges of renovation work. We maintain strong communication throughout, ensuring clients and teams stay aligned every step of the way.",
    detailedDesc:
      "Comprehensive renovation and upgrade services, including interior remodels, structural alterations, and modernization of existing spaces. From initial assessment to completion, we handle feasibility, cost analysis, documentation, contractor liaison, and finishing details. Recommendations focus on future-proofing and sustainability.",
  },
  {
    title: "Design Consultation",
    desc: "We offer complete or phase-specific design consultations—whether at the concept stage, during design development, or for construction advice.",
    detailedDesc:
      "Expert guidance on space planning, aesthetics, finishes, materials, and compliance. Our consultations clarify your vision, resolve challenges, and help you make informed decisions at every stage.",
  },
  {
    title: "Space Planning",
    desc: "We help you make the most of your space by optimizing floor area, improving circulation, and thoughtfully organizing furniture and built-ins.",
    detailedDesc:
      "Our knowledge in renovations ensures your plans are not only beautiful, but also functional for today and adaptable for tomorrow. Detailed spatial layouts, zoning diagrams, furniture plans, and practical solutions, all tailored to your lifestyle and future needs.",
  },
  {
    title: "Project Management",
    desc: "Full project oversight—from procurement and coordination of consultants/contractors to quality checks and budget monitoring—ensuring smooth, timely, and transparent delivery.",
    detailedDesc:
      "Single point of contact for communication, schedule control, vendor/consultant management, site supervision, reporting, and issue resolution.",
  },
  {
    title: "Turnkey Solutions",
    desc: "Delivering end-to-end project solutions—covering design, execution, and handover—ideal for clients seeking a hassle-free experience.",
    detailedDesc:
      "Comprehensive service covering concept to completion, including project planning, execution, sourcing, installation, and handover of a fully functional, move-in-ready space.",
  },
  {
    title: "Architectural photography",
    desc: "This service blends artistic vision with technical expertise to produce compelling images that showcase the features, materials, and spatial qualities of architectural projects.",
    detailedDesc:
      "Essential for architects, designers, builders, and property owners to document, promote, and market their spaces. The service typically includes both exterior and interior photography, emphasizing composition, lighting, and perspective to accurately represent the architecture. High-quality architectural photographs are used in portfolios, marketing materials, publications, and award submissions, helping clients communicate their design intent and attract potential customers or stakeholders.",
  },
];

export default function OurServices() {
  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

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
              <Card
                className="h-100 shadow-sm border-0"
                onClick={() => handleShow(service)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedService?.detailedDesc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
