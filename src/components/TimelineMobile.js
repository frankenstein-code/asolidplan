import { useState } from "react";
import "./TimelineMobile.css";

const sampleItems = [
  {
    time: "Stage 1",
    line1: "Concept / Pre-Design (PD)",
    line2:
      "Understand client needs, site, and budget. Create initial concepts and cost estimates.",
  },
  {
    time: "Stage 2",
    line1: "Schematic Design (SD)",
    line2:
      "Develop sketches and options, check regulations, set the design direction.",
  },
  {
    time: "Stage 3",
    line1: "Construction Drawings (CD)",
    line2:
      "Produce detailed technical, electrical, and plumbing plans for construction.",
  },
  {
    time: "Stage 4",
    line1: "Design Development",
    line2:
      "Select materials, finalize layouts, coordinate with consultants for quality.",
  },
  {
    time: "Stage 5",
    line1: "Construction Stage",
    line2: "Visit site, monitor progress, resolve changes, and ensure quality.",
  },
  {
    time: "Stage 6",
    line1: "Interior Stage",
    line2:
      "Design interior layouts, finishes, lighting, furniture, and accessories.",
  },
  {
    time: "Stage 7",
    line1: "Final Set-up",
    line2: "Styling, accessorizing, and seamless handover to the client.",
  },
];

export default function TimelineMobile({ items = sampleItems }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="timeline-mobile-wrap mobile-only">
      <div className="timeline-mobile">
        {/* Start label */}
        <div className="timeline-label left">We Meet</div>

        {/* Timeline line */}
        <div className="timeline-line" />

        {/* Points */}
        {items.map((item, i) => (
          <div
            key={i}
            className="timeline-point"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="dot" />
            <div className="time right">{item.line1}</div>

            {hoverIndex === i && (
              <div className="overlay right">
                <div className="overlay-inner">{item.line2}</div>
              </div>
            )}
          </div>
        ))}

        {/* End label */}
        <div className="timeline-label left">You're happy</div>
      </div>
    </div>
  );
}
