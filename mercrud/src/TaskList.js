import React from 'react'



function TaskList(props) {
    const { displayForm, tasks, deleteTask, editTask } = props;
    let taskList = tasks.map((task, i) => {
        return <div id='taskDiv'className='outerTask' key={i}>
          <ul id={`${i}`} >{`${task.task}`}</ul>
          <span className='priority'>Priority: {task.taskPriority}</span>
          <button className='taskButton' onClick={(e) => editTask(i, e)}>Edit</button>
          <button className='taskButton2' onClick={() => deleteTask(i)}>Delete</button>
        </div>;
      })
    return (
      <div className='taskDiv'>
        <h1 className='title'>TASKS MANAGER</h1>
        <a href='./Modal.js' className='link' target='_self' onClick={displayForm}>{<h4>CREATE NEW TASK</h4>}</a> 
        <div className='list'>
           {taskList}
        </div>
      </div>
    )
}

export default TaskList;