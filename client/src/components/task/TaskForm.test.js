import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("TaskForm Fields Rendering", () => {
  test("form fields should be rendered", () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    // Radio
    const radioButtons = screen.getAllByRole("radio");

    // Users
    expect(radioButtons[0]).toBeInTheDocument();

    // Organizations
    expect(radioButtons[1]).toBeInTheDocument();

    // Search Input
    const searchInput = screen.getAllByRole("searchbox");
    expect(...searchInput).toBeInTheDocument();
  });
});
