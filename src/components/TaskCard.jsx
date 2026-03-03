import React from "react";
 import "./TaskCard.css";
const TaskCard=(props)=> {
    return(
        <div className="task-card">
            <h2>{props.title}</h2>
        <p>Due:{props.dueDate}</p>
        <p>{props.description}</p>
        <p>Priority:{props.priority}</p></div>
    );};

    export default TaskCard;
   