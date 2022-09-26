import React, { Component } from "react";

import "./EditTask.scss";

class EditTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    id: this.props.task.id,
    text: "",
    description: "",
    finishDate: this.minDate,
    valid: true,
  };

  handleEditedText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleEditedDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleEditedDate = (e) => {
    this.setState({
      finishDate: e.target.value,
    });
  };

  handleClickEdit = () => {
    const { id, text, description, finishDate } = this.state;
    if (text !== "" && description !== "") {
      const edit = this.props.edit(id, text, description, finishDate);
      if (edit) {
        this.setState({
          id: id,
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
      <div className="popup-shadow">
        <div className="popup">
          <h3>Edytuj zadanie:</h3>
          <div className="popup__body">
            {this.state.valid ? null : (
              <p className="todo__header-alert">Uzupełnij wszystkie pola!</p>
            )}
            <input
              type="text"
              className="popup__body-input"
              placeholder={this.props.task.text}
              value={this.state.text}
              onChange={this.handleEditedText}
            />
            <textarea
              className="popup__body-details"
              rows="5"
              style={{ resize: "none" }}
              placeholder={this.props.task.description}
              value={this.state.description}
              onChange={this.handleEditedDescription}
            ></textarea>
            <label htmlFor="date">
              Wprowadź nową datę zakończenia zadania:
            </label>
            <input
              type="date"
              className="new-finish-date"
              value={this.props.task.finishDate}
              min={this.minDate}
              onChange={this.handleEditedDate}
            />
            <button
              className="popup__body-btn--accept"
              onClick={this.handleClickEdit}
            >
              Zatwierdź
            </button>
            <button
              className="popup__body-btn--cancel"
              onClick={() => this.props.closePopup(this.props.task.id)}
            >
              Anuluj
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTask;
