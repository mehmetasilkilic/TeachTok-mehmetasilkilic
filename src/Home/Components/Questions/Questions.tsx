import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { OptionProps } from "../../Models";
import useCorrectAnswer from "../../Hooks/useCorrectAnswer";

import { styles } from "./styles";

interface QuestionsProps {
  options: OptionProps[];
  questionId: number;
  questionStatus: string;
}

const Questions = ({ options, questionId, questionStatus }: QuestionsProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { correctOption } = useCorrectAnswer(questionId);

  const onSelectOption = (optionId: string) => {
    if (selectedOption === "") {
      setSelectedOption(optionId);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          disabled={selectedOption !== ""}
          onPress={() => onSelectOption(option.id)}
          key={option.id}
          style={
            selectedOption === ""
              ? styles.answer
              : selectedOption === option.id
              ? selectedOption === correctOption
                ? styles.correctAnswer
                : styles.wrongAnswer
              : selectedOption !== correctOption && correctOption === option.id
              ? styles.correctAnswer
              : styles.answer
          }
        >
          <Text style={styles.text}>{option.answer}</Text>
          {selectedOption === option.id && selectedOption === correctOption ? (
            <FontAwesome name="thumbs-up" size={30} color="#fff" />
          ) : null}
          {selectedOption === option.id && selectedOption !== correctOption ? (
            <FontAwesome name="thumbs-down" size={30} color="#fff" />
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Questions;
