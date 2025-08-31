import type { Route } from "./+types/home";
import { Answer2 } from "~/components/answer2/answer2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 2" },
    { name: "description", content: "Question 2" },
  ];
}

export default function Home() {
  return <Answer2/>;
}
