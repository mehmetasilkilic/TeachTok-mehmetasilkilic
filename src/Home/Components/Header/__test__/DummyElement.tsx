import { Text, View } from "react-native";

const DummyElement = ({ testID, title }: { testID: string; title: string }) => {
  return (
    <View testID={testID}>
      <Text>{title}</Text>
    </View>
  );
};

export default DummyElement;
