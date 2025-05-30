import React from "react";

const TodoListColumns = ({tasks,changeStatus,deleteTask,editTask}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["todo", "inProgress", "done"].map((status) => (
                <div key={status} className="flex-1 p-4  h-[fit-content]  rounded-xl">
                    <h2 className={`font-bold text-white rounded-xl  ${status === "todo" && `bg-purple-500 shadow-md shadow-purple-300`} ${status === "done" && `bg-teal-500 shadow-md shadow-teal-300`} ${status === "inProgress" && `bg-blue-500 shadow-md shadow-blue-300`} text-center py-3.5 `}>
                        {status === "todo"
                            ? "To Do"
                            : status === "inProgress"
                                ? "In Progress"
                                : "Done"}
                    </h2>
                    {tasks.filter((t) => t.status === status).map((task) => (
                        <div key={task.id}
                             className="bg-white my-4   rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-4">
                            <h3 className="flex items-center gap-2 font-semibold">
                                Title: <p className="text-gray-600 break-words">{task.title}</p>
                            </h3>

                            <div
                                className="flex flex-col gap-2 font-semibold my-3 p-3 border rounded-lg text-sm text-gray-700 mb-2">
                                <span>Description:</span>
                                <p className="font-medium break-words">{task.description}</p>
                            </div>

                            <small className="text-sm text-red-950">
                                {new Date(task.createdAt).toLocaleString("fa-IR")}
                            </small>

                            <div className="flex justify-between items-center text-sm mt-6 flex-wrap gap-2">
                                {/* change status */}
                                {status !== "todo" && (
                                    <button
                                        onClick={() => changeStatus(task.id, "todo")}
                                        className="border border-blue-500 rounded-lg px-2 py-1.5 text-blue-500"
                                    >
                                        To Do
                                    </button>
                                )}
                                {status !== "inProgress" && (
                                    <button
                                        onClick={() => changeStatus(task.id, "inProgress")}
                                        className="text-yellow-600 border border-yellow-600 px-2 py-1.5 rounded-lg"
                                    >
                                        In Progress
                                    </button>
                                )}
                                {status !== "done" && (
                                    <button
                                        onClick={() => changeStatus(task.id, "done")}
                                        className="text-green-600 border border-gray-600 px-2 py-1.5 rounded-lg"
                                    >
                                        Done
                                    </button>
                                )}

                                {/* delete */}
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-red-600 border border-red-600 px-2 py-1.5 rounded-lg"
                                >
                                    Delete
                                </button>

                                {/* edit */}
                                <button
                                    onClick={() => editTask(task.id)}
                                    className="text-teal-600 border border-teal-600 px-2 py-1.5 rounded-lg"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    );
};

export default TodoListColumns;