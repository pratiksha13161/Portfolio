import React, { Suspense, lazy } from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Lazy loading components
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Skills = lazy(() => import("./Components/Skills"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {

  return (

    <div className="App">

      {/* Navigation */}
      <Navbar />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<h2 style={{textAlign:"center"}}>Loading...</h2>}>

        <About />

        <Projects />

        <Skills />

        <Resume />

        <Contact />

      </Suspense>

      {/* Footer */}
      <Footer />

    </div>

  );

}

export default App;