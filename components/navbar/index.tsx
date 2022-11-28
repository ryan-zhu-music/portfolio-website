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
        "w-5/6 md:w-1/2 lg:w-5/6 h-16 mt-5 fixed top-0 flex flex-row items-center justify-center rounded-full duration-1000 z-20 "
      }
    >
      <div
        className={
          "z-10 absolute h-16 rounded-full gradient-mauve duration-1000 transition-all ease-in-out " +
          (scrollPosition.y > 30 ? "opacity-100 w-5/6" : "opacity-0 w-full")
        }
      />
      <ul
        className={
          "z-20 px-10 flex flex-row justify-between items-center transition-all duration-1000 ease-in-out " +
          (scrollPosition.y > 30 ? "w-5/6" : "w-full")
        }
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              key={link.name}
              href={link.link}
              className="text-2xl lg:text-sm xl:text-lg text-white mx-7 font-elianto tracking-[0.3em] uppercase"
            >
              {width > 1024 ? link.name : link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
