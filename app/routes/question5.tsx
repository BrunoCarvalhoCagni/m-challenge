import type { Route } from "./+types/home";
import { Answer5 } from "~/components/answer5/answer5";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 5" },
    { name: "description", content: "Question 5" },
  ];
}

export default function Home() {
  return <Answer5/>;
}
