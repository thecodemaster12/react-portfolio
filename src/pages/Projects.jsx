import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[92vh] bg-[#272829] text-white py-20 flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl uppercase py-8">My Projects</h1>
        {/* <div className="flex gap-5 p-10 justify-center flex-wrap"> */}
        <div className="p-6 grid grid-cols-1 gap-10 md:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProjectCard 
          imgPath={project3}
          title='Ramadan Calender'
          description='This user-friendly Ramadan calendar keeps you informed throughout the holy month.'
          projectUrl='https://ramadanbd.netlify.app/'
          />
        <ProjectCard 
        imgPath={project1}
        title='Mortgage Calculator'
        description='This interactive tool helps you estimate mortgage costs and plan your homeownership journey.'
        projectUrl='https://mortgage-cal.netlify.app/'
        />
        <ProjectCard 
        imgPath={project2}
        title='Rick & Morty Wiki'
        description='This comprehensive wiki catalogs every character from the wacky animated series.'
        projectUrl='https://rick-and-morty-wikis.netlify.app/'
        />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
