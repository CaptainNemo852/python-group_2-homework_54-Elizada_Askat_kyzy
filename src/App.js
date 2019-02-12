import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from "./Task/Task";
import AddTaskForm from './AddTaskForm/AddTaskForm.js';

class App extends Component {
    state = {
        tasks :[
            {id:1, text: 'Уборка'},
            {id:2, text: 'Прогулка'},
            {id:3, text: 'Готовка'},
            {id:4, text: 'Читка'}
        ],
        currentTask: {text: ''},

    };



  addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        // const dat = new Date();
        // task.id = dat.getTime();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {text: ''}
        });
    };

  removeTask = (id) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    };

  changeTaskInput = (event) => {
        const text = event.target.text;
        let value = event.target.value;
        let currentTask = {
            ...this.state.currentTask,
            text: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };


  isAddButtonDisabled = () => {
       return this.state.currentTask.text === '';
    };


  render() {
    return (
            <div className="Do">
                <div>
                    <h2>Добавить</h2>
                    <AddTaskForm
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                        isAddButtonDisabled={this.isAddButtonDisabled()}
                    />
                </div>
                <div>

                  {this.state.tasks.map((task) => {
                      return <Task
                          key={task.id}
                          tasks={task.text}
                          onDelete={() => this.removeTask(task.id)}
                      />
                  })}

                </div>
            </div>
        );
  }
}

export default App;