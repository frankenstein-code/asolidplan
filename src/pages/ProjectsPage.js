import React, { useState } from "react";
import RowsPhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import { projectData } from "../assets/projects/ProjectsData";

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
      {projectData.map((project, pIndex) => (
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
