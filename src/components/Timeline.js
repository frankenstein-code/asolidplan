import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

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

export default function Timeline({ items = sampleItems }) {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    // space points evenly along the path (avoid very ends)
    const positions = items.map((_, i) => {
      const t = (i + 1) / (items.length + 1);
      const p = path.getPointAtLength(t * length);
      return { x: p.x, y: p.y };
    });
    setPoints(positions);
  }, [items]);

  return (
    <div className="wavy-wrap my-5 desktop-only" ref={wrapRef}>
      <h1>Your Journey</h1>
      <svg
        className="wavy-svg my-5"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* wave path */}
        <path
          ref={pathRef}
          d="M 20 100
       C 200 20, 400 180, 600 100
       S 1000 20, 1180 100"
          className="wavy-path"
        />

        {/* Start text */}
        <text x="20" y="60" fill="black" fontSize="16" fontWeight="bold">
          We Meet
        </text>

        {/* End text */}
        <text
          x="1180"
          y="60"
          fill="black"
          fontSize="16"
          fontWeight="bold"
          textAnchor="end"
        >
          You're happy
        </text>
      </svg>

      {/* points + labels + overlays */}
      {points.map((p, i) => (
        <div
          key={i}
          className="wavy-point my-5"
          style={{
            left: `${(p.x / 1200) * 100}%`,
            top: `${(p.y / 200) * 100}%`,
          }}
          tabIndex={0}
          aria-label={`${items[i].time}: ${items[i].line1}. ${items[i].line2}.`}
        >
          <div className="dot" />
          <div className="time">{items[i].line1}</div>

          <div className="overlay">
            <div className="overlay-inner">
              <div className="o-line">{items[i].line2}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
