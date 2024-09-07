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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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