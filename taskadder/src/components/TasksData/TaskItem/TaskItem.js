import React from "react";
import './TaskItem.css';

const TaskItem = (props) => {

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
      };
    
      return (
        <li className="goal-item" onClick={deleteHandler}>
          {props.children}
        </li>
      );

}

export default TaskItem