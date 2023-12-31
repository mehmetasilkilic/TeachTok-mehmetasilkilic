import { render, fireEvent } from "@testing-library/react-native";
import Answers from "../Answers";
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

describe("Answers Component", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <Answers options={options} questionId={questionId} />
    );

    const container = getByTestId("answers-container");
    expect(container).toBeTruthy();

    options.forEach((option) => {
      const optionElement = getByText(option.answer);
      expect(optionElement).toBeTruthy();
    });
  });

  it("disables options after selecting one", () => {
    const { getByTestId } = render(
      <Answers options={options} questionId={questionId} />
    );

    const option1 = getByTestId("option-1");
    const option2 = getByTestId("option-2");
    const option3 = getByTestId("option-3");

    fireEvent.press(option1);
    expect(option1.props.accessibilityState.disabled).toBeTruthy();
    expect(option2.props.accessibilityState.disabled).toBeTruthy();
    expect(option3.props.accessibilityState.disabled).toBeTruthy();
  });
});
