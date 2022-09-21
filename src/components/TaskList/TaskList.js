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
      <ul className="todo-list--list">
        {tasks.length > 0 ? (
          tasks
        ) : (
          <p className="todo-list alert-info">Brak zadań na liście.</p>
        )}
      </ul>
    </div>
  );
}
export default TaskList;
