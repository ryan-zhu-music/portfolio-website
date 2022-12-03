import React, { useState } from "react";
import { BsMouse } from "react-icons/bs";
import { projects } from "../../data/projects";
import Project from "./project";
import Modal from "./modal";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className="relative w-full flex flex-col items-center justify-center py-16 px-10 md:px-20 lg:px-32">
      <h2 className="text-white tracking-[0.5em] drop-shadow-lg font-elianto uppercase text-2xl md:text-3xl lg:text-5xl pt-5">
        Projects
      </h2>
      <div className="font-montserrat text-sm md:text-base lg:text-lg text-mauve mt-3 flex flex-row flex-nowrap justify-center items-center">
        <p>Click to learn more!</p>
        <BsMouse className="ml-1" />
      </div>
      <div
        className={`w-full h-64 my-10 px-5 py-8 bg-transparent overflow-x-scroll flex flex-row flex-nowrap z-20`}
      >
        {projects.map((project, index) => (
          <Project
            project={project}
            setOpen={setShowModal}
            setProject={setSelectedProject}
            key={index}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          project={selectedProject}
          setOpen={setShowModal}
          projects={projects}
          setProject={setSelectedProject}
        />
      )}
    </main>
  );
}
