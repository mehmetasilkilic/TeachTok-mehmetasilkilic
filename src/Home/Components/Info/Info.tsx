import { Text, View } from "react-native";

import { styles } from "./styles";

interface InfoProps {
  username: string;
  description: string;
}

const Info = ({ username, description }: InfoProps) => {
  const descriptionParts = description.split("#");

  return (
    <View style={styles.container}>
      <Text style={styles.user}>{username}</Text>
      <Text style={styles.desc}>
        {descriptionParts[0]}
        <Text style={styles.boldDesc}>{`#${descriptionParts[1]}`}</Text>
      </Text>
    </View>
  );
};

export default Info;
