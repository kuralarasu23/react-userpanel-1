import React, { useState, useEffect } from "react";
// import "./App.css";

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [timeInput, setTimeInput] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!taskInput || !dateInput || !timeInput) {
            alert("Please fill in all fields!");
            return;
        }

        const newTask = { description: taskInput, date: dateInput, time: timeInput };
        setTasks([...tasks, newTask]);
        setTaskInput("");
        setDateInput("");
        setTimeInput("");
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">

            <div className="add-task">
                <h1>Add Task</h1>
                <label>TASK:</label>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a new task"
                />
                <label>DATE:</label>
                <input
                    type="date"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                />
                <label>TIME:</label>
                <input
                    type="time"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
                <h1>To-Do List</h1>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task.description} - {task.date} {task.time}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Task;