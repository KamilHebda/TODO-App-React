import "./AddTask.scss";

function AddTask() {
  return (
    <div className="todo__header">
      <h1>
        <i className="fa-solid fa-note-sticky"></i>TODO List
      </h1>
      <input
        type="text"
        className="todo__header-title"
        placeholder="Wpisz treść zadania..."
      />
      <textarea
        className="todo__header-details"
        rows="5"
        style={{ resize: "none" }}
        placeholder="Wpisz szczegóły zadania..."
      ></textarea>
      <label htmlFor="date" className="todo__header-date-info">
        Wprowadź datę zakończenia zadania:
      </label>
      <input type="date" className="todo__header-date" />
      <button className="todo__header-add-btn">Dodaj zadanie</button>
      <p className="todo__header-alert">Uzupełnij wszystkie pola!</p>
    </div>
  );
}

export default AddTask;
