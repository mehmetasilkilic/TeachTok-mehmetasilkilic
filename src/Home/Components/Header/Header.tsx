import { ReactNode } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { styles } from "./styles";

export interface HeaderProps {
  leftElement?: ReactNode;
  title: string;
  rightElement?: ReactNode;
}

const Header = ({ leftElement, title, rightElement }: HeaderProps) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>{leftElement}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          <View style={styles.titleBorder} />
        </View>
        <View style={styles.headerRight}>{rightElement}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
