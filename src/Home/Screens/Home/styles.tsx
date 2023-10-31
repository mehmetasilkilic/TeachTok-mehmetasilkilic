import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  column: {
    width: "80%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  textContainer: {
    marginTop: 64,
    borderRadius: 8,
    margin: 16,
    overflow: "hidden",
    width: "65%",
  },
  text: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 8,
    color: "white",
    fontSize: 24,
  },
});
