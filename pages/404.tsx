//custom 404 page
import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar";

export default function Custom404() {
  return (
    <div className="bg-[url('/assets/img/background.png')] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center w-screen h-screen">
      <Navbar />
      <h1 className="pl-3 text-6xl text-center font-elianto text-white tracking-[0.3em] drop-shadow-xl">
        404
      </h1>
      <h2 className="mb-10 text-2xl text-center font-montserrat text-mauve font-normal tracking-wider">
        Hmm...seems like this page doesn't exist.
      </h2>
      <Link
        href="/"
        className="text-white font-elianto uppercase tracking-[0.3em] hover:tracking-[0.4em] text-base md:text-lg gradient-mauve px-7 py-4 rounded-full font-semibold hover:shadow-sm hover:scale-[102%] duration-500 ease-in-out"
      >
        Home?
      </Link>
    </div>
  );
}
