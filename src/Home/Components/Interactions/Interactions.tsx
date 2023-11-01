import { Text, Image, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";

interface InteractionsProps {
  profileImage: string;
}

const Interactions = ({ profileImage }: InteractionsProps) => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <TouchableOpacity>
        <Image source={{ uri: profileImage }} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.plusContainer}>
        <AntDesign name="plus" size={14} color="#fff" />
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.interactionContainer}>
      <AntDesign name="heart" size={30} color="#fff" />
      <Text style={styles.text}>87</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.interactionContainer}>
      <FontAwesome name="commenting" size={30} color="#fff" />
      <Text style={styles.text}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.interactionContainer}>
      <FontAwesome name="bookmark" size={30} color="#fff" />
      <Text style={styles.text}>203</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.interactionContainer}>
      <FontAwesome name="share" size={30} color="#fff" />
      <Text style={styles.text}>2</Text>
    </TouchableOpacity>
  </View>
);

export default Interactions;
