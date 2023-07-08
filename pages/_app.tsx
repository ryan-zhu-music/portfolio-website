import React from "react";
import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <ParallaxProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, 
                   initial-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
