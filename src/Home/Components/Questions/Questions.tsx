import { useState, useRef } from "react";
import { Animated, View, Text, TouchableOpacity } from "react-native";

import { OptionProps } from "../../Models";

import { styles } from "./styles";

interface QuestionsProps {
  options: OptionProps[];
  correctOption: string;
}

const Questions = ({ options, correctOption }: QuestionsProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const onSelectOption = (optionId: string) => {
    if (selectedOption === "") {
      setSelectedOption(optionId);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          onPress={() => onSelectOption(option.id)}
          key={option.id}
          style={
            selectedOption === option.id
              ? selectedOption === correctOption
                ? styles.correctAnswer
                : styles.wrongAnswer
              : selectedOption !== correctOption && correctOption === option.id
              ? styles.correctAnswer
              : styles.answer
          }
        >
          <Text style={styles.text}>{option.answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Questions;
