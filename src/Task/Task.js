import React from 'react';


function Task(props) {
    return <div>
        {props.tasks}
        <button onClick={props.onDelete}>Delete</button>
    </div>
}


export default Task