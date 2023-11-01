import { useEffect, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

import { FETCH_STATUS } from "../Helpers/fetchStatus";

const useCorrectAnswer = (questionId: number) => {
  const [correctOption, setCorrectOption] = useState("");
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);

  const fetchAnswer = async () => {
    try {
      setStatus(FETCH_STATUS.LOADING);
      const res = await axios.get(
        `https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`
      );
      if (res.status === 200) {
        setCorrectOption(res.data.correct_options[0].id);
        setStatus(FETCH_STATUS.SUCCESS);
      }
    } catch (err) {
      setStatus(FETCH_STATUS.ERROR);
      Alert.alert(
        "Error",
        "An error occurred while fetching data. Please try again.",
        [
          {
            text: "Reload",
            onPress: () => {
              fetchAnswer();
            },
          },
        ]
      );
      throw err;
    }
  };

  useEffect(() => {
    if (questionId) {
      fetchAnswer();
    }
  }, [questionId]);

  return { correctOption, status };
};

export default useCorrectAnswer;
