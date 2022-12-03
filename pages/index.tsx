import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Music from "../components/music";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Zhu</title>
        <meta name="description" content="Ryan Zhu's personal website" />
        <meta
          name="viewport"
          content="width=device-width, 
                   initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[url('/assets/img/background.png')] bg-cover bg-top flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <About />
        <Music />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
