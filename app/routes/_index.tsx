import type { MetaFunction } from "@remix-run/node";
import Jossy from "~/atomic/atoms/jossysola";
import Mosaic from "~/atomic/molecules/mosaic";

export const meta: MetaFunction = () => {
  return [
    { title: "@jossysola" },
    { name: "description", content: "Personal homepage of Jossy Sola" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="font-serif p-0">
        <Mosaic />
      </main>
    </>
  );
}
