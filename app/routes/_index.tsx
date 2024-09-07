import type { MetaFunction } from "@remix-run/node";
import Menu from "~/atomic/molecules/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "@jossysola" },
    { name: "description", content: "Jossy Sola Homepage. Art, Neurodivergent, Frontend development" },
  ];
};

export default function Index() {
  return (
      <Menu />
  );
}
