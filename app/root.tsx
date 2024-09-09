import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import Profile from "./atomic/atoms/profile";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLanguage, getData } from "./hooks/custom";
import { DataContext } from "./hooks/context";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  return getData();
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const lang = useLanguage();
  
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*Facebook Meta Tags*/}
        <meta property="og:url" content="https://www.jossysola.com/banner.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Jossy Sola Homepage"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/c4e75356-f99a-44e2-9354-54947c0dcc80.png?token=TNTl6sY1pCb6UOzKyUhwgFhPxABkEb2bsnbo6Id5bPk&height=675&width=1200&expires=33261691874"/>

        {/*Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="jossysola.com"/>
        <meta property="twitter:url" content="https://www.jossysola.com/banner.png"/>
        <meta name="twitter:title" content="Jossy Sola Homepage"/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/c4e75356-f99a-44e2-9354-54947c0dcc80.png?token=TNTl6sY1pCb6UOzKyUhwgFhPxABkEb2bsnbo6Id5bPk&height=675&width=1200&expires=33261691874"/>
        {/*Meta Tags Generated via https://www.opengraph.xyz*/}
        <Meta />
        <Links />
      </head>
      <body className="
        flex
        flex-col
        h-screen
        min-w-[320px]
        p-0
        items-center 
        justify-center
        font-[GeistReg]
        bg-[#FAFAFF]">

        <main className="md:flex md:justify-center md:items-center md:gap-20 max-h-full w-full p-6">
          <Profile location={data.location[lang]} description={data.description[lang]} />

          <DataContext.Provider value={data}>
            {children}
          </DataContext.Provider>
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}