import React from "react";

export default function Modal({ project, setOpen }: any) {
  return (
    <button
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setOpen(false)}
    >
      <div className="w-5/6 h-5/6 gradient-mauve rounded-xl flex flex-row">
        <div className="w-2/5 h-full flex flex-col justify-center items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 h-full flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-elianto tracking-[0.3em] uppercase">
            {project.title}
          </h2>
          <h3 className="font-montserrat italic font-bold text-sm text-mauve">
            October 2022 -
          </h3>
          <p className="font-montserrat text-sm md:text-base lg:text-lg text-mauve font-normal">
            {project.tech_stack.join("•")}
          </p>
          {project.description.map(
            (paragraph: string, index: number) =>
              paragraph && (
                <p
                  key={index}
                  className="font-montserrat text-sm md:text-base lg:text-lg text-white font-normal"
                >
                  {paragraph}
                </p>
              )
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-base md:text-lg gradient-mauve px-7 py-4 rounded-full font-semibold hover:shadow-sm hover:scale-105 duration-500 ease-in-out"
          >
            {project.prototype ? "Prototype" : "Visit"}
          </a>
        </div>
      </div>
    </button>
  );
}
