import { render } from "@testing-library/react-native";
import Info from "../Info";

describe("Info component", () => {
  it("renders the Info component with username and description", () => {
    const username = "JohnDoe";
    const description = "This is a #sample";

    const { getByText } = render(
      <Info username={username} description={description} />
    );

    expect(getByText(username)).toBeTruthy();
    expect(getByText("This is a #sample")).toBeTruthy();
  });
});
