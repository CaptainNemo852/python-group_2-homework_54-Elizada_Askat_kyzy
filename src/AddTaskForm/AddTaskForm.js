import React from 'react';


function AddTaskForm(props) {
    return <form>
        <input type="text" name="text" value={props.text} onChange={props.onChangeInput}/>
        <button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTaskForm}>Добавить</button>
    </form>
}


export default AddTaskForm;