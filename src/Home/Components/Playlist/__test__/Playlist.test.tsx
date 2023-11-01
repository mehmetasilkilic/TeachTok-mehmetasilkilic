import React from "react";
import { render } from "@testing-library/react-native";
import Playlist from "../Playlist";

describe("Playlist Component", () => {
  it("renders correctly", () => {
    const playlistText = "My Playlist";
    const { getByTestId, getByText } = render(
      <Playlist playlistText={playlistText} />
    );

    const container = getByTestId("playlist-container");
    expect(container).toBeTruthy();

    const playlistTextElement = getByText(`Playlist•${playlistText}`);
    expect(playlistTextElement).toBeTruthy();
  });
});
