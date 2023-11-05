import { Dimensions, StyleSheet, Platform } from "react-native";

const { height } = Dimensions.get("window");
const BottomTabHeight = Platform.OS === "ios" ? 80 : 70;

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: height - BottomTabHeight,
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
  indicator: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  secondIndicator: {
    width: "100%",
    paddingRight: 16,
    alignItems: "flex-end",
    position: "absolute",
    top: 140,
  },
  container: {
    position: "relative",
    flex: 1,
    height: "100%",
  },
  header: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 96,
    borderRadius: 8,
    margin: 16,
    overflow: "hidden",
    width: "65%",
    alignItems: "stretch",
  },
  wordContainer: {
    paddingHorizontal: 4,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  text: {
    lineHeight: 36,
    color: "white",
    fontSize: 24,
  },
  errorText: {
    fontSize: 30,
    color: "red",
  },
});
