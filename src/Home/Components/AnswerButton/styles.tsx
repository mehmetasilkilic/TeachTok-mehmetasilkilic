import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: 50,
    height: 66,
  },
  thumbsUpStyle: {
    marginBottom: 16,
    width: 50,
    height: 50,
  },
  thumbsDownStyle: {
    marginTop: 16,
    width: 50,
    height: 50,
    transform: [{ rotate: "180deg" }],
  },
  answer: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 16,
    minHeight: 50,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  text: {
    width: "80%",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
