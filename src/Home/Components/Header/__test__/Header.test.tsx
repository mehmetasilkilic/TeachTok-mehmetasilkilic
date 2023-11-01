import { render } from "@testing-library/react-native";
import Header, { HeaderProps } from "../Header";
import DummyElement from "./DummyElement";

describe("Header component", () => {
  it("renders the header with title and optional left and right elements", () => {
    const title = "Test Header";
    const leftElement = (
      <DummyElement testID="left-element" title="Left Element" />
    );
    const rightElement = (
      <DummyElement testID="right-element" title="Right Element" />
    );
    const props: HeaderProps = {
      title,
      leftElement,
      rightElement,
    };
    const { getByText, queryByTestId } = render(<Header {...props} />);

    expect(getByText(title)).toBeTruthy();
    expect(queryByTestId("left-element")).toBeTruthy();
    expect(queryByTestId("right-element")).toBeTruthy();
  });

  it("renders the header with only a title when left and right elements are not provided", () => {
    const title = "Test Header";
    const props: HeaderProps = {
      title,
    };
    const { getByText, queryByTestId } = render(<Header {...props} />);

    expect(getByText(title)).toBeTruthy();
    expect(queryByTestId("left-element")).toBeNull();
    expect(queryByTestId("right-element")).toBeNull();
  });
});
