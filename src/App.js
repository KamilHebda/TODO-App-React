import React, { Component } from "react";
import Details from "../src/components/Details/Details";
import AddTask from "../src/components/AddTask/AddTask";
import TaskList from "../src/components/TaskList/TaskList";

import "./App.scss";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Nauczyć się React",
        description: "Ogarnąć hooki i MobX",
        Date: null,
        finishDate: "2022-09-30",
        active: true,
        edit: false,
        details: false,
      },
      {
        id: 1,
        text: "Nauczyć się TypeScript",
        description: "Masakra",
        Date: null,
        finishDate: "2022-12-31",
        active: true,
        edit: false,
        details: false,
      },
      {
        id: 2,
        text: "Nadal się uczyć",
        description: "...",
        Date: null,
        finishDate: "2023-12-31",
        active: true,
        edit: false,
        details: false,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };

  completeTask = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = !task.active;
      }
    });
    this.setState({
      tasks,
    });
  };

  editTask = (id) => {
    console.log("edytuj w APP" + id);
  };

  taskDetails = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.details = !task.details;
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <Details tasks={this.state.tasks} />
        <div className="todo">
          <AddTask />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            complete={this.completeTask}
            edit={this.editTask}
            details={this.taskDetails}
          />
        </div>
      </div>
    );
  }
}

export default App;
