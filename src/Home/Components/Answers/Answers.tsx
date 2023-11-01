import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { OptionProps } from "../../Models";
import useCorrectAnswer from "../../Hooks/useCorrectAnswer";

import { styles } from "./styles";

interface AnswersProps {
  options: OptionProps[];
  questionId: number;
}

const Answers = ({ options, questionId }: AnswersProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { correctOption } = useCorrectAnswer(questionId);

  const onSelectOption = (optionId: string) => {
    if (selectedOption === "") {
      setSelectedOption(optionId);
    }
  };

  return (
    <View style={styles.container} testID="answers-container">
      {options.map((option, index) => (
        <TouchableOpacity
          testID={`option-${index + 1}`}
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

export default Answers;
