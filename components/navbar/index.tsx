import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../../data/socials";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const { width }: any = useWindowDimensions();
  const scrollPosition: any = useScrollPosition();
  const router = useRouter();

  return (
    <nav
      className={
        "w-5/6 h-16 mt-5 fixed top-0 flex flex-row items-center justify-center rounded-full duration-1000 z-30 "
      }
    >
      <div
        className={
          "z-20 absolute h-16 rounded-full gradient-mauve duration-1000 transition-all ease-in-out " +
          (scrollPosition.y > 30
            ? "opacity-100 w-4/5 md:w-[70%]"
            : "opacity-0 w-full md:w-5/6")
        }
      />
      <ul
        className={
          "z-30 grid grid-cols-3 md:gap-3 transition-all duration-1000 ease-in-out " +
          (scrollPosition.y > 30 ? "w-[70%]" : "w-5/6")
        }
      >
        {links.map((link) => (
          <li key={link.name} className="flex items-center justify-center">
            <Link
              key={link.name}
              href={link.link}
              className={
                "text-2xl md:text-base lg:text-lg font-elianto tracking-[0.15em] lg:tracking-[0.25em] uppercase duration-500 ease-in-out hover:drop-shadow-md hover:text-white hover:tracking-[0.4em] " +
                (router.pathname === link.link
                  ? "text-white"
                  : "text-mauve-light")
              }
            >
              {width > 768 ? link.name : link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
