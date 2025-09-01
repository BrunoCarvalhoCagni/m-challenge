import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("question1","routes/question1.tsx"),
    route("question2","routes/question2.tsx"),
    route("question3","routes/question3.tsx"),
    route("question4","routes/question4.tsx"),
    route("question5","routes/question5.tsx")

] satisfies RouteConfig;

