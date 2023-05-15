import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./styles/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <title>Tutor AI — your personalised smart tutor. 🎓</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <meta name="description" content="AI-powered learning app." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tutorai-pooja.vercel.app" />
        <meta
          property="og:title"
          content="Tutor AI — your personalised smart tutor. 🎓"
        />
        <meta property="og:description" content="AI-powered learning app." />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="og header" />
        <meta
          property="og:image"
          content="https://tutorai-pooja.vercel.app/og.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://tutorai-pooja.vercel.app/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="og header" />
        <meta
          name="twitter:image"
          content="https://tutorai-pooja.vercel.app/og.png"
        />

        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
