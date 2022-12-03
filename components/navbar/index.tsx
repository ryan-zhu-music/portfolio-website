import React from "react";
import Link from "next/link";
import { links } from "../../data/socials";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const { width }: any = useWindowDimensions();
  const scrollPosition: any = useScrollPosition();

  return (
    <nav
      className={
        "w-5/6 h-16 mt-5 fixed top-0 flex flex-row items-center justify-center rounded-full duration-1000 z-30 "
      }
    >
      <div
        className={
          "z-20 absolute h-16 rounded-full gradient-mauve duration-1000 transition-all ease-in-out " +
          (scrollPosition.y > 30 ? "opacity-100 w-2/3" : "opacity-0 w-5/6")
        }
      />
      <ul
        className={
          "z-30 px-7 md:px-10 lg:px-16 flex flex-row justify-evenly md:justify-between items-center transition-all duration-1000 ease-in-out " +
          (scrollPosition.y > 30 ? "w-2/3" : "w-5/6")
        }
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              key={link.name}
              href={link.link}
              className="text-2xl md:text-base lg:text-lg text-white font-elianto tracking-[0.15em] lg:tracking-[0.25em] uppercase duration-500 ease-in-out hover:drop-shadow-md hover:tracking-[0.4em]"
            >
              {width > 768 ? link.name : link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
