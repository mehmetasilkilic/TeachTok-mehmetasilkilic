import { render } from "@testing-library/react-native";

import Home from "../Home";

describe("Home Screen", () => {
  it("renders loading indicator when data is loading", () => {
    jest.mock("../../../Hooks/useQuestions", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        questionsData: [],
        status: "loading",
      })),
    }));

    const { findByTestId } = render(<Home />);
    const loadingIndicator = findByTestId("loading-indicator");
    expect(loadingIndicator).toBeDefined();
  });

  it("renders question data when data is loaded successfully", () => {
    jest.mock("../../../Hooks/useQuestions", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        questionsData: [
          {
            description: "5.5 Sectional Conflict: Regional Differences #apush",
            id: 6194,
            image:
              "https://cross-platform-rwa.rp.devfactory.com/images/6194%20-%20black%20people%20after%20slavery.png",
            options: [],
            playlist: "Period 6: 1865-1898",
            question:
              'What did it mean when defenders of slavery called it a "positive social good"?',
            type: "mcq",
            user: {
              avatar:
                "https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png",
              name: "AP US History",
            },
          },
        ],
        status: "success",
      })),
    }));

    const { findByText } = render(<Home />);
    const questionText = findByText(
      'What did it mean when defenders of slavery called it a "positive social good"?'
    );
    expect(questionText).toBeDefined();
  });

  it("renders error message when data loading fails", () => {
    jest.mock("../../../Hooks/useQuestions", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        questionsData: [],
        status: "error",
      })),
    }));

    const { findByText } = render(<Home />);
    const errorMessage = findByText("ERROR");
    expect(errorMessage).toBeDefined();
  });
});
