import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

const steps = [
  {
    title: "Concept / Pre-Design (PD)",
    description:
      "Understand client needs, site, and budget. Create initial concepts and cost estimates.",
  },
  {
    title: "Schematic Design (SD)",
    description:
      "Develop sketches and options, check regulations, set the design direction.",
  },
  {
    title: "Construction Drawings (CD)",
    description:
      "Produce detailed technical, electrical, and plumbing plans for construction.",
  },
  {
    title: "Design Development",
    description:
      "Select materials, finalize layouts, coordinate with consultants for quality.",
  },
  {
    title: "Construction Stage",
    description:
      "Visit site, monitor progress, resolve changes, and ensure quality.",
  },
  {
    title: "Interior Stage",
    description:
      "Design interior layouts, finishes, lighting, furniture, and accessories.",
  },
  {
    title: "Final Set-up",
    description: "Styling, accessorizing, and seamless handover to the client.",
  },
];

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <Container className="py-5 timeline-desktop-only">
      <Row>
        {/* Vertical Steps Column */}
        <Col md={4} className="timeline-structure">
          <div className="timeline-start-label">We meet</div>

          <div className="timeline-path">
            <div className="timeline-track"></div>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`timeline-node ${
                  selectedStep === index ? "current" : ""
                }`}
                onClick={() => setSelectedStep(index)}
              >
                <div
                  className={`timeline-marker ${
                    selectedStep === index ? "highlight" : ""
                  }`}
                ></div>
                <div className="timeline-step-text">{step.title}</div>
              </div>
            ))}
          </div>

          <div className="timeline-end-label">Your happy</div>
        </Col>

        {/* Description Box */}
        <Col md={8}>
          <div className="timeline-info-box">
            <p>{steps[selectedStep].description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
