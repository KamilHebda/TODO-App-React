import React, { Component } from "react";
import DetailsList from "../src/components/DetailsList/DetailsList";
import AddTask from "../src/components/AddTask/AddTask";
import TaskList from "../src/components/TaskList/TaskList";
import EditTask from "./components/EditTask/EditTask";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import "./App.scss";

class App extends Component {
  counter = 2;

  tasks = [
    {
      id: 0,
      text: "Nauczyć się MobX",
      description: "Ogarniemy...",
      date: "2022-09-23",
      finishDate: "2022-10-15",
      active: true,
      edit: false,
      details: false,
    },
    {
      id: 1,
      text: "Nauczyć się TypeScript",
      description: "To też ogarniemy...",
      date: "2022-09-23",
      finishDate: "2022-11-15",
      active: true,
      edit: false,
      details: false,
    },
  ];

  state = {
    tasks: [],
    loading: true,
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
        task.details = false;
      }
    });
    this.setState({
      tasks,
    });
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

  closeDetails = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.details = false;
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, description, finishDate) => {
    const task = {
      id: this.counter,
      text: text,
      description: description,
      date: new Date().toISOString().slice(0, 10),
      finishDate: finishDate,
      active: true,
      edit: false,
      details: false,
    };

    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  editTask = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.edit = !task.edit;
        task.details = false;
      }
    });
    this.setState({
      tasks,
    });
  };

  setEditedTask = (id, text, description, finishDate) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.text = text;
          task.description = description;
          task.finishDate = finishDate;
          task.edit = false;
        }
        return task;
      }),
    });
  };

  closePopup = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.edit = false;
      }
    });
    this.setState({
      tasks,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ tasks: this.tasks, loading: false });
    }, 1000);
  }

  render() {
    const edit = this.state.tasks.filter((task) => task.edit);
    const editTask = edit.map((task) => (
      <EditTask
        key={task.id}
        task={task}
        closePopup={this.closePopup}
        edit={this.setEditedTask}
      ></EditTask>
    ));

    return (
      <div className="App">
        <DetailsList
          tasks={this.state.tasks}
          closeDetails={this.closeDetails}
        />
        <div className="todo">
          <AddTask add={this.addTask} />
          {this.state.loading ? (
            <LoadingIcon />
          ) : (
            <TaskList
              tasks={this.state.tasks}
              delete={this.deleteTask}
              complete={this.completeTask}
              edit={this.editTask}
              details={this.taskDetails}
            />
          )}
        </div>
        {editTask}
      </div>
    );
  }
}

export default App;
