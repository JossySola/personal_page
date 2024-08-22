import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import Profile from "./atomic/molecules/profile";
import getUserLocale from "get-user-locale";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useEffect, useState } from "react";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const response = await fetch("https://raw.githubusercontent.com/JossySola/personal_page/main/app/data/data.json");
  return response.json()
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const [lang, setLang] = useState("es");
  const userLocale = getUserLocale();
  
  useEffect(() => {
    setLang(userLocale);
  }, []);
  
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
      h-[100vh]
      p-0
      gap-10 
      items-center 
      justify-center
      bg-[#FAFAFF] 
      md:flex-row 
      md:gap-20">
        <Profile location={data.location[lang]} description={data.description[lang]} />

        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}