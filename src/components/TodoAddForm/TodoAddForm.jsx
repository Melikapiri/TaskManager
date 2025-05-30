import React from "react";

const TodoAddForm = ({title,setTitle,desc,setDesc,addTask}) => {
    return (
        <div className="mb-6 max-w-[28rem] shadow-md shadow-sky-100 mx-auto p-4 border rounded-lg bg-sky-100">
            <h3 className="font-bold text-sky-950 mb-2 ">Add New Task</h3>
            <input
                className={`${
                    title.trim().length > 0 && title.trim().length < 3
                        ? "border border-red-600"
                        : "border border-sky-700/60"
                } p-2 w-full mb-2 rounded-xl outline-0`}
                placeholder="Enter Title ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {title.trim().length > 0 && title.trim().length < 3 && (
                <p className="text-red-600 text-sm mb-2">Title must be at least 3 characters</p>
            )}

            <textarea
                className={`resize-none h-24 p-2 w-full mb-2 rounded-xl outline-0 ${
                    desc.trim().length > 0 && desc.trim().length < 5
                        ? "border border-red-600"
                        : "border border-sky-700/60"
                }`}
                placeholder="Enter Description ..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            {desc.trim().length > 0 && desc.trim().length < 5 && (
                <p className="text-red-600 text-sm mb-2">Description must be at least 5 characters</p>
            )}

            <button
                onClick={addTask}
                disabled={title.trim().length < 3 || desc.trim().length < 5}
                className={`block mx-auto px-4 py-2 rounded-lg ${
                    title.trim().length >= 3 && desc.trim().length >= 5
                        ? "bg-sky-800 text-cyan-50 cursor-pointer"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
            >
                Add Task
            </button>
        </div>

    );
};

export default TodoAddForm;