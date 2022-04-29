import React from "react";
import "./TaskForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";

function TaskForm() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
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
            <label htmlFor="searchCondition">Users</label>
            <Field type="radio" name="searchCondition" value="users" />
            <label htmlFor="searchCondition">Organizations</label>
            <Field type="radio" name="searchCondition" value="organizations" />
          </div>
          <div className="task-form__search-container">
            <Field type="search" name="search" placeholder="Search GitHub" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
