import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("question1","routes/question1.tsx"),
    route("question2","routes/question2.tsx")

] satisfies RouteConfig;

