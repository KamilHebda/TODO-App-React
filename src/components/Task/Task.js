import "./Task.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={() => props.edit(id)} className="tools__edit">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={() => props.details(id)} className="tools__details">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={() => props.delete(id)} className="tools__delete">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </li>
  );
}
export default Task;
