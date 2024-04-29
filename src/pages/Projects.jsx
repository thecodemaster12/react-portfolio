import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[92vh] bg-[#272829] text-white py-20 flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl uppercase py-8">Project section</h1>

      </div>
      <Footer />
    </>
  );
};

export default Projects;
