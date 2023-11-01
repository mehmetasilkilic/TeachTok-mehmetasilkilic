import { render } from "@testing-library/react-native";

import Interactions from "../Interactions";

describe("Interactions Component", () => {
  it("renders correctly", () => {
    const profileImage = "https://example.com/profile.jpg";
    const { getByTestId } = render(
      <Interactions profileImage={profileImage} />
    );

    const container = getByTestId("interactions-container");
    expect(container).toBeTruthy();

    const image = getByTestId("profile-image");
    expect(image.props.source).toEqual({ uri: profileImage });
  });
});
