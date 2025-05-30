import LocalTodo from "./Pages/LocalTodo/LocalTodo";
import ApiTodo from "./Pages/ApiTodo/ApiTodo";

export let RoutesElm = [
    {path: "/", element: <LocalTodo/>},
    {path: "/local-todos", element: <LocalTodo/>},
    {path: "/api-todos", element: <ApiTodo/>},
]