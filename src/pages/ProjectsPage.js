import React, { useState } from "react";
import RowsPhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import mc1 from "../assets/projects/minimalist_cabin/1.jpeg";
import mc2 from "../assets/projects/minimalist_cabin/2.jpeg";
import mc3 from "../assets/projects/minimalist_cabin/3.jpeg";
import mc4 from "../assets/projects/minimalist_cabin/4.jpeg";
import mc5 from "../assets/projects/minimalist_cabin/5.jpeg";
import p1 from "../assets/projects/pomelo_farm/1.jpeg";
import p2 from "../assets/projects/pomelo_farm/2.jpeg";
import p3 from "../assets/projects/pomelo_farm/3.jpeg";
import p4 from "../assets/projects/pomelo_farm/4.jpeg";
import p5 from "../assets/projects/pomelo_farm/5.jpeg";
import p6 from "../assets/projects/pomelo_farm/6.jpeg";
import p7 from "../assets/projects/pomelo_farm/7.jpeg";
import p8 from "../assets/projects/pomelo_farm/8.jpeg";
import p9 from "../assets/projects/pomelo_farm/9.jpeg";
import p10 from "../assets/projects/pomelo_farm/10.jpeg";
import p11 from "../assets/projects/pomelo_farm/11.jpeg";
import p12 from "../assets/projects/pomelo_farm/12.jpeg";
import p13 from "../assets/projects/pomelo_farm/13.jpeg";

const projects = [
  {
    title: "Minimalist Cabin",
    images: [
      { src: mc1, width: 1200, height: 500 },
      { src: mc2, width: 1200, height: 500 },
      { src: mc3, width: 1200, height: 500 },
      { src: mc4, width: 1200, height: 500 },
      { src: mc5, width: 1200, height: 500 },
    ],
  },
  {
    title: "Pomelo Farms",
    images: [
      { src: p1, width: 1200, height: 500 },
      { src: p2, width: 1200, height: 500 },
      { src: p3, width: 1200, height: 500 },
      { src: p4, width: 1200, height: 500 },
      { src: p5, width: 1200, height: 500 },
      { src: p6, width: 1200, height: 500 },
      { src: p7, width: 1200, height: 500 },
      { src: p8, width: 1200, height: 500 },
      { src: p9, width: 1200, height: 500 },
      { src: p10, width: 1200, height: 500 },
      { src: p11, width: 1200, height: 500 },
      { src: p12, width: 1200, height: 500 },
      { src: p13, width: 1200, height: 500 },
    ],
  },
];

export default function ProjectsPage() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);

  const openLightbox = (images, idx) => {
    setSlides(images);
    setIndex(idx);
  };

  return (
    <div className="container my-5 py-5">
      <h1 className="mb-4 text-center">Our Projects</h1>

      {projects.map((project, pIndex) => (
        <div key={pIndex} className="mb-5">
          <h2 className="mb-3">{project.title}</h2>
          <RowsPhotoAlbum
            layout="rows"
            photos={project.images}
            targetRowHeight={200}
            padding={4}
            sizes={{
              size: "calc(100vw - 40px)",
              sizes: [
                { viewport: "(max-width: 600px)", size: "100vw" },
                { viewport: "(max-width: 1200px)", size: "50vw" },
                { size: "33vw" },
              ],
            }}
            onClick={({ index }) => openLightbox(project.images, index)}
          />
        </div>
      ))}

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}
