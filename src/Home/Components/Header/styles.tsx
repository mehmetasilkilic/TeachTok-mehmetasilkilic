import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerLeft: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleBorder: {
    marginTop: 4,
    width: 30,
    height: 4,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
