import { useState, useEffect, useRef } from "react";
import "./EditTask.scss";

function EditTask(props) {
  const minDate = new Date().toISOString().slice(0, 10);

  const [id, setId] = useState(props.task.id);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState(minDate);
  const [valid, setValid] = useState(true);

  const inputRef = useRef(null);

  const handleEditedText = (e) => {
    setText(e.target.value);
  };

  const handleEditedDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleEditedDate = (e) => {
    setFinishDate(e.target.value);
  };

  const handleClickEdit = () => {
    if (text !== "" && description !== "") {
      const editTask = props.edit(id, text, description, finishDate, valid);
      if (editTask) {
        setId(id);
        setText("");
        setDescription("");
        setFinishDate(minDate);
        setValid(true);
      }
    } else {
      setValid(false);
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="popup-shadow">
      <div className="popup">
        <h3>Edytuj zadanie:</h3>
        <div className="popup__body">
          {valid ? null : (
            <p className="todo__header-alert">Uzupełnij wszystkie pola!</p>
          )}
          <input
            ref={inputRef}
            type="text"
            className="popup__body-input"
            placeholder={props.task.text}
            value={text}
            onChange={handleEditedText}
          />
          <textarea
            className="popup__body-details"
            rows="5"
            style={{ resize: "none" }}
            placeholder={props.task.description}
            value={description}
            onChange={handleEditedDescription}
          ></textarea>
          <label htmlFor="date">Wprowadź nową datę zakończenia zadania:</label>
          <input
            type="date"
            className="new-finish-date"
            value={finishDate}
            min={minDate}
            onChange={handleEditedDate}
          />
          <button className="popup__body-btn--accept" onClick={handleClickEdit}>
            Zatwierdź
          </button>
          <button
            className="popup__body-btn--cancel"
            onClick={() => props.closePopup(props.task.id)}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
