import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Music from "../components/music";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Zhu&apos;s Personal Site</title>
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
