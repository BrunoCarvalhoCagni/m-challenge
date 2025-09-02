import type { Route } from "./+types/home";
import { Answer7 } from "~/components/answer7/answer7";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Question 7" },
    { name: "description", content: "Question 7" },
  ];
}

export default function Home() {
  return <Answer7/>;
}
