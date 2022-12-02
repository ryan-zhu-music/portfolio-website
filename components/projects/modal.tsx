import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Modal({ project, setOpen }: any) {
  const { width, height } = useWindowDimensions();
  console.log(height);
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"`}
    >
      <button
        className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-0"
        onClick={() => setOpen(false)}
      />
      <div
        className={`w-3/5 h-[70%] mt-16 gradient-mauve rounded-xl flex flex-col md:flex-row cursor-default z-10`}
      >
        <div className="w-full md:w-2/5 h-1/4 md:h-full flex flex-col justify-center items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/5 h-4/5 md:h-full flex flex-col justify-center items-start pl-5 pr-14 py-5 md:py-8">
          <h2 className="text-white text-xl md:text-xl lg:text-3xl font-elianto tracking-[0.3em] uppercase">
            {project.title}
          </h2>
          <h3 className="font-montserrat italic font-bold text-xs md:text-sm text-mauve my-2">
            October 2022 -
          </h3>
          <p className="font-montserrat text-xs md:text-sm lg:text-base text-mauve font-normal my-2">
            {project.tech_stack.join(" • ")}
          </p>
          <div className="overflow-y-scroll border-t-[1px] border-b-[1px] py-2 my-1 border-mauve">
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
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="justify-self-end text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-xs md:text-sm ring-white ring-1 px-6 py-2 my-3 rounded-full font-semibold hover:shadow-sm duration-300 ease-in-out cursor-pointer"
          >
            {project.prototype ? "Prototype" : "Visit"}
          </a>
        </div>
      </div>
    </div>
  );
}
