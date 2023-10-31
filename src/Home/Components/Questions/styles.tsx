import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: 16,
  },
  answer: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
  },
  correctAnswer: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "rgba(24, 240, 64, 0.4)",
    justifyContent: "center",
  },
  wrongAnswer: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "rgba(255, 0, 0, 0.4)",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
