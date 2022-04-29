import React, { useState } from "react";
import "./TaskForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

// Redux Imports
import { useDispatch } from "react-redux";
import { setResults } from "../../features/search/searchSlice";

function TaskForm() {
  // Redux Functions
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (values.searchCondition === "users") {
        const res = await axios.get(
          `https://api.github.com/search/users?q=${values.search}`
        );
        dispatch(setResults(res.data.items));
        // console.log(res.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ searchCondition: "", search: "" }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="task-form">
          <div className="task-form__radio-container">
            <Field type="radio" name="searchCondition" value="users" />
            <label htmlFor="searchCondition">Users</label>
            <Field type="radio" name="searchCondition" value="organizations" />
            <label htmlFor="searchCondition">Organizations</label>
          </div>
          <div className="task-form__search-container">
            <Field type="search" name="search" placeholder="Search GitHub" />
            <button type="submit">Search</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
