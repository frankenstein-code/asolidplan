import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

const steps = [
  {
    title: "Concept / Pre-Design (PD)",
    description:
      "We begin by understanding your vision, budget, and site constraints. Through surveys and initial concepts, we create a design brief that sets the foundation for the project.",
  },
  {
    title: "Schematic Design (SD)",
    description:
      "Rough sketches, space planning, and initial 3D concepts take shape. We coordinate with structural consultants and ensure local compliance requirements are considered.",
  },
  {
    title: "Construction Drawings (CD)",
    description:
      "Detailed technical drawings are prepared with electrical, plumbing, and lighting layouts. Bills of quantities and tender documents help streamline contractor selection.",
  },
  {
    title: "Design Development",
    description:
      "We refine materials, structural details, and provide updated plans and 3D visuals. Continuous consultant coordination ensures design and technical accuracy.",
  },
  {
    title: "Construction Stage",
    description:
      "On-site execution begins. We oversee quality, budget, and schedule through regular site visits and meetings, ensuring alignment with the design intent.",
  },
  {
    title: "Interior Stage",
    description:
      "We develop mood boards, finishes, lighting, and furniture layouts. Site supervision ensures interiors are functional, cohesive, and aligned with the project goals.",
  },
  {
    title: "Final Set-up",
    description:
      "Accessories, styling, and finishing touches are completed. We hand over a fully polished space that reflects your vision and is ready for living.",
  },
];

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <Container className="timeline-container my-5 timeline-desktop-only">
      {/* Heading */}
      <Row>
        <Col md={12}>
          <h2 className="text-center py-5">Designing Together, Step by Step</h2>
        </Col>
      </Row>
      <Row>
        {/* Steps Column */}
        <Col md={4} className="timeline-structure">
          <div className="timeline-label start">We Meet</div>

          <div className="timeline-path">
            <div className="timeline-track"></div>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`timeline-node ${
                  selectedStep === index ? "current" : ""
                }`}
                onClick={() => setSelectedStep(index)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === "Enter" && setSelectedStep(index)}
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

          <div className="timeline-label end">You’re Happy</div>
        </Col>

        {/* Description Box */}
        <Col md={8}>
          <div className="timeline-info-box shadow-sm">
            <h5 className="timeline-title">{steps[selectedStep].title}</h5>
            <p className="timeline-description">
              {steps[selectedStep].description}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
