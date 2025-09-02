import type { Route } from "./+types/home";
import { Answer6 } from "~/components/answer6/answer6";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 6" },
    { name: "description", content: "Question 6" },
  ];
}

export default function Home() {
  return <Answer6/>;
}
