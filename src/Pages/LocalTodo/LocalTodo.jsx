import React, {useEffect, useState} from "react";
import TodoAddForm from "../../components/TodoAddForm/TodoAddForm";
import TodoListColumns from "../../components/TodoListColumns/TodoListColumns";
import EditModal from "../../components/EditModal/EditModal";

const LocalTodo = () => {
    // all task state
    const [tasks, setTasks] = useState([
        {id: 1748595254568, title: 'task 1', description: 'this is desription', status: 'todo', createdAt: 'Fri May 30 2025 12:24:14 GMT+0330 (Iran Standard Time'},
        {id: 1748595254566, title: 'task 2', description: 'this is desription 2', status: 'inProgress', createdAt: 'Fri May 11 2024 12:20:13 GMT+0330 (Iran Standard Time'},
        {id: 1748511254566, title: 'task 3', description: 'this is desription 3', status: 'done', createdAt: 'Fri May 10 2025 12:20:14 GMT+0330 (Iran Standard Time'},
    ]);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // for edit modal
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [editModal, setEditModal] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    // Load tasks from localStorage
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!title.trim()) {
            alert("عنوان الزامی است");
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description: desc,
            status: "todo",
            createdAt: new Date()
        };

        setTasks([...tasks, newTask]);
        setTitle("");
        setDesc("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const editTask = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            setEditTaskId(id);
            setNewTitle(task.title);
            setNewDesc(task.description);
            setEditModal(true);
        }
    };

    const cancelEdit = () => {
        setEditModal(false);
        setEditTaskId(null);
        setNewTitle("");
        setNewDesc("");
    };

    const saveEdit = () => {
        setTasks(tasks.map(task =>
            task.id === editTaskId
                ? { ...task, title: newTitle, description: newDesc }
                : task
        ));
        cancelEdit();
    };

    const changeStatus = (id, status) => {
        setTasks(
            tasks.map((t) => (t.id === id ? { ...t, status } : t))
        );
    };

    return (
        <div className=" p-10 mx-auto">
            {/* Add task */}
            <TodoAddForm title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} addTask={addTask}/>

            <h1 className="text-2xl mb-4 text-center">Manage Tasks</h1>
            {/* show columns todo list */}
            <TodoListColumns tasks={tasks} changeStatus={changeStatus} deleteTask={deleteTask} editTask={editTask}/>

            {/* Edit Modal */}
            {editModal && (
                <EditModal closeEditeModal={cancelEdit} saveEditeModal={saveEdit}>
                    <form className="p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
                        <input
                            className="p-2 border rounded-lg"
                            type="text"
                            placeholder="Edit Title ..."
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <textarea
                            className="p-2 border rounded-lg resize-none h-24"
                            placeholder="Edit Description ..."
                            value={newDesc}
                            onChange={(e) => setNewDesc(e.target.value)}
                        />

                    </form>
                </EditModal>
            )}
        </div>
    );
};

export default LocalTodo;