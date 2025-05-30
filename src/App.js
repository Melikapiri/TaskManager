import React, { useEffect, useState } from "react";
import EditModal from "./components/EditModal/EditModal";
import TodoAddForm from "./components/TodoAddForm/TodoAddForm";
import TodoListColumns from "./components/TodoListColumns/TodoListColumns";
import LocalTodo from "./Pages/LocalTodo/LocalTodo";
import {useRoutes} from "react-router-dom";
import {Link} from "react-router-dom";
import {RoutesElm} from "./routes";
export default function App() {
    const route = useRoutes(RoutesElm)
    return (
        <div className="font-vazir">

            <div className="bg-sky-900 flex items-center justify-center p-4 gap-4 ">
                <Link to="/local-todos" className="px-2 py-1.5 text-white border border-white rounded-lg"> Todo Local </Link>
                <Link to="/api-todos" className="px-2 py-1.5 text-white border border-white rounded-lg">Todo Api</Link>
            </div>
            {route}
        </div>
    );
}
