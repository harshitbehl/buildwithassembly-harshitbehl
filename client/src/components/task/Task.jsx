import React from "react";
import "./Task.scss";

function Task() {
  return (
    <section className="task" id="task-section">
      <div className="task__container main-container">
        <h2 className="task__title section-title">Frontend Task</h2>
        <p className="task__subtitle">
          Search GitHub For Users & Organizations
        </p>
        <div className="task__content-container">
          <div className="task__form-container"></div>
          <div className="task__results-container"></div>
        </div>
      </div>
    </section>
  );
}

export default Task;
