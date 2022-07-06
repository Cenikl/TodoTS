import React, {ChangeEvent, useState} from "react";
import {ITask} from "../interfaces/interface";

interface Props {
    task:ITask;
    completeTask(taskNameToDelete: string): void;
}

interface all {
    everything:Props;
}

const TodoList = ({task, completeTask}:Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.title}</span>
                <span>{task.desc}</span> <br/> <br/>
                <select name="" id="">
                    <option value="todoList">todo</option>
                    <option value="going">going</option>
                    <option value="finished">finished</option>
                </select>
            </div>
            <button onClick={() => {completeTask(task.title)}}>X</button>
        </div>
    )
}

export default TodoList;