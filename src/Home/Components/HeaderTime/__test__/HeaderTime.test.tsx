import { render } from "@testing-library/react-native";
import HeaderTime from "../HeaderTime";
import { TimerProvider } from "../../../../Core/Context/TimerContext";

describe("HeaderTime component with TimerContext", () => {
  it("renders the HeaderTime component with formatted time from TimerContext", () => {
    const formattedTime = "0s";

    const { getByText } = render(
      <TimerProvider>
        <HeaderTime />
      </TimerProvider>
    );

    expect(getByText(formattedTime)).toBeTruthy();
  });
});
