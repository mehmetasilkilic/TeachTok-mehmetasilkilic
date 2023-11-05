import { useState } from "react";
import { View } from "react-native";

import { OptionProps } from "../../Models";
import useCorrectAnswer from "../../Hooks/useCorrectAnswer";

import { styles } from "./styles";
import AnswerButton from "../AnswerButton/AnwerButton";

interface AnswersProps {
  options: OptionProps[];
  questionId: number;
}

const Answers = ({ options, questionId }: AnswersProps) => {
  const { correctOption } = useCorrectAnswer(questionId);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(true);
  };

  return (
    <View style={styles.container} testID="answers-container">
      {options.map((option, index) => (
        <AnswerButton
          key={index}
          testID={`option-${index + 1}`}
          toggleDisabled={toggleDisabled}
          isDisabled={isDisabled}
          option={option}
          correctOption={correctOption}
        />
      ))}
    </View>
  );
};

export default Answers;
