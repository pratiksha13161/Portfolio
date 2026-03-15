import React from "react";
import { projects } from "../data";

function Projects() {

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="grid">

        {projects.map((project, index) => (

          <div key={index} className="card">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;