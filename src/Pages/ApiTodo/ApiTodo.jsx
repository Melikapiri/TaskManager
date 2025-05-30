import React, {useEffect, useState} from "react";
import Check from "../../Icons/Check";
import Xmark from "../../Icons/Xmark";

const ApiTodo = () => {
    const [allTodos, setAllTodos] = useState([])

    useEffect(() => {
        const getTodoApi = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()

            setAllTodos(data);
        }

        getTodoApi()

    }, [])

    useEffect(() => {
        console.log(allTodos)
    }, [allTodos])
    return (
        <div className="px-5 xs:px-10 md:px-32 lg:px-40 py-10 xs:py-20">


            <div className="relative overflow-x-auto shadow-md shadow-gray-200">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr className="border-b border-b-gray-200">
                        <th scope="col" className="px-6 py-3">
                            TODO ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TODO NAME
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TODO STATUS
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        allTodos.slice(0,8).map(todo=> (
                            <tr key={todo.id} className="bg-white border-b 0 border-gray-200">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {todo.id}
                                </th>
                                <td className="px-6 py-4">
                                    {todo.title}
                                </td>
                                <td className="px-6 py-4">
                                    {todo.completed?(<Check className="w-8 h-8 text-green-900"/>) : (<Xmark className="w-8 h-8 text-red-800"/>)}
                                </td>

                            </tr>
                        ))
                    }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ApiTodo;