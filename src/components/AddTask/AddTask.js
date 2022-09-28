import { useEffect, useState } from "react";
import "./AddTask.scss";

function AddTask(props) {
  const minDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState(minDate);
  const [valid, setValid] = useState("true");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDate = (e) => {
    setFinishDate(e.target.value);
  };

  const handleClick = () => {
    if (text !== "" && description !== "") {
      const add = props.add(text, description, finishDate, valid);
      if (add) {
        setText("");
        setDescription("");
        setFinishDate(minDate);
        setValid(true);
      }
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    document.querySelector(".todo__header-title").focus();
  }, []);

  return (
    <div className="todo__header">
      <h1>
        <i className="fa-solid fa-note-sticky"></i>TODO List
      </h1>
      <input
        type="text"
        className="todo__header-title"
        placeholder="Wpisz treść zadania..."
        value={text}
        onChange={handleText}
      />
      <textarea
        className="todo__header-details"
        rows="5"
        style={{ resize: "none" }}
        placeholder="Wpisz szczegóły zadania..."
        value={description}
        onChange={handleDescription}
      ></textarea>
      <label htmlFor="date" className="todo__header-date-info">
        Wprowadź datę zakończenia zadania:
      </label>
      <input
        type="date"
        className="todo__header-date"
        value={finishDate}
        min={minDate}
        onChange={handleDate}
      />
      <button className="todo__header-add-btn" onClick={handleClick}>
        Dodaj zadanie
      </button>
      {valid ? null : (
        <p className="todo__header-alert">Uzupełnij wszystkie pola</p>
      )}
    </div>
  );
}

export default AddTask;
