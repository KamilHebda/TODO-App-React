import React, { Component } from "react";
import "./AddTask.scss";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    description: "",
    finishDate: this.minDate,
    valid: true,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      finishDate: e.target.value,
    });
  };

  handleClick = () => {
    const { text, description, finishDate } = this.state;
    if (text !== "" && description !== "") {
      const add = this.props.add(text, description, finishDate);
      if (add) {
        this.setState({
          text: "",
          description: "",
          finishDate: this.minDate,
          valid: true,
        });
      }
    } else {
      this.setState({
        valid: false,
      });
    }
  };

  render() {
    return (
      <div className="todo__header">
        <h1>
          <i className="fa-solid fa-note-sticky"></i>TODO List
        </h1>
        <input
          type="text"
          className="todo__header-title"
          placeholder="Wpisz treść zadania..."
          value={this.state.text}
          onChange={this.handleText}
        />
        <textarea
          className="todo__header-details"
          rows="5"
          style={{ resize: "none" }}
          placeholder="Wpisz szczegóły zadania..."
          value={this.state.description}
          onChange={this.handleDescription}
        ></textarea>
        <label htmlFor="date" className="todo__header-date-info">
          Wprowadź datę zakończenia zadania:
        </label>
        <input
          type="date"
          className="todo__header-date"
          value={this.state.finishDate}
          min={this.minDate}
          onChange={this.handleDate}
        />
        <button className="todo__header-add-btn" onClick={this.handleClick}>
          Dodaj zadanie
        </button>
        {this.state.valid ? null : (
          <p className="todo__header-alert">Uzupełnij wszystkie pola</p>
        )}
      </div>
    );
  }
}

export default AddTask;
