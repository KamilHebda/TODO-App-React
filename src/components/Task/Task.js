import "./Task.scss";

function Task(props) {
  const { text, id, active } = props.task;
  return (
    <li>
      <p
        style={{
          fontSize: active ? "" : "15px",
          fontStyle: active ? "" : "italic",
          textDecoration: active ? "" : "line-through",
        }}
      >
        {text}
      </p>
      <div className="tools">
        <button
          onClick={() => props.complete(id)}
          className="tools__complete"
          style={{ color: active ? "rgb(0, 132, 255)" : "gray" }}
        >
          <i className="fas fa-check"></i>
        </button>
        <button onClick={() => props.edit(id)} className="tools__edit">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => props.details(id)} className="tools__details">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button onClick={() => props.delete(id)} className="tools__delete">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
}
export default Task;
