import React, { useState } from "react";
import "./Task.scss";

import TaskForm from "./TaskForm";
import { FaGithub } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import notFoundIllustration from "../../assets/svg/notFoundIllustration.svg";
import taskInitialIllustration from "../../assets/svg/taskInitialIllustration.svg";

// Redux Imports
import { useSelector } from "react-redux";

function Task() {
  const [status, setStatus] = useState("Initial");

  // Redux Functions
  const results = useSelector((state) => state.search.results);
  console.log(results);

  return (
    <section className="task" id="task-section">
      <div className="task__container main-container">
        <h2 className="task__title section-title">Frontend Task</h2>
        <p className="task__subtitle">
          Search GitHub For Users & Organizations
        </p>
        <div className="task__content-container">
          <div className="task__form-container">
            <h3>
              <FaGithub /> GitHub Search
            </h3>
            <TaskForm status={status} setStatus={setStatus} />
          </div>
          {status === "Initial" && (
            <div className="task__initial">
              <img
                src={taskInitialIllustration}
                alt="Task Initial Illustration"
              />
            </div>
          )}
          {status === "Success" && (
            <div className="task__results-container">
              {results.map((result) => (
                <div
                  className={`task__result-card ${
                    result.type === "User" ? "user" : "organization"
                  }`}
                  key={result.id}
                >
                  <Avatar
                    src={result.avatar_url}
                    sx={{ height: 70, width: 70 }}
                  />
                  <p>{result.login}</p>
                  <a href={result.html_url} target="_blank">
                    GitHub Profile
                  </a>
                </div>
              ))}
            </div>
          )}
          {status === "No Results Found" && (
            <div className="task__not-found">
              <img src={notFoundIllustration} alt="Not Found Illustration" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Task;
