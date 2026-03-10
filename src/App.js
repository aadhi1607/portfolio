import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/Embedded_project"; // Project details page
import Skills from "./pages/Skills/Skills";
import WorkExp from "./pages/WorkExp/WorkExp";
import ProjectDetails1 from "./pages/Projects/Social_media";
import ProjectDetails2 from "./pages/Projects/Electrical_project";

function App() {
  return (
    <Router>
      <Layout /> {/* Keep the layout outside Routes to ensure consistency */}
      <Routes>
        {/* Main Portfolio Page */}
        <Route path="/" element={<div className="container"><About /><Skills /><Education /><Projects /><WorkExp /><Contact /></div>} />
        
        {/* Project Details Page */}
        <Route path="/project-details" element={<div className="container"><ProjectDetails /></div>} />
        <Route path="/project-details1" element={<div className="container"><ProjectDetails1 /></div>} />
        <Route path="/project-details2" element={<div className="container"><ProjectDetails2 /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
