import React from "react";

function Resume() {

  return (

    <section id="resume">

      <h2>My Resume</h2>

      <p>
        Download my resume to learn more about my skills,
        projects and experience.
      </p>

      <a
        href="/Pratiksha_Resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </section>

  );

}

export default Resume;