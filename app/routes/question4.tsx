import type { Route } from "./+types/home";
import { Answer4 } from "~/components/answer4/answer4";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 4" },
    { name: "description", content: "Question 4" },
  ];
}

export default function Home() {
  return <Answer4/>;
}
