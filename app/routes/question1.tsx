import type { Route } from "./+types/home";
import { Answer1 } from "~/components/answer1/answer1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bruno's Technical test" },
    { name: "description", content: "Select the question you want the answer for" },
  ];
}

export default function Home() {
  return <Answer1/>;
}
