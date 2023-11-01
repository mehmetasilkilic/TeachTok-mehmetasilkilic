import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTimerContext } from "../../../Core/Context/TimerContext";

import { styles } from "./styles";

const HeaderTime = () => {
  const { formattedTime } = useTimerContext();

  return (
    <View style={styles.container}>
      <FontAwesome5 name="stopwatch" size={22} color="#999" />
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
};

export default HeaderTime;
