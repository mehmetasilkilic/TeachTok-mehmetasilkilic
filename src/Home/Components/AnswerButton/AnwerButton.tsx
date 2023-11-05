import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  View,
  Image,
} from "react-native";
import { styles } from "./styles";
import { OptionProps } from "../../Models";

interface AnswerButton {
  option: OptionProps;
  correctOption: string;
  testID: string;
  isDisabled: boolean;
  toggleDisabled: () => void;
}

const AnswerButton = ({
  option,
  correctOption,
  testID,
  isDisabled,
  toggleDisabled,
}: AnswerButton) => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [answerStatus, setAnswerStatus] = useState("");

  const slideBackground = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const onAnswerClick = () => {
    toggleDisabled();
    if (correctOption === option.id) {
      setAnswerStatus("correct");
      slideBackground();
    } else {
      setAnswerStatus("wrong");
      slideBackground();
    }
  };

  useEffect(() => {
    if (answerStatus !== "correct") {
      if (correctOption === option.id && isDisabled) {
        setAnswerStatus("realCorrect");
        slideBackground();
      }
    }
  }, [isDisabled]);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      testID={testID}
      onPress={onAnswerClick}
    >
      <View style={styles.answer}>
        <Animated.View
          style={[
            styles.background,
            {
              backgroundColor: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  "transparent",
                  answerStatus === "correct" || answerStatus === "realCorrect"
                    ? "rgba(40, 177, 143, 0.7)"
                    : answerStatus === "wrong"
                    ? "rgba(220, 95, 95, 0.7)"
                    : "rgba(255, 255, 255, 0.4)",
                ],
              }),
              transform: [
                {
                  translateX: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [500, 0],
                  }),
                },
              ],
            },
          ]}
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{option.answer}</Text>
          <View style={styles.imageWrapper}>
            {correctOption === option.id && answerStatus === "correct" ? (
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/cda0/ce7c/9fc0298f1a47d3a7a045c1311202ac2c?Expires=1699833600&Signature=kBOS8XRG3z3TQlYSr7hNU5reZotwxSkJVp3Yj04qhIdP5Es0K5CItiJmjpEZLXihOXwtbcDWIjYIzOFWmCKR1VXk0T5GJFsTcnNzWdavjdz0yljMtWtFSZIqYAaoJFfx0okvUbSAFgTUy9rUM1qIc5-8ADMKUy7pS7LoZT0q-7tqsLa7gGyG4BGcKzQsKgN4K7cNuVWpWGBmlBPOBsGiBgdJG8HA88v7Ibsx1ynOalilctrnH44ObLiqWUExdJQ8bktvTQkzp1D2jkXMU9kXy1evswp-HCJMZ0ksjosquEvchm6Y~y5mYro3~X~8FN4BCRnHauup2W3MJoN4BAF-Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                }}
                style={styles.thumbsUpStyle}
              />
            ) : null}
            {correctOption !== option.id && answerStatus === "wrong" ? (
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/0b81/5c65/ba4ffcacaa979db7ee513dc004374c7f?Expires=1699833600&Signature=OjC1PjyQHBxdVz~29JpWeu48K36et6YzmA83zOWiLsQ2OLY7QrnSxtcPSXYRIg~9cFiLiSTl0OcMMPNkKREsLXNc0A~E-QzbG-hxXgt~jtMrxCA3b6nOph-DRYXkVSkPdHRK1cWPANQ7rIbjBiy3w203LBFEkAxyhxW7l6Hc--GaVhiO8WnNGRy2cJvQBtIK~MbdH5SdjAGWszSN74w61JsLwE8tdw8B6O~Fgw68wpTfmS1fYYegf5Kgm89U0Sd45cIRRjwJ03FZPSWfGSOk7uKopmsmEYtezc6zxUgArahuNbk8C~UtHlx6qKXY-p7f~VRk6YivVqacDPbDlKfLbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                }}
                style={styles.thumbsDownStyle}
              />
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnswerButton;
