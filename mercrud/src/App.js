import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';
import TaskList from './TaskList';
import './index.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'MerQBiz',
      tasks: [],
      toggle: false,
      dummieKey: '',
      selectKey: 'Low',
      isEdit: 'false',
      editIndex: 'null'
    }
  }


  windowFunc = (e) => {
    window.addEventListener('click', () => {
      const modal = document.getElementById('idmodal');
      if(e.target !== modal){
        this.setState({
          toggle: !this.state.toggle
        })
      }
    })
    this.windowFunc()
  }


  onChange = e => {
    this.setState({
      dummieKey: e.target.value,
    })
  }

  selectOnChange = e => {
    this.setState({
      selectKey: e.target.value,
    })
  }

  addTask = (e, i) => {
    e.preventDefault();
    if(this.state.isEdit && this.state.editIndex >= 0){
      let tasks = [...this.state.tasks];
      tasks[this.state.editIndex].task = this.state.dummieKey
      const editVal2 = document.getElementById(`${i}`);
      this.setState({
        toggle: !this.state.toggle,
        tasks: tasks,
        dummieKey: '',
        isEdit: !this.state.isEdit


      })
    } 
    else{
      this.setState({
        tasks: [...this.state.tasks, 
          {
            task: this.state.dummieKey,
            taskPriority: this.state.selectKey
        }],
        selectKey: this.state.selectKey,
        dummieKey: '',
        toggle: !this.state.toggle
      });
    }
  }


  displayForm = (e) => {
    e.preventDefault()
    this.setState({
      toggle: !this.state.toggle,
      isEdit: !this.state.isEdit
    })
  }

 

  editTask = i => {
    this.setState({
      toggle: !this.state.toggle,
      isEdit: !this.state.isEdit,
      editIndex: i
    })
  }


  deleteTask = (i) => {
    console.log(i)
   const tasks = this.state.tasks;
  //  tasks.splice(i, 1)
  const filtered = tasks.filter((task, index) => index !== i)
   this.setState({
     tasks: filtered
   })
  }


  render(){
   return (
     <>
       {!this.state.toggle ? 
        <TaskList tasks={this.state.tasks} editTask={this.editTask} deleteTask={this.deleteTask} displayForm={this.displayForm}/>
       : 
       <div>
          <TaskList tasks={this.state.tasks} editTask={this.editTask} deleteTask={this.deleteTask} displayForm={this.displayForm}/>
          <Modal addTask={this.addTask} tasks={this.state.tasks} editTask={this.editTask} isEdit={this.state.isEdit} displayFunc={this.displayForm} value={this.state.dummieKey} taskNum={this.state.tasks.length} selectOnChange={this.selectOnChange} priority={this.state.selectKey} onChange={this.onChange}/>
        </div>
         }
     </>
   );
  }
}
export default App;
