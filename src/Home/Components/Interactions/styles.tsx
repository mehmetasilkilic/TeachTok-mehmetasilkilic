import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },
  image: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  interactionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  plusContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: "#14c45a",
    position: "absolute",
    bottom: -10,
  },
});
