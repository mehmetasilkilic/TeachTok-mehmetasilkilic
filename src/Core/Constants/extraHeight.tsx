import { Platform, StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

export const extraHeight = Platform.OS === "ios" ? 80 : 60 + StatusBarHeight;
