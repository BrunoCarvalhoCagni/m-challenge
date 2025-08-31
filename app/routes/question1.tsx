import type { Route } from "./+types/home";
import { Answer1 } from "~/components/answer1/answer1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 1" },
    { name: "description", content: "Question 1" },
  ];
}

export default function Home() {
  return <Answer1/>;
}
