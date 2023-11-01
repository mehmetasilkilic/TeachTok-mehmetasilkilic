import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

interface PlaylistProps {
  playlistText: string;
}

const Playlist = ({ playlistText }: PlaylistProps) => (
  <View testID="playlist-container" style={styles.container}>
    <View style={styles.subContainer}>
      <AntDesign name="youtube" size={16} color="#fff" />
      <Text style={styles.text}>Playlist&#x2022;{playlistText}</Text>
    </View>
    <AntDesign name="right" size={16} color="#fff" />
  </View>
);
export default Playlist;
