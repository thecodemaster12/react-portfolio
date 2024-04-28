import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#222] py-20 flex flex-col justify-center items-center">
        <h1 className="font-montsrrat text-4xl uppercase py-8 text-white">Projects</h1>
        <div className="w-4/5 m-auto flex gap-6 justify-center items-center flex-wrap">
        <ProjectCard 
        imgPath='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Project Title'
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis beatae nobis sunt magnam unde dolor veniam commodi laboriosam consequatur quia eius tempora officia perspiciatis et distinctio, quam temporibus error possimus!'
        projectUrl='https://unsplash.com/photos/a-view-of-the-empire-building-in-new-york-city-XeKh2jlvLtc'
        />
        
        <ProjectCard 
        imgPath='https://images.unsplash.com/photo-1714151676782-3d37e0847c25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Project Title'
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis beatae nobis sunt magnam unde dolor veniam commodi laboriosam consequatur quia eius tempora officia perspiciatis et distinctio, quam temporibus error possimus!'
        projectUrl='https://unsplash.com/photos/a-view-of-the-empire-building-in-new-york-city-XeKh2jlvLtc'
        />
        <ProjectCard 
        imgPath='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Project Title'
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis beatae nobis sunt magnam unde dolor veniam commodi laboriosam consequatur quia eius tempora officia perspiciatis et distinctio, quam temporibus error possimus!'
        projectUrl='https://unsplash.com/photos/a-view-of-the-empire-building-in-new-york-city-XeKh2jlvLtc'
        />
        
        <ProjectCard 
        imgPath='https://images.unsplash.com/photo-1714151676782-3d37e0847c25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Project Title'
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis beatae nobis sunt magnam unde dolor veniam commodi laboriosam consequatur quia eius tempora officia perspiciatis et distinctio, quam temporibus error possimus!'
        projectUrl='https://unsplash.com/photos/a-view-of-the-empire-building-in-new-york-city-XeKh2jlvLtc'
        />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
