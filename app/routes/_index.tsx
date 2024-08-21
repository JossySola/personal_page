import type { MetaFunction } from "@remix-run/node";
import Profile from "~/atomic/atoms/profile";
import Menu from "~/atomic/molecules/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "@jossysola" },
    { name: "description", content: "Personal homepage of Jossy Sola" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="flex p-0 flex-col gap-10 items-center">
        <Profile />
        <Menu />
      </main>
    </>
  );
}
