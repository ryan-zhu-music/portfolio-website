import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
