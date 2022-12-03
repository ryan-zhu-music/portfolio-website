import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Learn more about contemporary musician and full-stack developer Ryan Zhu, and browse through Ryan's collection of music compositions and projects."
        />
        <meta
          name="viewport"
          content="width=device-width, 
                   initial-scale=1.0"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Ryan Zhu" />
        <meta name="robots" content="index, nofollow" />
        <meta name="copyright" content="2022 Ryan Zhu" />
        <link rel="canonical" href="https://ryanzhu.com" />

        <meta property="og:url" content="https://ryanzhu.com" />
        <meta property="og:site_name" content="Ryan Zhu" />
        <meta
          property="og:title"
          content="Contemporary musician and Full-Stack Developer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn more about contemporary musician and full-stack developer Ryan Zhu, and browse through Ryan's collection of music compositions and projects."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/assets/img/og-image.png" />
        <meta property="og:image:alt" content="Ryan Zhu" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ryanzhumusic" />
        <meta name="twitter:creator" content="@ryanzhumusic" />
        <meta
          name="twitter:title"
          content="Contemporary musician and Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Learn more about contemporary musician and full-stack developer Ryan Zhu, and browse through Ryan's collection of music compositions and projects."
        />
        <meta
          name="twitter:image"
          content="https://ryanzhu.com/assets/icons/og.png"
        />

        <meta name="theme-color" content="#9989DB" />
        <meta name="msapplication-navbutton-color" content="#9989DB" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#9989DB" />
        <meta name="msapplication-TileColor" content="#9989DB" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/icons/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/icons/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/icons/apple-touch-icon-ipad-retina-152x152.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
          type="image/png"
        />
        <link
          rel="mask-icon"
          href="/assets/icons/safari-pinned-tab.svg"
          color="#6B6689"
        />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
