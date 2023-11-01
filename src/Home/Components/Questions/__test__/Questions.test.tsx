import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Questions from "../Questions";
import { styles } from "../styles";

jest.mock("../../../Hooks/useCorrectAnswer", () => ({
  __esModule: true,
  default: jest.fn(() => {
    return { correctOption: "option1" };
  }),
}));

const options = [
  { id: "option1", answer: "Option 1" },
  { id: "option2", answer: "Option 2" },
  { id: "option3", answer: "Option 3" },
];
const questionId = 1;

describe("Questions Component", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <Questions options={options} questionId={questionId} />
    );

    const container = getByTestId("questions-container");
    expect(container).toBeTruthy();

    options.forEach((option) => {
      const optionElement = getByText(option.answer);
      expect(optionElement).toBeTruthy();
    });
  });

  it("disables options after selecting one", () => {
    const { getByTestId } = render(
      <Questions options={options} questionId={questionId} />
    );

    const option1 = getByTestId("option-1");
    const option2 = getByTestId("option-2");
    const option3 = getByTestId("option-3");

    fireEvent.press(option1);
    expect(option1.props.accessibilityState.disabled).toBeTruthy();
    expect(option2.props.accessibilityState.disabled).toBeTruthy();
    expect(option3.props.accessibilityState.disabled).toBeTruthy();
  });

  it("applies correct styles for a correct answer", () => {
    const { getByTestId } = render(
      <Questions options={options} questionId={questionId} />
    );

    const option1 = getByTestId("option-1");
    fireEvent.press(option1);

    const correctAnswerButton = getByTestId("option-1");
    expect(correctAnswerButton.props.style.backgroundColor).toBe(
      styles.correctAnswer.backgroundColor
    );
  });

  it("applies correct styles for a wrong answer", () => {
    const { getByTestId } = render(
      <Questions options={options} questionId={questionId} />
    );

    const option2 = getByTestId("option-2");
    fireEvent.press(option2);

    const wrongAnswerButton = getByTestId("option-2");
    expect(wrongAnswerButton.props.style.backgroundColor).toBe(
      styles.wrongAnswer.backgroundColor
    );
  });
});
