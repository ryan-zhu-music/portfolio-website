import React from "react";

export default function Project({ project, setOpen }: any) {
  return (
    <button
      className={
        "h-full gradient-mauve shadow-xl mx-2 px-10 flex flex-col justify-center items-start pt-6 hover:scale-105 duration-500 ease-in-out " +
        project.image
      }
      onClick={() => setOpen(true)}
    >
      <h2 className="font-elianto tracking-[0.3em] uppercase text-base md:text-lg lg:text-xl whitespace-nowrap text-white">
        {project.title}
      </h2>
      <p className="font-montserrat text-sm md:text-base lg:text-lg text-white font-normal">
        {project.type}
      </p>
    </button>
  );
}
