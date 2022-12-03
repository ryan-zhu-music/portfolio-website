import React from "react";

export default function Project({ project, setOpen, setProject }: any) {
  return (
    <button
      className="relative group h-full mx-2 px-10 flex flex-col justify-center items-start pt-6 hover:scale-[103%] duration-500 ease-in-out shadow-sm hover:shadow-md"
      onClick={() => {
        setOpen(true);
        setProject(project);
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden "
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        <div className="top-0 left-0 w-full h-full bg-black group-hover:bg-slate-400/10 duration-500 ease-in-out opacity-40 shadow-[0_0_80px_0_rgb(0,0,0)_inset]" />
      </div>
      <div className="z-10 group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,1)] duration-500 ease-in-out">
        <h2 className="font-elianto tracking-[0.3em] uppercase text-base md:text-lg lg:text-xl whitespace-nowrap text-white">
          {project.title}
        </h2>
        <p className="font-montserrat text-sm md:text-base lg:text-lg text-white font-normal">
          {project.type}
        </p>
      </div>
    </button>
  );
}
