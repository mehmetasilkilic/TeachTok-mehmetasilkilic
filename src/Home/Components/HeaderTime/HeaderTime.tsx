import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";

interface HeaderTimeProps {
  timeleft: string;
}

const HeaderTime = ({ timeleft }: HeaderTimeProps) => (
  <View style={styles.container}>
    <FontAwesome5 name="stopwatch" size={22} color="#777" />
    <Text style={styles.text}>{timeleft}</Text>
  </View>
);

export default HeaderTime;
