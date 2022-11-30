import React, { useState } from "react";
import { BsFillMouseFill } from "react-icons/bs";
import { projects } from "../../data/projects";
import Project from "./project";
import Modal from "./modal";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className="relative w-full flex flex-col items-center justify-center py-32">
      <h1 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-xl md:text-2xl lg:text-4xl pt-5">
        Projects
      </h1>
      <div className="font-montserrat text-sm md:text-base lg:text-lg text-mauve flex flex-row flex-nowrap justify-center items-center">
        <p>Click to learn more!</p>
        <BsFillMouseFill className="ml-1" />
      </div>
      <div
        className={`w-full h-48 my-10 py-3 bg-transparent overflow-x-scroll flex flex-row flex-nowrap`}
      >
        {projects.map((project) => (
          <Project
            project={project}
            setOpen={setShowModal}
            setProject={setSelectedProject}
          />
        ))}
      </div>
      {showModal && <Modal project={selectedProject} setOpen={setShowModal} />}
    </main>
  );
}
