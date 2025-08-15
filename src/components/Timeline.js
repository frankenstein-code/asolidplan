import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

const steps = [
  {
    title: "Concept / Pre-Design (PD)",
    description:
      "This initial phase focuses on understanding the client’s needs, including the project scope, features, budget, and site constraints. We conduct a thorough site survey and analyze potential challenges and opportunities. Based on this information, we prepare a design brief that aligns with the client’s vision. Conceptual designs are then created referencing the requirements, along with a rough cost estimate based on area. This stage sets the foundation for the entire project and ensures all parties share a clear understanding of goals before moving forward.",
  },
  {
    title: "Schematic Design (SD)",
    description:
      "During schematic design, we develop a series of rough sketches and drawings that capture the basic concepts of the design. This phase includes space planning with schematic plans and addressing unbuilt areas. Initial research on local compliance and regulations is completed to ensure feasibility. Detailed design drawings such as plans, sections, elevations, and 3D models are prepared. Coordination with structural consultants happens at this point to integrate structural drawings. The goal is to shape the overall design direction and provide a visual understanding of the proposed space.",
  },
  {
    title: "Construction Drawings (CD)",
    description:
      "In this phase, we prepare comprehensive technical drawings, including electrical, plumbing, and lighting layouts in coordination with relevant consultants. Working drawings are issued alongside site work to avoid rework caused by design changes due to site conditions or new information. A Construction Manager oversees daily work to ensure quality and compliance with contract documents. We also prepare initial bills of quantities and tender documents to help clients select suitable contractors. Close coordination with other consultants and site supervision ensures the project progresses smoothly according to plans.",
  },
  {
    title: "Design Development",
    description:
      "Design development focuses on refining and finalizing the architectural plans. We specify materials, window and door placements, and general structural details. This phase overlaps with the construction stage, supporting ongoing work with updated plans and 3D visualizations as needed. Coordination with consultants continues to ensure all technical and design requirements are met. The aim is to solidify design choices and ensure all elements are well-integrated before and during construction.",
  },
  {
    title: "Construction Stage",
    description:
      "The construction stage is when the design intent is brought to life on-site. Regular site visits are conducted to monitor progress, clarify decisions, and ensure work aligns with drawings and specifications. Any design changes are discussed with the client to maintain alignment with their vision. We attend meetings and site conferences to manage quality, timing, and budgets. By maintaining close oversight and communication, we help navigate challenges and keep the project moving toward successful completion.",
  },
  {
    title: "Interior Stage",
    description:
      "This phase encompasses the detailed design and coordination of all interior elements. We prepare concept drawings, material palettes, mood boards, and detailed working drawings for finishes, furniture, lighting, and accessories. Coordination with specialists such as HVAC and kitchen consultants is essential. We manage site supervision to ensure specifications are followed, approve contractor shop drawings, and offer 3D visualizations if needed. The goal is to create a cohesive, functional, and beautiful interior space tailored to the project's requirements.",
  },
  {
    title: "Final Set-up",
    description:
      "The final set-up phase involves the purchase and installation of accessories and the finishing touches that bring the project to completion. This includes styling, organizing, and arranging all elements as intended to create a polished and inviting atmosphere. We oversee the handover process, ensuring everything is in place and meets the expected quality standards. This stage marks the successful conclusion of the project and the delivery of a space ready for use and enjoyment.",
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
