import type { Route } from "./+types/home";
import { Answer3 } from "~/components/answer3/answer3";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 3" },
    { name: "description", content: "Question 3" },
  ];
}

export default function Home() {
  return <Answer3/>;
}
