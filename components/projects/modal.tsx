import React from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import Image from "next/image";

export default function Modal({ project, setOpen, projects, setProject }: any) {
  const handleClick = (direction: number) => {
    const projectIndex = projects.findIndex(
      (p: any) => p.title === project.title
    );
    setProject(
      projects[(projects.length + projectIndex + direction) % projects.length]
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm`}
    >
      <button
        className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => setOpen(false)}
      />
      <div
        className={`w-3/5 h-[70%] mt-16 flex gradient-mauve rounded-xl flex-col md:flex-row items-center justify-evenly cursor-default`}
      >
        <div className="w-full md:w-2/5 h-1/5 md:h-full">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-[101%] object-cover rounded-l-xl"
            width={1024}
            height={1024}
          />
        </div>
        <div className="w-full md:w-3/5 h-4/5 md:h-full flex flex-col justify-between items-start pl-5 pr-14 py-5 md:py-9">
          <h2 className="text-white text-xl md:text-xl lg:text-3xl font-elianto tracking-[0.3em] uppercase">
            {project.title}
          </h2>
          <h3 className="font-montserrat italic font-bold text-xs md:text-sm text-mauve">
            October 2022 -
          </h3>
          <p className="font-montserrat text-xs md:text-sm lg:text-base text-mauve font-normal">
            {project.tech_stack.join(" • ")}
          </p>
          <div className="overflow-y-scroll h-1/2 border-t-[1px] border-b-[1px] py-2 my-1 border-mauve">
            {project.description.map(
              (paragraph: string, index: number) =>
                paragraph && (
                  <p
                    key={index}
                    className="w-full pr-5 font-montserrat text-xs md:text-sm lg:text-base text-white font-normal text-start mb-3"
                  >
                    {paragraph}
                  </p>
                )
            )}
          </div>
          <div className="w-full flex flex-row flex-nowrap justify-between items-center mt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="justify-self-end text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-xs md:text-sm ring-white ring-1 px-6 py-2 rounded-full font-semibold hover:shadow-sm duration-300 ease-in-out cursor-pointer"
            >
              {project.prototype ? "Prototype" : "Visit"}
            </a>
            <button onClick={() => handleClick(-1)} className="h-full">
              <AiOutlineCaretLeft className="text-white text-4xl" />
            </button>
            <button onClick={() => handleClick(1)} className="h-full">
              <AiOutlineCaretRight className="text-white text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
