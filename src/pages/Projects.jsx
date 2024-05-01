import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[92vh] bg-[#272829] text-white py-20 flex flex-col justify-center items-center">
        <h1 className="font-heading text-4xl uppercase py-8">My Projects</h1>
        {/* <div className="flex gap-5 p-10 justify-center flex-wrap"> */}
        <div className="p-6 grid justify-center grid-cols-1 gap-10 md:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProjectCard 
          imgPath='/project3.png'
          title='Ramadan Calender'
          description='This user-friendly Ramadan calendar keeps you informed throughout the holy month.'
          projectUrl='https://ramadanbd.netlify.app/'
          />
        <ProjectCard 
        imgPath='/project1.png'
        title='Mortgage Calculator'
        description='This interactive tool helps you estimate mortgage costs and plan your homeownership journey.'
        projectUrl='https://mortgage-cal.netlify.app/'
        />
        <ProjectCard 
        imgPath='/project2.png'
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
