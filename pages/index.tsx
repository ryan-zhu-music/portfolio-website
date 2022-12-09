import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Head from "next/head";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Music = dynamic(() => import("../components/music"), {
  suspense: true,
});

const Projects = dynamic(() => import("../components/projects"), {
  suspense: true,
});

const Contact = dynamic(() => import("../components/contact"), {
  suspense: true,
});

const Footer = dynamic(() => import("../components/footer"), {
  suspense: true,
});

const Fallback = (
  <div className="w-screen py-20 flex items-center justify-center">
    <p className="text-2xl text-mauve font-elianto uppercase drop-shadow-lg tracking-[0.3em]">
      Loading...
    </p>
  </div>
);
export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Zhu&apos;s Personal Site</title>
      </Head>
      <main className="bg-[url('/assets/img/background.webp')] bg-cover bg-top flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <About />
        <Suspense fallback={Fallback}>
          <Music />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
