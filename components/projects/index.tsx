import React, { useState } from "react";
import { projects } from "../../data/projects";
import Project from "./project";
import Modal from "./modal";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="relative w-full flex flex-col items-center justify-center py-32">
      <h1 className="text-white tracking-[0.5em] drop-shadow-xl font-elianto uppercase text-xl md:text-2xl lg:text-4xl pt-5">
        Projects
      </h1>
      <div
        className={`w-full h-44 my-10 overflow-x-scroll flex flex-row flex-nowrap`}
      >
        {projects.map((project) => (
          <>
            <Project project={project} setOpen={setShowModal} />
            {showModal && <Modal project={project} setOpen={setShowModal} />}
          </>
        ))}
      </div>
    </main>
  );
}
