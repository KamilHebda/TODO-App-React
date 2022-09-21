import Task from "../Task/Task";

import "./TaskList.scss";

function TaskList(props) {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      complete={props.complete}
      edit={props.edit}
      details={props.details}
    ></Task>
  ));
  return (
    <div className="todo-list">
      <h3>Lista zadań:</h3>
      <p className="todo-list alert-info">Brak zadań na liście.</p>
      <ul className="todo-list--list">{tasks}</ul>
    </div>
  );
}
export default TaskList;
