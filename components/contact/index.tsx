import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="w-screen py-32 grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-48 z-0">
      <div className="flex flex-col items-start justify-start h-full">
        <h2 className="text-2xl md:text-3xl lg:text-5xl drop-shadow-lg text-white text-center uppercase tracking-[0.3em]">
          Contact
        </h2>
        <p className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-5 font-normal pr-8">
          Want to get in touch? Fill out the form, and I&apos;ll get back to
          you!
        </p>
        <p className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal">
          Feel free to contact me about anything!
        </p>
        <div className="w-full flex flex-col justify-start items-start">
          <a
            href="mailto:rz.ryanzhu@gmail.com"
            className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-3 font-normal"
          >
            <FaEnvelope className="inline-block mr-4" />
            rz.ryanzhu@gmail.com
          </a>
          <div className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal">
            <FaPhoneAlt className="inline-block mr-4" />
            (437) 776-1039
          </div>
        </div>
      </div>
      <form className="gradient-mauve w-full h-full p-5 mt-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10  placeholder:text-mauve-light text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
          required
        />
        <textarea
          placeholder="Message"
          className="w-full h-32 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
          required
        />
        <button
          type="submit"
          className="w-1/3 h-12 px-5 mb-5 bg-white opacity-70 hover:opacity-100 duration-500 ease-in-out text-mauve-darker font-bold font-montserrat tracking-[0.05em] text-base md:text-lg"
        >
          Send
        </button>
      </form>
    </main>
  );
}
