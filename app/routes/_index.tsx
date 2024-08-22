import type { MetaFunction } from "@remix-run/node";
import Menu from "~/atomic/molecules/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "@jossysola" },
    { name: "description", content: "Personal homepage of Jossy Sola" },
  ];
};

export default function Index() {
  return (
      <Menu />
  );
}
