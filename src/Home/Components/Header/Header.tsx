import React, { ReactNode } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface HeaderProps {
  leftElement?: ReactNode;
  title: string;
  rightElement?: ReactNode;
}

const Header = ({ leftElement, title, rightElement }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>{leftElement}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.titleBorder} />
      </View>
      <View style={styles.headerRight}>{rightElement}</View>
    </View>
  );
};

export default Header;
