import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20 flex flex-col justify-center items-center">
        <h1 className="font-montsrrat text-4xl uppercase py-8">Projects</h1>

      </div>
    </>
  );
};

export default Projects;
